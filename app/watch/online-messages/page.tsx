import React from "react";

const Page = () => {
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
				<div className="max-w-screen-lg mx-auto text-center text-navy">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

						<a
							href="/watch/matthew-12-8-21"
							className="bg-white rounded-xl shadow-lg overflow-hidden block"
						>
							<img
								src="/images/family.jpg"
								alt="Message Thumbnail"
								className="w-full h-40 object-cover"
							/>
							<div className="p-4">
								<p className="md:text-h4">Matthew 12: 8-21</p>
							</div>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Page;
