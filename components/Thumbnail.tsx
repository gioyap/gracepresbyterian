// components/Thumbnail.tsx
import React from "react";

interface ThumbnailProps {
	href: string;
	imgSrc: string;
	altText: string;
	title: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
	href,
	imgSrc,
	altText,
	title,
}) => {
	return (
		<a
			href={href}
			className="bg-white rounded-xl shadow-lg overflow-hidden block transform duration-300 hover:scale-105 hover:shadow-3xl relative z-10"
		>
			<img src={imgSrc} alt={altText} className="w-full h-60 object-cover" />
			<div className="p-4">
				<p className="md:text-h4">{title}</p>
			</div>
		</a>
	);
};

export default Thumbnail;
