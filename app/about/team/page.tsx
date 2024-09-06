"use client";
import React from "react";

const Page = () => {
	return (
		<div className=" md:h-screen lg:h-full">
			<section
				className="relative w-screen h-[500px] overflow-hidden flex items-center justify-center"
				style={{
					backgroundImage: "url('/images/leader.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="text-white text-h2 md:text-h1 2xl:text-title font-bold text-center">
					<h1>Meet and Pray for the Leaders</h1>
				</div>
			</section>

			<section className="p-6">
				<div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto text-center">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* Elders Column */}
						<div className="bg-gray-100 p-4 rounded-lg shadow-md">
							<h3 className=" text-h3 md:text-h2 lg:text-h1 text-navy font-semibold mb-2">
								Elders
							</h3>
							<div className="text-navy lg:text-h4">
								<p>John Doe</p>
								<p>Jane Smith</p>
								<p>Michael Brown</p>
								<p>Emily Davis</p>
							</div>
						</div>

						{/* Area Pastors Column */}
						<div className="bg-gray-100 p-4 rounded-lg shadow-md">
							<h3 className="text-h3 md:text-h2 lg:text-h1 text-navy font-semibold mb-2 whitespace-nowrap">
								Area Pastors
							</h3>
							<div className="text-navy lg:text-h4">
								<p>James Wilson</p>
								<p>Linda Johnson</p>
								<p>Robert Lee</p>
								<p>Patricia Martinez</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Page;
