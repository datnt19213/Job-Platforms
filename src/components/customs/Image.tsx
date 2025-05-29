"use client";
import { useState } from 'react';

interface ImageProps {
	src: string;
	alt?: string;
	className?: string;
	imageClass?: string; // Add this line
	fallbackSrc?: string;
	fit?: "w" | "h" | "both";
	style?: React.CSSProperties;
	containerStyle?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({
	src,
	alt = "image",
	className = "",
	imageClass = "", // Add this line
	fallbackSrc = "/fallback.jpg",
	fit = "both",
	style = {},
	containerStyle = {},
}) => {
	const [imgSrc, setImgSrc] = useState(src);
	const [loading, setLoading] = useState(true);

	return (
		<div style={containerStyle} className={`relative overflow-hidden ${className}`}>
			{loading && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
			<img
				style={style}
				src={imgSrc}
				alt={alt}
				className={`${
					fit === "w" ? "w-full h-auto" : fit === "h" ? "h-full w-auto" : "w-full h-full"
				} object-cover transition-opacity duration-500 ${
					loading ? "opacity-0" : "opacity-100"
				} ${imageClass}`}
				onLoad={() => setLoading(false)}
				onError={() => setImgSrc(fallbackSrc)}
			/>
		</div>
	);
};

export default Image;
