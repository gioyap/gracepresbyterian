"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaCross, FaBars, FaChevronDown } from "react-icons/fa";

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu
	const [isMobile, setIsMobile] = useState(false); // State for mobile/tablet view
	const dropdownRef = useRef<HTMLDivElement>(null); // Reference for the dropdown menu

	useEffect(() => {
		// Track scroll behavior for background color change
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		// Track window size for mobile/tablet view
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024); // Adjust breakpoint for tablet and mobile at 1024px
		};

		// // Close the dropdown when clicking outside of it
		// const handleClickOutside = (event: MouseEvent) => {
		// 	if (
		// 		dropdownRef.current &&
		// 		!dropdownRef.current.contains(event.target as Node)
		// 	) {
		// 		setDropdownOpen(false);
		// 	}
		// };

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);
		// document.addEventListener("mousedown", handleClickOutside); // Listen for outside clicks

		// Initial check for screen size
		handleResize();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
			// document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Close the menu when a link is clicked (for both mobile and tablet views)
	const handleLinkClick = () => {
		setMenuOpen(false); // Close hamburger menu when a link is clicked
		setDropdownOpen(false); // Close dropdown when a link is clicked
	};

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen); // Toggle dropdown for both desktop and mobile view
	};

	return (
		<nav
			className={`${
				scrolled
					? "bg-white text-black dark:bg-black dark:text-white dark:bg-opacity-80"
					: "bg-black bg-opacity-80 text-white"
			} fixed w-full top-0 left-0 z-20 flex items-center justify-between h-16 p-3 px-5 transition-colors duration-300`}
		>
			{/* Logo */}
			<div className="flex-shrink-0">
				<Link href="/" onClick={handleLinkClick}>
					<FaCross
						className={`h-8 cursor-pointer ${
							scrolled ? "text-black dark:text-white" : "text-white"
						}`}
					/>
				</Link>
			</div>

			{/* Hamburger button for mobile/tablet view */}
			<div className="lg:hidden">
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className={`${scrolled ? "text-black dark:text-white" : "text-white"}`}
				>
					<FaBars className="h-6 w-6" />
				</button>
			</div>

			{/* Navigation Links */}
			<ul
				className={`${
					menuOpen ? "block" : "hidden"
				} lg:flex absolute lg:relative gap-y-2 md:gap-y-6 gap-x-6 ${
					menuOpen && !scrolled
						? "bg-black bg-opacity-80 text-white"
						: menuOpen && scrolled
							? "bg-white text-black dark:bg-black dark:text-white dark:bg-opacity-80"
							: ""
				} top-16 lg:top-auto left-0 w-full lg:w-auto z-10 py-5 lg:p-0 flex flex-col lg:flex-row pl-6 lg:pl-0 lg:justify-between h-auto transition-colors duration-300`}
			>
				<li className="relative">
					<div
						className="flex items-center cursor-pointer"
						onClick={toggleDropdown}
					>
						<span>About</span>
						<FaChevronDown
							className={`ml-2 h-4 w-4 transition-transform duration-300 lg:hidden ${
								dropdownOpen ? "rotate-180" : ""
							}`}
						/>
					</div>
					{dropdownOpen && (
						<div
							ref={dropdownRef}
							className="bg-transparent text-foreground rounded-lg mt-2 w-full lg:w-[180px] lg:absolute lg:bg-black lg:text-white lg:bg-opacity-50 lg:shadow-2xl lg:py-2 px-4"
						>
							<ul className="flex flex-col md:gap-y-2">
								<li>
									<Link
										href="/about"
										onClick={handleLinkClick}
										className="block hover:bg-yellow hover:text-navy"
									>
										Who We Are
									</Link>
								</li>
								<li>
									<Link
										href="/about/statement"
										onClick={handleLinkClick}
										className="block hover:bg-yellow hover:text-navy"
									>
										Statement of Faith
									</Link>
								</li>
								<li>
									<Link
										href="/about/location"
										onClick={handleLinkClick}
										className="block hover:bg-yellow hover:text-navy"
									>
										Locations
									</Link>
								</li>
								<li>
									<Link
										href="/about/team"
										onClick={handleLinkClick}
										className="block hover:bg-yellow hover:text-navy"
									>
										Meet The Team
									</Link>
								</li>
								<li>
									<Link
										href="/about/contact"
										onClick={handleLinkClick}
										className="block hover:bg-yellow hover:text-navy"
									>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
					)}
				</li>
				<li>
					<Link
						href="/give"
						onClick={handleLinkClick}
						className="hover:underline"
					>
						Give
					</Link>
				</li>
				<li>
					<Link
						href="/watch"
						onClick={handleLinkClick}
						className="hover:underline"
					>
						Watch
					</Link>
				</li>
				<li>
					<Link
						href="/connect"
						onClick={handleLinkClick}
						className="hover:underline"
					>
						Connect
					</Link>
				</li>
				<li>
					<Link
						href="/missions"
						onClick={handleLinkClick}
						className="hover:underline"
					>
						Missions
					</Link>
				</li>
				<li>
					<Link
						href="/youth"
						onClick={handleLinkClick}
						className="hover:underline"
					>
						Youth
					</Link>
				</li>
				<li>
					<Link
						href="/events"
						onClick={handleLinkClick}
						className="hover:underline"
					>
						Events
					</Link>
				</li>
				<li>
					<Link
						href="/resources"
						onClick={handleLinkClick}
						className="hover:underline"
					>
						Resources
					</Link>
				</li>
			</ul>
		</nav>
	);
};
