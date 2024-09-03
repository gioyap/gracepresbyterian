// components/Header.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCross } from "react-icons/fa";

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);

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
			className={`header ${scrolled ? "scrolled" : "transparent"} flex items-center justify-between h-16 p-3 px-5 text-white`}
		>
			{/* Logo */}
			<div className="flex-shrink-0">
				<Link href="/">
					<FaCross className="h-8 cursor-pointer " />
				</Link>
			</div>

			{/* Navigation Links */}
			<ul className="flex space-x-6 relative">
				<li
					className="relative"
					onMouseEnter={() => setDropdownOpen(true)}
					onMouseLeave={() => setDropdownOpen(false)}
				>
					<Link href="/about" className="hover:underline">
						About
					</Link>
					{dropdownOpen && (
						<div className="absolute w-48 bg-white text-black shadow-lg rounded-lg">
							<ul className="flex flex-col">
								<li>
									<Link
										href="/about"
										className="block px-4 py-2 hover:bg-yellow"
									>
										Who We Are
									</Link>
								</li>
								<li>
									<Link
										href="/about/statement"
										className="block px-4 py-2 hover:bg-yellow"
									>
										Statement of Faith
									</Link>
								</li>
								<li>
									<Link
										href="/location"
										className="block px-4 py-2 hover:bg-yellow"
									>
										Locations
									</Link>
								</li>
								<li>
									<Link
										href="/team"
										className="block px-4 py-2 hover:bg-yellow"
									>
										Meet The Team
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="block px-4 py-2 hover:bg-yellow"
									>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
					)}
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
					<Link href="/youth" className="hover:underline">
						Youth
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
