"use client";
import React, { useEffect, useState } from "react";
import { IoLogoYoutube } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { createClient } from "@/utils/supabase/client";

const fetchThumbnails = async (ids: number[]) => {
	const supabase = createClient();

	const { data: matthew, error: matthewError } = await supabase
		.from("matthew")
		.select("*")
		.in("id", ids);

	if (matthewError) {
		console.error("Matthew thumbnails error:", matthewError);
		return { matthew: [], john: [] };
	}

	const { data: john, error: johnError } = await supabase
		.from("john")
		.select("*")
		.in("id", ids);

	if (johnError) {
		console.error("John thumbnails error:", johnError);
		return { matthew: matthew, john: [] };
	}

	const bucketUrl =
		"https://bbsjgxlprzouzklvfhwf.supabase.co/storage/v1/object/public/thumbnails/";

	const formattedMatthew = matthew.map((thumbnail: any) => ({
		...thumbnail,
		imgSrc: `${bucketUrl}${thumbnail.imgSrc}`,
	}));

	const formattedJohn = john.map((thumbnail: any) => ({
		...thumbnail,
		imgSrc: `${bucketUrl}${thumbnail.imgSrc}`,
	}));

	return { matthew: formattedMatthew, john: formattedJohn };
};

const fetchSpecialThumbnails = async () => {
	const supabase = createClient();

	// Fetch thumbnails from 'special' table
	const { data, error } = await supabase.from("special").select("*");

	if (error) {
		console.error("Error fetching special thumbnails:", error);
		return [];
	}

	const bucketUrl =
		"https://bbsjgxlprzouzklvfhwf.supabase.co/storage/v1/object/public/thumbnails/";

	const formattedThumbnails = data.map((thumbnail: any) => ({
		...thumbnail,
		imgSrc: `${bucketUrl}${thumbnail.imgSrc}`,
	}));

	return formattedThumbnails;
};

interface Thumbnail {
	id: number;
	href: string;
	imgSrc: string;
	title: string;
	altText?: string;
}

interface ThumbnailsData {
	matthew: Thumbnail[];
	john: Thumbnail[];
}

const Page = () => {
	const [thumbnailsData, setThumbnailsData] = useState<ThumbnailsData>({
		matthew: [],
		john: [],
	});
	const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);

	useEffect(() => {
		const getThumbnails = async () => {
			// Pass specific ids (e.g., [1, 2, 3]) to fetch only those thumbnails
			const thumbnails = await fetchThumbnails([1, 2, 3]);
			setThumbnailsData(thumbnails);
		};
		getThumbnails();
	}, []);

	useEffect(() => {
		const getThumbnails = async () => {
			const specialThumbnails = await fetchSpecialThumbnails();
			setThumbnails(specialThumbnails);
		};

		getThumbnails();
	}, []);

	return (
		<div>
			{/* Hero Section */}
			<section
				className="relative w-screen h-[200px] md:h-[300px] flex items-center justify-end"
				style={{
					backgroundImage: "url('/images/worship.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="absolute inset-0 bg-navy opacity-70"></div>
				<div className="text-white text-h2 md:text-h1 lg:text-title font-bold whitespace-nowrap mr-6 md:mr-20 absolute">
					<h1>Watch</h1>
				</div>
			</section>
			<section className="p-6 md:p-0 md:py-2 bg-black">
				<h1 className=" text-h2 md:text-h1 text-white font-bold text-center mb-2">
					Cristology
				</h1>
				<div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto mb-8">
					<iframe
						width="100%"
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpresbyterian.church.984%2Fvideos%2F1116432625917264%2F&show_text=false&width=560&t=0"
						title="Cristology"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[200px] md:h-[400px] lg:h-[480px] xl:h-[640px] 2xl:h-[800px]"
					></iframe>
				</div>
			</section>
			{/* Broadcast Channels Section */}
			<section className="p-6 text-center bg-gradient-to-r from-navy to-yellow">
				<div className="max-w-screen-lg mx-auto">
					<div className="text-white mb-6">
						<h1 className=" text-h2 md:text-h1 font-bold pb-2">
							Broadcast Channels
						</h1>
						<p className="md:text-h4">
							Whether it be online, we’ve got you covered! Catch us on these
							channels:
						</p>
					</div>
					<div className="flex justify-center gap-6 text-white text-h2 md:text-h1">
						<a
							href="https://www.youtube.com/@calumpitgrace"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-yellow transition-colors"
						>
							<IoLogoYoutube />
						</a>
						<a
							href="https://www.facebook.com/presbyterian.church.984"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-yellow transition-colors"
						>
							<ImFacebook2 />
						</a>
					</div>
				</div>
			</section>
			<section className="p-6">
				<div className="max-w-screen-xl mx-auto text-center text-navy">
					<h1 className=" text-h2 md:text-h1 font-bold mb-4">
						Online Messages
					</h1>

					{/* Two-column layout for Matthew and John */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
						{/* Left column: Book of Matthew */}
						<div>
							<h2 className=" text-h3 md:text-h2 font-bold mb-4">
								Book of Matthew
							</h2>
							<div className="flex space-x-4 justify-center">
								{thumbnailsData.matthew.map((thumbnail: any) => (
									<a
										key={thumbnail.id}
										href={thumbnail.href}
										className="bg-white rounded-xl shadow-2xl block w-40 transform duration-300 hover:scale-105 hover:shadow-3xl relative z-10"
									>
										<img
											src={thumbnail.imgSrc}
											alt={thumbnail.altText || "Message Thumbnail"}
											className="w-full h-24 object-cover rounded-t-xl"
										/>
										<div className="p-2">
											<p className="md:text-h4 text-sm">{thumbnail.title}</p>
										</div>
									</a>
								))}
							</div>
							<a
								href="/watch/matthew"
								className="mt-6 inline-block text-white font-bold hover:bg-yellow hover:text-navy bg-navy p-2 rounded-xl px-4"
							>
								See Previous Messages
							</a>
						</div>

						{/* Right column: Book of John */}
						<div>
							<h2 className="text-h3 md:text-h2 font-bold mb-4 mt-8 md:mt-0">
								Book of John
							</h2>
							<div className="flex space-x-4 justify-center">
								{thumbnailsData.john.map((thumbnail: any) => (
									<a
										key={thumbnail.id}
										href={thumbnail.href}
										className="bg-white rounded-xl shadow-2xl block w-40 transform duration-300 hover:scale-105 hover:shadow-3xl relative z-10"
									>
										<img
											src={thumbnail.imgSrc}
											alt={thumbnail.altText || "Message Thumbnail"}
											className="w-full h-24 object-cover rounded-t-xl"
										/>
										<div className="p-2">
											<p className="md:text-h4 text-sm">{thumbnail.title}</p>
										</div>
									</a>
								))}
							</div>
							<a
								href="/watch/john"
								className="mt-6 inline-block text-white font-bold hover:bg-yellow hover:text-navy bg-navy p-2 rounded-xl px-4"
							>
								See Previous Messages
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="p-6 max-w-screen-xl mx-auto px-10">
				<div>
					<h1 className="text-h2 md:text-h1 text-center font-bold text-navy">
						Special Messages
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
						{/* Render special thumbnails dynamically */}
						{thumbnails.map((thumbnail) => (
							<a
								key={thumbnail.id}
								href={thumbnail.href}
								className="bg-white rounded-xl shadow-2xl block transform duration-300 hover:scale-105 hover:shadow-3xl relative z-10"
							>
								<img
									src={thumbnail.imgSrc}
									alt={thumbnail.altText || "Message Thumbnail"}
									className="w-full h-40 object-cover rounded-t-xl"
								/>
								<div className="p-2">
									<p className="md:text-h4 text-sm">{thumbnail.title}</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Page;
