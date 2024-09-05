"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Page = () => {
	return (
		<div>
			{/* Hero Section */}
			<section
				className="relative w-screen h-[700px] overflow-hidden flex items-center justify-end"
				style={{
					backgroundImage: "url('/images/contact.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="text-white text-title font-bold whitespace-nowrap mr-20">
					<h1>Contact Us</h1>
				</div>
			</section>

			{/* Contact Info Section */}
			<section className="p-6">
				<div className="max-w-screen-sm mx-auto text-navy">
					<h1 className="text-center text-h1 font-bold mb-5">
						We'd love to hear from you!
					</h1>
					<p className="text-h4">
						Do you have any feedback, inquiries, or comments about last Sunday’s
						service, our ministries, discipleship groups, or other matters
						related to Presbyterian? Help us improve and grow in service of the
						Lord by sending us a message. We’ll make sure to get back to you as
						soon as possible.
					</p>

					{/* Address Section */}
					<div className="my-10">
						<h2 className="text-h2 font-bold">Our Address</h2>
						<p className="text-h4 mt-2">
							WQ4Q+8JG, Pulilan Regional Rd, Calumpit, 3003 Bulacan
						</p>
					</div>

					{/* Contact Section */}
					<div>
						<h2 className="text-h2 font-bold mb-4">Email or Call Us</h2>
						<div className="flex justify-start items-center gap-6 mb-2">
							{/* Email */}
							<div className="flex items-center gap-2 text-h4">
								<MdEmail className="text-2xl" />
								<span>yapgioedrian@gmail.com</span>
							</div>

							{/* Phone */}
							<div className="flex items-center gap-2 text-h4">
								<FaPhoneVolume className="text-2xl" />
								<span>+63 9123456789</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Page;
