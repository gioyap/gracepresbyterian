import React from "react";

const Page = () => {
	return (
		<div>
			<section
				className="relative w-screen h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-between"
				style={{
					backgroundImage: "url('/images/give.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-30"></div>

				<div className="relative z-10 text-white text-center md:text-left p-6 md:p-12">
					<h1 className="text-h1 md:text-title font-bold mb-4">Give</h1>
					<p className="text-lg md:text-h4">
						Support our mission by donating to our cause.
					</p>
				</div>

				<div className="relative z-10 w-full md:w-1/2 p-4 flex justify-center">
					<div className="relative w-full max-w-[500px] md:max-w-[800px] h-0 md:h-auto pt-[56.25%] md:pt-[75%]">
						<iframe
							src="https://donorbox.org/embed/give-181?default_interval=o"
							name="donorbox"
							allow="payment"
							frameBorder="0"
							scrolling="no"
							className="absolute top-0 left-0 w-full h-full"
						></iframe>
					</div>
				</div>

				{/* Bible Verse Section */}
				<div className="relative z-10 w-full text-center text-white p-6 md:absolute md:bottom-0">
					<p className="md:text-h4 font-semibold">
						“Honor the Lord with your wealth and with the first and best part of
						all your income. Then your barns will be full, and your vats will
						overflow with fresh wine.”
					</p>
					<p className="md:text-h4 font-semibold">– PROVERBS 3:9-10</p>
				</div>
			</section>
		</div>
	);
};

export default Page;
