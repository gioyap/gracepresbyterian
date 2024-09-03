"use client";
import React from "react";
import { IoLogoYoutube } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";

const Page = () => {
	return (
		<div>
			{/* Hero Section */}
			<section
				className="relative w-screen h-[300px] overflow-hidden flex items-center justify-end"
				style={{
					backgroundImage: "url('/images/worship.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="absolute inset-0 bg-navy opacity-70"></div>
				<div className="text-white text-title font-bold whitespace-nowrap mr-20 absolute">
					<h1>Watch</h1>
				</div>
			</section>
			<section className="p-6 bg-black">
				<div className="max-w-screen-2xl mx-auto my-8">
					<iframe
						width="100%"
						height="900"
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpresbyterian.church.984%2Fvideos%2F1181275816273744%2F&show_text=false&width=560&t=0"
						title="Matthew 13:53-58"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full"
					></iframe>
				</div>
			</section>
			{/* Broadcast Channels Section */}
			<section className="p-6 text-center bg-gradient-to-r from-navy to-yellow">
				<div className="max-w-screen-lg mx-auto">
					<div className="text-white mb-6">
						<h1 className="text-h1 font-bold">Broadcast Channels</h1>
						<p className="md:text-h4">
							Whether it be online, we’ve got you covered! Catch us on these
							channels:
						</p>
					</div>
					<div className="flex justify-center gap-6 text-white text-h1">
						<a
							href="https://www.youtube.com/@calumpitgracepresbyterianc2049"
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
				<div className="max-w-screen-lg mx-auto text-center text-navy">
					<h1 className="text-h1 font-bold mb-4">Online Messages</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Thumbnail Item */}
						<a
							href="/watch/matthew-12-1-8"
							className="bg-white rounded-xl shadow-lg overflow-hidden block"
						>
							<img
								src="/images/worship.jpg"
								alt="Message Thumbnail"
								className="w-full h-40 object-cover"
							/>
							<div className="p-4">
								<p className="md:text-h4">Matthew 12: 46-50</p>
							</div>
						</a>

						<a
							href="/watch/matthew-12-33-37"
							className="bg-white rounded-xl shadow-lg overflow-hidden block"
						>
							<img
								src="/images/city.jpg"
								alt="Message Thumbnail"
								className="w-full h-40 object-cover"
							/>
							<div className="p-4">
								<p className="md:text-h4">Matthew 12: 33-37</p>
							</div>
						</a>
						<a
							href="/watch/matthew-12-24-30"
							className="bg-white rounded-xl shadow-lg overflow-hidden block"
						>
							<img
								src="/images/contact.jpg"
								alt="Message Thumbnail"
								className="w-full h-40 object-cover"
							/>
							<div className="p-4">
								<p className="md:text-h4">Matthew 12: 24-30</p>
							</div>
						</a>
					</div>
					<a
						href="/watch/online-messages"
						className="mt-6 inline-block text-white font-bold hover:bg-yellow hover:text-navy bg-navy p-2 rounded-xl"
					>
						See Previous Messages
					</a>
				</div>
			</section>
		</div>
	);
};

export default Page;
