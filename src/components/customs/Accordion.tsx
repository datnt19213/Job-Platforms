"use client";
import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { cn } from '@/lib/utils';

type AccordionItem = {
	id: number;
	title: string;
	content: React.ReactNode;
};

type AccordionProps = {
	items: AccordionItem[];
	className?: string;
	itemClassName?: string;
	triggerClassName?: string;
	contentClassName?: string;
	icon?: ({selected}: {selected: boolean}) => React.ReactNode;
	title?: ({title, selected}: {title: any, selected: boolean}) => React.ReactNode;
	content?: ({content, selected}: {content: any, selected: boolean}) => React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({
	items,
	className,
	itemClassName,
	triggerClassName,
	contentClassName,
	icon,
	title,
	content,
}) => {
	const [selected, setSelected] = useState<number | null>(null);
	const refs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		// close all other max-heights when selected changes
		refs.current.forEach((ref, index) => {
			if (ref) {
				ref.style.maxHeight = selected === index ? `${ref.scrollHeight}px` : "0px";
			}
		});
	}, [selected]);

	return (
		<div className={cn("w-full mx-auto", className)}>
			{items.map((item, index) => (
				<div key={item.id} className={cn("border border-gray-200 rounded-[8px]",itemClassName)}>
					<div
						className={cn(
							"w-full px-8 py-6 text-left focus:outline-none cursor-pointer ",
							triggerClassName
						)}
						onClick={() => setSelected(selected === index ? null : index)}
					>
						<div className="flex items-center justify-between">
							{title && title({title: item.title, selected: selected === index})}
							{icon && icon({selected: selected === index})}
						</div>
					</div>
					<div
						ref={(el) => {
							refs.current[index] = el;
						}}
						className={cn(
							"overflow-hidden transition-all duration-700 ease-in-out",
							contentClassName
						)}
						style={{maxHeight: 0, borderTop: selected !== index ? "1px solid transparent" : undefined}}
					>
						{content && content({content: item.content, selected: selected === index})}
					</div>
				</div>
			))}
		</div>
	);
};
