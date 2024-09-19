import React from "react";

const Page = () => {
	return (
		<div className=" bg-grei-light dark:bg-foreground">
			<section
				className="relative w-screen h-screen overflow-hidden items-center justify-center grid "
				style={{
					backgroundImage: "url('/images/give.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* Background overlay */}
				<div className="absolute inset-0 bg-black opacity-50"></div>

				{/* Text section */}
				<div className="relative z-10 text-white text-center p-6 md:mt-16 lg:mt-0 ">
					<h1 className="text-h1 lg:text-title font-bold mb-4">Give</h1>
					<p className="text-lg lg:text-h3">
						Support our mission by donating to our cause.
					</p>
				</div>

				{/* Donation iframe */}
				<div className="hidden md:block relative z-99 w-full mt-10 lg:hidden">
					<iframe
						src="https://donorbox.org/embed/give-181?default_interval=o"
						name="donorbox"
						allow="payment"
						frameBorder="0"
						scrolling="no"
						className="w-full h-screen"
					></iframe>
				</div>

				{/* Bible Verse Section */}
				<div className="relative z-10 w-full text-center text-white p-6 md:absolute md:bottom-0 xl:max-w-screen-lg xl:relative">
					<p className="lg:text-h4 font-semibold">
						“Honor the Lord with your wealth and with the first and best part of
						all your income. Then your barns will be full, and your vats will
						overflow with fresh wine.”
					</p>
					<p className="md:text-2xl font-semibold">– PROVERBS 3:9-10</p>
				</div>
			</section>
			<section className="md:hidden lg:flex lg:justify-between lg:items-start xl:max-w-screen-lg xl:mx-auto text-navy dark:text-white">
				{/* Text section */}
				<div className="p-6 font-medium text-lg lg:text-h3 lg:w-1/2 lg:text-left lg:pt-20 lg:pl-20 xl:pt-36 xl:pl-0">
					<p>
						This year, 2024, we are excited to host events aimed at spreading
						the Gospel, including a youth camp and sports fest. These gatherings
						are not only designed to foster fellowship among our members but
						also to reach out to youth outside the church, inviting them to join
						our spiritual family. Your generous support will help us make these
						ministries a success and touch the lives of many.
					</p>
				</div>

				{/* Donation iframe */}
				<div className="w-full lg:w-1/2 px-6 lg:p-6 xl:pt-10">
					<iframe
						src="https://donorbox.org/embed/give-181?default_interval=o"
						name="donorbox"
						allow="payment"
						frameBorder="0"
						scrolling="no"
						className="w-full h-[38rem] lg:h-screen xl:h-[40rem]"
					></iframe>
				</div>
			</section>
		</div>
	);
};

export default Page;
