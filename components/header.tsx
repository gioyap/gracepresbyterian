"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCross, FaBars } from "react-icons/fa";

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

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
			className={`${
				scrolled ? "bg-white text-black" : "bg-black bg-opacity-80 text-white"
			} fixed w-full top-0 left-0 z-20 flex items-center justify-between h-16 p-3 px-5 transition-colors duration-300`}
		>
			{/* Logo */}
			<div className="flex-shrink-0">
				<Link href="/">
					<FaCross
						className={`h-8 cursor-pointer ${
							scrolled ? "text-black" : "text-white"
						}`}
					/>
				</Link>
			</div>

			{/* Hamburger button for mobile view */}
			<div className="md:hidden">
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className={`${scrolled ? "text-black" : "text-white"}`}
				>
					<FaBars className="h-6 w-6" />
				</button>
			</div>

			{/* Navigation Links */}
			<ul
				className={`${
					menuOpen ? "block" : "hidden"
				} md:flex absolute md:relative gap-y-10 gap-x-6 ${
					// Mobile view styles
					menuOpen && !scrolled
						? "bg-black bg-opacity-80 text-white"
						: menuOpen && scrolled
							? "bg-white text-black"
							: ""
				} top-16 md:top-auto left-0 w-full md:w-auto z-10 pt-5 md:p-0 flex flex-col md:flex-row items-center md:justify-between h-screen md:h-auto transition-colors duration-300`}
			>
				<li
					className="relative"
					onMouseEnter={() => setDropdownOpen(true)}
					onMouseLeave={() => setDropdownOpen(false)}
				>
					<Link href="/about" className="hover:underline">
						About
					</Link>
					{dropdownOpen && (
						<div className="absolute w-40 text-xs md:text-[16px] md:w-48 bg-white text-black shadow-lg rounded-lg">
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
										href="/about/location"
										className="block px-4 py-2 hover:bg-yellow"
									>
										Locations
									</Link>
								</li>
								<li>
									<Link
										href="/about/team"
										className="block px-4 py-2 hover:bg-yellow"
									>
										Meet The Team
									</Link>
								</li>
								<li>
									<Link
										href="/about/contact"
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
