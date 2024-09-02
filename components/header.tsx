// components/Header.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50); // Adjust based on when you want the change to occur
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`header ${scrolled ? "scrolled" : "transparent"} flex items-center justify-between h-16 p-3 px-5 text-navy`}
		>
			{/* Logo */}
			<div className="flex-shrink-0">
				<Link href="/">
					<img
						src="/images/cross.png"
						alt="Logo"
						className="h-8 cursor-pointer"
					/>
				</Link>
			</div>

			{/* Navigation Links */}
			<ul className="flex space-x-6">
				<li>
					<Link href="/about" className="hover:underline">
						About
					</Link>
				</li>
				<li>
					<Link href="/give" className="hover:underline">
						Give
					</Link>
				</li>
				<li>
					<Link href="/watch" className="hover:underline">
						Watch
					</Link>
				</li>
				<li>
					<Link href="/connect" className="hover:underline">
						Connect
					</Link>
				</li>
				<li>
					<Link href="/missions" className="hover:underline">
						Missions
					</Link>
				</li>
				<li>
					<Link href="/intercedeyouth" className="hover:underline">
						IntercedeYouth
					</Link>
				</li>
				<li>
					<Link href="/events" className="hover:underline">
						Events
					</Link>
				</li>
				<li>
					<Link href="/resources" className="hover:underline">
						Resources
					</Link>
				</li>
			</ul>
		</nav>
	);
};
