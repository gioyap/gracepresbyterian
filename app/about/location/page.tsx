"use client";
import React, { useState } from "react";

const Page = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<div>
			<section
				className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
				style={{
					backgroundImage: "url('/images/city.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-30"></div>
				<div className="text-center relative">
					{/* Title */}
					<div className="text-white text-title font-bold mb-5">Locations</div>

					{/* Dropdown */}
					<div className="relative inline-block">
						<button
							className="bg-yellow text-navy dark:text-white py-2 px-4 rounded-xl font-semibold"
							onClick={toggleDropdown}
						>
							Select a Location
						</button>

						{/* Dropdown List */}
						{isDropdownOpen && (
							<ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md text-left w-60">
								<li className="py-2 px-4 hover:bg-gray-200">Tanay, Rizal</li>
								<li className="py-2 px-4 hover:bg-gray-200">
									Calumpit, Bulacan
								</li>
								<li className="py-2 px-4 hover:bg-gray-200">
									Muntinlupa, Manila
								</li>
							</ul>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Page;
