import { createClient } from "../../../../utils/supabase/client";
import { notFound } from "next/navigation";
import Head from "next/head";

// Fetch video data for the given ID
const fetchVideoData = async (id: string) => {
	const supabase = createClient();

	console.log("Fetching video data for ID:", id);

	const { data, error } = await supabase
		.from("john")
		.select("*")
		.eq("id", id)
		.single();

	if (error || !data) {
		console.error("Error fetching video:", error);
		return null;
	}

	return data;
};

// Component rendering the video
const VideoPage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;

	// Fetch video data based on ID
	const videoData = await fetchVideoData(id);

	// If video not found, trigger 404
	if (!videoData) {
		notFound();
	}

	return (
		<div className="h-screen lg:h-full mt-28 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto p-6 md:p-0">
			<Head>
				<title>{videoData.title}</title>
				<meta name="description" content={videoData.description} />
			</Head>
			<h1 className="text-h3 md:text-h2 lg:text-h1 text-navy font-bold text-start mb-2">
				<span className="text-grei-light">{videoData.date}</span>{" "}
				{videoData.title}
			</h1>
			<div>
				<iframe
					width="100%"
					src={videoData.videoUrl} // Ensure this is valid
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className="w-full h-[250px] md:h-[370px] lg:h-[450px] xl:h-[600px]"
				></iframe>
			</div>
			<div>
				<p className="text-[16px] text-navy md:text-h4 font-medium mt-6 lg:pb-10 ">
					{videoData.description}
				</p>
			</div>
		</div>
	);
};

export default VideoPage;
