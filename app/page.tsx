"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Index() {
	const [whoLoad, setWhoLoading] = useState(false);
	const [whereLoad, setWhereLoading] = useState(false);
	const router = useRouter();

	const handleWho = () => {
		setWhoLoading(true);
		setTimeout(() => {
			router.push("/about");
		}, 1000);
	};
	const handleWhere = () => {
		setWhereLoading(true);
		setTimeout(() => {
			router.push("/location");
		}, 1000);
	};

	return (
		<main className="flex-1 flex flex-col gap-12">
			{/* Hero Section */}
			<section
				className="relative w-screen h-screen overflow-hidden"
				style={{
					backgroundImage: "url('/images/temple.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-30"></div>
				{/* Hero Content */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-5">
					<h1 className="text-h2 lg:text-h1 3xl:text-title font-bold mb-2 lg:mb-4 text-navy">
						Welcome to Grace Presbyterian Church
					</h1>
					<p className=" text-h4 md:text-md lg:text-h4 3xl:text-h1 mb-4 lg:mb-6 text-navy ">
						A place where faith, community, and worship come together.
					</p>
					<div className="flex gap-4 text-sm md:text-sm lg:text-h4">
						<button
							onClick={handleWho}
							className="bg-yellow dark:bg-yellow text-navy py-2 px-4 rounded-xl font-semibold hover:bg-navy-light dark:hover:bg-navy-light"
							disabled={whoLoad}
						>
							{whoLoad ? "Loading..." : "Who we are"}
						</button>
						<button
							onClick={handleWhere}
							className="bg-yellow dark:bg-yellow text-navy py-2 px-4 rounded-xl font-semibold hover:bg-navy-light dark:hover:bg-navy-light"
							disabled={whereLoad}
						>
							{whereLoad ? "Loading..." : "Where we are"}
						</button>
					</div>
				</div>
			</section>

			{/* Mission Statement */}
			<section className="text-center md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 3xl:max-w-screen-2xl mx-auto">
				<h2 className="text-h2 lg:text-h1 3xl:text-title font-bold mb-4 lg:mb-6 text-navy dark:text-white">
					Our Mission
				</h2>
				<p className="text-lg lg:text-h4 3xl:text-h1 mb-6 text-navy dark:text-white px-6 md:px-0">
					At Grace Presbyterian Church, our mission is to nurture a community of
					faith, provide support and growth opportunities for our members, and
					make a positive difference in the world through our outreach programs
					and services.
				</p>
				<Link
					href="give"
					className="bg-yellow text-navy py-2 px-8 3xl:px-12 3xl:text-h1 xl:text-h3 rounded-xl font-semibold hover:bg-navy-light"
				>
					Give
				</Link>
			</section>

			{/* New Section - Looking for Answers */}
			<section className="bg-yellow dark:bg-background text-navy dark:text-white px-6 ">
				<div className=" py-10 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 3xl:max-w-screen-2xl mx-auto">
					<h2 className="text-2xl lg:text-h2 3xl:text-h1 font-semibold text-center mb-8 3xl:leading-relaxed">
						LOOKING FOR ANSWERS? THINK YOUR VISITING THIS SITE IS A COINCIDENCE?
						YOUR BEING HERE TODAY IS NO ACCIDENT!
						<br /> <strong>God brought you here for His purpose.</strong>
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
						{/* Left Column - 1, 2, 3 */}
						<div>
							<h3 className="text-h3 font-semibold mb-2 lg:mb-4 3xl:text-h1">
								1. GOD LOVES YOU.
							</h3>
							<p className="mb-4 lg:mb-6 lg:text-h4 3xl:text-h2">
								He desires for you to have a meaningful life with Him in the
								present and gain eternal life with Him in the future.
							</p>
							<blockquote className="italic mb-4 lg:mb-6 font-medium lg:text-h4 3xl:text-h2">
								Know therefore that the Lord your God, He is God, the faithful
								God, who keeps His covenant and His lovingkindness to a
								thousandth generation with those who love Him and keep His
								commandments – Deuteronomy 7:9
							</blockquote>

							<h3 className="text-h3 font-semibold mb-2 lg:mb-4 3xl:text-h1">
								2. God is holy.
							</h3>
							<p className="mb-4 lg:mb-6 lg:text-h4 3xl:text-h2">
								We are sinful, and our sin separates us from Him.
							</p>
							<blockquote className="italic mb-4 lg:mb-6 font-medium lg:text-h4 3xl:text-h2">
								Everyone has sinned and is far away from God’s saving presence.
								– Romans 3:23
							</blockquote>

							<h3 className="text-h3 font-semibold mb-2 lg:mb-4 3xl:text-h1">
								3. GOD IS MERCIFUL.
							</h3>
							<p className="mb-4 lg:mb-6 lg:text-h4 3xl:text-h2">
								In His love, He made the only way for us to be reconciled to
								Him: through His son, Jesus Christ. Jesus had to die on the
								cross for our sins and be raised to life for eternity.
							</p>
							<blockquote className="italic mb-4 lg:mb-6 font-medium lg:text-h4 3xl:text-h2">
								But God demonstrates His own love toward us, in that while we
								were yet sinners, Christ died for us. Much more then, having now
								been justified by His blood, we shall be saved from the wrath of
								God through Him. – Romans 5:8
							</blockquote>
						</div>

						{/* Right Column - 4 and 5 */}
						<div>
							<h3 className="text-h3 font-semibold mb-2 lg:mb-4 3xl:text-h1">
								4. GOD IS GRACIOUS.
							</h3>
							<p className="mb-4 lg:mb-6 lg:text-h4 3xl:text-h2">
								By placing our faith in Jesus Christ, we are forgiven of our
								sins and saved from eternal death.
							</p>
							<blockquote className="italic mb-4 lg:mb-6 font-medium lg:text-h4 3xl:text-h2">
								For God so loved the world, that He gave His only begotten Son,
								that whoever believes in Him shall not perish, but have eternal
								life. – John 3:16
							</blockquote>
							<blockquote className="italic mb-4 lg:mb-6 font-medium lg:text-h4 3xl:text-h2">
								For by grace you have been saved through faith; and that not of
								yourselves, it is the gift of God; not as a result of works, so
								that no one may boast. – Ephesians 2:8-9
							</blockquote>

							<h3 className="text-h3 font-semibold mb-2 lg:mb-4 3xl:text-h1">
								5. GOD KEEPS HIS PROMISES.
							</h3>
							<p className="mt-4 lg:text-h4 3xl:text-h2">
								You can be sure that you have eternal life when you trust in
								Jesus.
							</p>
							<blockquote className="italic mt-4 font-medium lg:text-h4 3xl:text-h2">
								And the testimony is this, that God has given us eternal life,
								and this life is in His Son. He who has the Son has the life; he
								who does not have the Son of God does not have the life. These
								things I have written to you who believe in the name of the Son
								of God, so that you may know that you have eternal life. – 1
								John 5:11-13
							</blockquote>
						</div>
					</div>
				</div>
			</section>

			{/* Announcement */}
			<section
				id="events"
				className="bg-background p-6 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 3xl:max-w-screen-2xl mx-auto"
			>
				<h2 className="text-2xl lg:text-h2 3xl:text-title font-bold text-center mb-2 lg:mb-4 text-navy dark:text-white">
					News Announcement
				</h2>
				<p className="text-lg lg:text-h4 3xl:text-h2 text-center text-navy dark:text-white">
					Please stay tuned for updates on our latest announcements. We are
					excited to keep you informed about upcoming events and news.
				</p>
			</section>

			{/* Services */}
			<section
				id="services"
				className="bg-background py-10 bg-yellow dark:bg-background flex items-center justify-center"
			>
				<div className="max-w-screen-lg mx-auto">
					<h2 className="text-2xl lg:text-h2 3xl:text-title font-bold text-center mb-2 lg:mb-4 text-navy dark:text-white">
						Service
					</h2>
					<ul className="space-y-4">
						<li>
							<h3 className="text-xl lg:text-h3 3xl:text-h1 font-semibold text-navy dark:text-white 3xl:mb-4">
								Sunday Service
							</h3>
							<p className="text-sm lg:text-h4 3xl:text-h2 text-navy dark:text-white">
								Every Sunday at 10:30 AM - 12:00 nn
							</p>
						</li>
						<li>
							<h3 className="text-xl lg:text-h3 3xl:text-h1 font-semibold text-navy dark:text-white 3xl:mb-4">
								Bible Study Group
							</h3>
							<p className="text-sm lg:text-h3 3xl:text-h2 text-navy dark:text-white">
								Every Wednesday at 4:00 PM - 5:30 PM
							</p>
						</li>
						<li>
							<h3 className="text-xl lg:text-h3 3xl:text-h1 font-semibold text-navy dark:text-white 3xl:mb-4">
								Prayer Meeting
							</h3>
							<p className="text-sm lg:text-h4 3xl:text-h2 text-navy dark:text-white">
								1st Friday of the month at 9:00 PM
							</p>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
