import Link from "next/link";
import { Header } from "@/components/header";
export default function Index() {
	return (
		<main className="flex-1 flex flex-col gap-12 px-0">
			{/* Hero Section */}
			<section
				className="relative w-screen h-screen overflow-hidden"
				style={{
					backgroundImage: "url('/images/family.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-30"></div>
				{/* Header */}
				<nav className="absolute top-0 w-full flex justify-between items-center p-3 px-5 h-16 z-20">
					<div className="w-full max-w-5xl">
						<Header />
					</div>
				</nav>
				{/* Hero Content */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-5">
					<h1 className="text-4xl font-bold mb-4 text-white">
						Welcome to Grace Presbyterian Church
					</h1>
					<p className="text-lg mb-6 text-white">
						A place where faith, community, and worship come together.
					</p>
					<div className="flex gap-4">
						<Link
							href="#about"
							className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700"
						>
							Who we are
						</Link>
						<Link
							href="#location"
							className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700"
						>
							Where we are
						</Link>
					</div>
				</div>
			</section>

			{/* Mission Statement */}
			<section className="text-center px-0">
				<h2 className="text-3xl font-bold mb-4">Our Mission</h2>
				<p className="text-lg mb-6">
					At Grace Presbyterian Church, our mission is to nurture a community of
					faith, provide support and growth opportunities for our members, and
					make a positive difference in the world through our outreach programs
					and services.
				</p>
				<Link
					href="give"
					className="bg-blue-600 text-foreground py-2 px-4 rounded-lg font-semibold hover:bg-blue-700"
				>
					Give
				</Link>
			</section>

			{/* Announcement */}
			<section
				id="events"
				className="bg-background p-6 shadow-md rounded-lg px-0"
			>
				<h2 className="text-3xl font-bold text-center mb-4">
					News Announcement
				</h2>
				<ul className="space-y-4">
					<li>
						<h3 className="text-xl font-semibold">Sunday Service</h3>
						<p className="text-sm">Every Sunday at 10:30 AM - 12:00 nn</p>
					</li>
					<li>
						<h3 className="text-xl font-semibold">Bible Study Group</h3>
						<p className="text-sm">Every Wednesday at 4:00 PM - 5:30 PM</p>
					</li>
					<li>
						<h3 className="text-xl font-semibold">Prayer Meeting</h3>
						<p className="text-sm">1st Friday of the month at 9:00 PM</p>
					</li>
				</ul>
			</section>

			{/* Services */}
			<section
				id="services"
				className="bg-background p-6 shadow-md rounded-lg px-0"
			>
				<h2 className="text-3xl font-bold text-center mb-4">Service</h2>
				<ul className="space-y-4">
					<li>
						<h3 className="text-xl font-semibold">Sunday Service</h3>
						<p className="text-sm">Every Sunday at 10:30 AM - 12:00 nn</p>
					</li>
					<li>
						<h3 className="text-xl font-semibold">Bible Study Group</h3>
						<p className="text-sm">Every Wednesday at 4:00 PM - 5:30 PM</p>
					</li>
					<li>
						<h3 className="text-xl font-semibold">Prayer Meeting</h3>
						<p className="text-sm">1st Friday of the month at 9:00 PM</p>
					</li>
				</ul>
			</section>
		</main>
	);
}
