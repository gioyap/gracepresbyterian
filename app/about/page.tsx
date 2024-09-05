"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function About() {
	const [isMissionVisible, setIsMissionVisible] = useState(false);
	const [isVisionVisible, setIsVisionVisible] = useState(false);
	const [isValuesVisible, setIsValuesVisible] = useState(false);

	// Toggle visibility functions
	const toggleMission = () => setIsMissionVisible(!isMissionVisible);
	const toggleVision = () => setIsVisionVisible(!isVisionVisible);
	const toggleValues = () => setIsValuesVisible(!isValuesVisible);

	return (
		<div className="flex-1 w-full flex flex-col gap-12">
			<section
				className="relative w-screen h-screen overflow-hidden"
				style={{
					backgroundImage: "url('/images/member.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-30"></div>
				{/* Hero Content */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-5">
					<h1 className="font-bold text-white text-h1 md:text-title">
						Who we are
					</h1>
				</div>
			</section>

			{/* Our Mission */}
			<section className="flex items-center justify-center bg-background border-b-2 border-yellow">
				<div className="max-w-screen-lg mx-auto text-center">
					<div className=" text-navy dark:text-white px-6 text-md md:text-h3">
						<p>
							We are a movement of men and women who have encountered God and
							committed our lives to the Lord, focused on making an impact
							through the work of the Holy Spirit in transforming lives,
							families, communities and nations, for the glory of God!
						</p>
					</div>
					<h1
						onClick={toggleMission}
						className="text-h2 md:text-h1 mt-10 mb-4 font-bold cursor-pointer text-navy dark:text-white"
					>
						Our Mission
					</h1>
					<div
						className={`transition-all duration-500 ease-out overflow-hidden pb-10 ${
							isMissionVisible
								? "max-h-[500px] opacity-100"
								: "max-h-0 opacity-0"
						}`}
					>
						<p className="mb-4 px-6 text-md md:text-h3 text-navy dark:text-white">
							To honor God and make Christ-committed followers who will make
							Christ-committed followers.
						</p>
						<p className="mb-4 font-medium px-6 text-md md:text-h3 text-navy dark:text-white">
							“Go and make disciples of all nations, baptizing them in the name
							of the Father and of the Son and of the Holy Spirit, and teaching
							them to obey everything I have commanded you.”
						</p>
						<p className="italic font-bold px-6 text-md md:text-h3 text-navy dark:text-white">
							Matthew 28:19-20
						</p>
					</div>
				</div>
			</section>

			{/* Our Vision */}
			<section className="flex items-center justify-center bg-background border-b-2 border-yellow">
				<div className="max-w-screen-lg mx-auto text-center pb-10">
					<h1
						onClick={toggleVision}
						className="text-h2 md:text-h1 mb-4 font-bold cursor-pointer text-navy dark:text-white"
					>
						Our Vision
					</h1>
					<div
						className={`transition-all duration-500 ease-out overflow-hidden ${
							isVisionVisible
								? "max-h-[500px] opacity-100"
								: "max-h-0 opacity-0"
						}`}
					>
						<p className="mb-4 font-medium px-6 text-md md:text-h3 text-navy dark:text-white">
							Our vision is to see a movement of millions of committed followers
							of the Lord Jesus Christ meeting in small groups and transforming
							lives, families, communities, and nations, for the glory of God.
						</p>
					</div>
				</div>
			</section>

			{/* Our Core Values */}
			<section className="bg-background border-b-2 border-yellow">
				<div className="max-w-screen-md mx-auto px-4 text-navy dark:text-white mb-6">
					<h1
						onClick={toggleValues}
						className="text-h2 md:text-h1 font-bold cursor-pointer text-navy dark:text-white mb-6 text-center"
					>
						Our Core Values
					</h1>
					<div
						className={`transition-all duration-500 ease-out overflow-hidden ${
							isValuesVisible
								? "max-h-[1000px] opacity-100"
								: "max-h-0 opacity-0"
						}`}
					>
						<div className="space-y-6 px-6 pb-10">
							<div>
								<h2 className=" text-md md:text-h3 font-semibold mb-2">
									Love God, Love Others
								</h2>
								<ul className="list-disc list-inside ml-4 text-sm md:text-h4">
									<li>
										Consistent personal devotions, prayer time, and study of
										God’s word
									</li>
									<li>Love displayed even for difficult people</li>
									<li>No critical spirit or participation in gossip</li>
									<li>
										Private life is in order (free from immorality and
										addictions)
									</li>
									<li>
										Consistent sharing of the gospel and discipleship of others
									</li>
								</ul>
							</div>

							<div>
								<h2 className="text-md md:text-h3 font-semibold mb-2">
									Obey God’s Word and Authorities
								</h2>
								<ul className="list-disc list-inside ml-4 text-sm md:text-h4">
									<li>Application of God’s word in everyday life</li>
									<li>Decisions made based on Scripture</li>
									<li>Submission to authorities with respect</li>
									<li>
										Display of consistent humility; willing acceptance of
										correction
									</li>
								</ul>
							</div>

							<div>
								<h2 className="text-md md:text-h3 font-semibold mb-2">
									Volunteer
								</h2>
								<ul className="list-disc list-inside ml-4 text-sm md:text-h4">
									<li>Use of gifts and talents to serve others</li>
									<li>Encouraging others to serve</li>
									<li>Consistent leadership and attendance in a small group</li>
									<li>Serving others even when inconvenient</li>
									<li>Consistent giving of tithes / offerings</li>
								</ul>
							</div>

							<div>
								<h2 className="text-md md:text-h3 font-semibold mb-2">
									Engage the Family
								</h2>
								<ul className="list-disc list-inside ml-4 text-sm md:text-h4">
									<li>Quality time spent with family members</li>
									<li>Temper kept under control</li>
									<li>Set a Christ-like example for family members</li>
									<li>Family members walk with and serve the Lord</li>
									<li>
										Intentional discipleship through regular family devotions
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="flex items-center justify-center">
				<div className="max-w-screen-lg mx-auto pb-10">
					<Link
						href="/about/statement"
						className="font-bold text-h2 md:text-h1 text-navy dark:text-white"
					>
						Statement of Faith
					</Link>
				</div>
			</section>
		</div>
	);
}
