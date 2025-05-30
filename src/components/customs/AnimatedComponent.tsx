"use client";
import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import clsx from 'clsx';
import {
  motion,
  Transition,
  useAnimation,
  Variants,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimatorProps {
	children: React.ReactNode;
	fade?: boolean;
	slide?: "left" | "right" | "up" | "down";
	zoom?: "in" | "out";
	isZoom?: boolean;
	spring?: boolean;
	stiffness?: number;
	damping?: number;
	velocity?: number;
	once?: boolean;
	delay?: number;
	duration?: number;
	easing?: "easeOut" | "easeIn" | "linear" | "easeInOut" | [number, number, number, number];
	loop?: boolean;
	reverse?: boolean;
	triggerOffset?: number;
	className?: string;
	contentClassName?: string;
	triggerIds?: string[]; // NEW: multiple IDs
	rootMargin?: string; // NEW: custom root margin
	intersectionRootId?: string; // NEW: custom root element by id
	distancing?: number; // NEW: distance for slide animation
}

const getVariants = (
	fade: boolean,
	slide?: ScrollAnimatorProps["slide"],
	zoom?: ScrollAnimatorProps["zoom"],
	isZoom?: boolean,
	distancing?: number
): Variants => {
	const hidden: any = {};
	const visible: any = {};

	if (fade) {
		hidden.opacity = 0;
		visible.opacity = 1;
	}

	if (slide) {
		const distance = distancing || 80; // Use provided distancing or default to 80
		switch (slide) {
			case "left":
				hidden.x = -distance;
				visible.x = 0;
				break;
			case "right":
				hidden.x = distance;
				visible.x = 0;
				break;
			case "up":
				hidden.y = distance;
				visible.y = 0;
				break;
			case "down":
				hidden.y = -distance;
				visible.y = 0;
				break;
		}
	}

	if (zoom && isZoom) {
		if (zoom === "in") {
			hidden.scale = 0.8;
			visible.scale = 1;
		} else if (zoom === "out") {
			hidden.scale = 1.2;
			visible.scale = 1;
		}
	}

	return {hidden, visible};
};

/**
 * ScrollAnimator
 *
 * @description
 * A component that animates the rendering of the given children when the
 * component is scrolled into view.
 *
 * @param {React.ReactNode} children - The children to animate
 * @param {boolean} fade - (false) - Whether to fade the component in `-` ex: `fade={true}`
 * @param {string} slide - (up) - The direction to slide the component in from `-` ex: `slide="left"`
 * @param {string} zoom - (in) - The direction to zoom the component in from `-` ex: `zoom="in"`
 * @param {boolean} isZoom - (false) - Whether the zoom animation should be run `-` ex: `isZoom={true}`
 * @param {boolean} spring - (false) - Whether to use a spring animation `-` ex: `spring={true}`
 * @param {number} stiffness - (100) - The stiffness of the spring animation `(0-100)` `-` ex: `stiffness={100}`
 * @param {number} damping - (20) - The damping of the spring animation `(0-100)` `-` ex: `damping={20}`
 * @param {number} velocity - (0.5) - The velocity of the spring animation `(0-1)` `-` ex: `velocity={0.5}`
 * @param {boolean} once - (false) - Whether to only animate on the first scroll `-` ex: `once={true}`
 * @param {number} delay - (0) - The delay before the animation starts `(seconds)` `-` ex: `delay={0}`
 * @param {number} duration - (0.6) - The duration of the animation `(seconds)` `-` ex: `duration={0.6}`
 * @param {string} easing - (easeOut) - The easing function to use `-` ex: `easing="easeOut"`
 * @param {boolean} loop - (false) - Whether to loop the animation `-` ex: `loop={true}`
 * @param {boolean} reverse - (false) - Whether to reverse the animation on scroll out `-` ex: `reverse={true}`
 * @param {number} triggerOffset - (0.25) - The offset from the top of the viewport to trigger the animation - (0-1) `-` ex: `triggerOffset={0.4}`
 * @param {string[]} triggerIds - ([]) - The ids of elements to trigger the animation `-` ex: `triggerIds={["my-element"]}`
 * @param {string} rootMargin - (0px 0px -10% 0px) - The root margin of the IntersectionObserver `-` ex: `rootMargin="0px 0px -10% 0px"`
 * @param {string} intersectionRootId - (undefined) - The id of the element to use as the root of the IntersectionObserver `-` ex: `intersectionRootId="my-element"`
 * @param {number} distancing - (80) - The distance for the slide animation (default: 80) `(0-100)` `-` ex: `distancing={80}`
 * @param {string} className - (undefined) - The class name to apply to the component `-` ex: `className="my-class"`
 * @param {string} contentClassName - (undefined) - The class name to apply to the content `-` ex: `contentClassName="my-class"`
 * @returns {React.ReactElement} `React.JSX.Element` The animated component 
 */
export const ScrollAnimator = ({
	children,
	fade = false,
	slide = "up",
	zoom = "in",
	distancing = 80, // Default distance for slide animation
	isZoom = false,
	spring = false,
	stiffness = 100,
	damping = 20,
	velocity = 0.5,
	once = true,
	delay = 0,
	duration = 0.8,
	easing = "easeOut",
	loop = false,
	reverse = false,
	triggerOffset = 0.4,
	className,
	contentClassName,
	triggerIds,
	rootMargin = "0px 0px -10% 0px",
	intersectionRootId,
}: ScrollAnimatorProps) => {
	const controls = useAnimation();
	const observerRef = useRef<IntersectionObserver | null>(null);
	const motionDivRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number | "auto">(0);

	const [ref, inView] = useInView({
		threshold: triggerOffset,
		triggerOnce: once,
		rootMargin,
		root:
			typeof window !== "undefined" && intersectionRootId
				? document.getElementById(intersectionRootId) ?? undefined
				: undefined,
	});

	useEffect(() => {
		if (inView && motionDivRef.current) {
			setHeight(motionDivRef.current.scrollHeight);
			controls.start("visible");
		} else if (!once && reverse) {
			setHeight(0);
			controls.start("hidden");
		}
	}, [inView, controls, once, reverse]);

	useEffect(() => {
		if (!contentRef.current) return;

		const ro = new ResizeObserver(() => {
			setHeight(contentRef.current?.offsetHeight || 0);
		});

		ro.observe(contentRef.current);

		// Mutation observer để bắt các thay đổi DOM con
		const mo = new MutationObserver(() => {
			setTimeout(() => {
				setHeight(contentRef.current?.offsetHeight || 0);
			}, 50); // delay chút để DOM render xong
		});

		mo.observe(contentRef.current, {childList: true, subtree: true, characterData: true});

		return () => {
			ro.disconnect();
			mo.disconnect();
		};
	}, []);

	useEffect(() => {
		if (triggerIds && triggerIds.length > 0) {
			const elements = triggerIds.map((id) => document.getElementById(id)).filter(Boolean);

			if (elements.length > 0) {
				const observer = new IntersectionObserver(
					([entry]) => {
						if (entry.isIntersecting) {
							controls.start("visible");
						} else if (!once && reverse) {
							controls.start("hidden");
						}
					},
					{
						threshold: triggerOffset,
						rootMargin,
						root:
							typeof window !== "undefined" && intersectionRootId
								? document.getElementById(intersectionRootId) ?? undefined
								: undefined,
					}
				);

				elements.forEach((el) => el && observer.observe(el));
				observerRef.current = observer;

				return () => observer.disconnect();
			}
		}
	}, [triggerIds, triggerOffset, rootMargin, intersectionRootId, once, reverse, controls]);

	const variants = getVariants(fade, slide, zoom, isZoom, distancing);

	const transition: Transition = spring
		? {
				type: "spring",
				stiffness,
				damping,
				delay,
				velocity,
		  }
		: {
				type: "tween",
				ease: easing,
				duration,
				delay,
		  };

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			if (!once && reverse) {
				controls.start("hidden");
			}
		}
	}, [inView, controls, once, reverse]);

	useEffect(() => {
		if (loop) {
			const loopInterval = setInterval(() => {
				controls.start("hidden").then(() => controls.start("visible"));
			}, (duration + delay) * 1000 + 500);
			return () => clearInterval(loopInterval);
		}
	}, [loop, controls, delay, duration]);

	return (
		<motion.div
			ref={(el) => {
				ref(el);
				motionDivRef.current = el;
			}}
			className={clsx("block w-full", className)}
			variants={variants}
			initial="hidden"
			animate={controls}
			transition={transition}
			style={{
				willChange: "transform",
				overflow: "hidden",
				height,
			}}
		>
			<div ref={contentRef} className={contentClassName}>{children}</div>
		</motion.div>
	);
};
