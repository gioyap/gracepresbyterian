import React from "react";
import Thumbnail from "@/components/Thumbnail";
import { createClient } from "@/utils/supabase/client"; // Use the correct import for the client

// Define the async function to fetch data
const fetchThumbnails = async () => {
	const supabase = createClient(); // Make sure to use the client for public operations

	const { data: matthew, error } = await supabase
		.from("matthew") // Adjust the table name as necessary
		.select("*");

	if (error) {
		console.error(error);
		return [];
	}

	const bucketUrl =
		"https://bbsjgxlprzouzklvfhwf.supabase.co/storage/v1/object/public/thumbnails/";

	return matthew.map((thumbnail: any) => ({
		...thumbnail,
		imgSrc: `${bucketUrl}${thumbnail.imgSrc}`,
	}));
};

// Server component
const Page = async () => {
	const thumbnailsData = await fetchThumbnails();

	return (
		<div>
			<section
				className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
				style={{
					backgroundImage: "url('/images/bible.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-30"></div>
				<h1 className=" text-red-600 font-bold text-title">Messages</h1>
			</section>
			<section className="my-16">
				<div className="max-w-screen-2xl mx-auto text-center text-navy">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{thumbnailsData.map((thumbnail: any, index: any) => (
							<Thumbnail
								key={index}
								href={thumbnail.href}
								imgSrc={thumbnail.imgSrc}
								altText={thumbnail.altText}
								title={thumbnail.title}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Page;
