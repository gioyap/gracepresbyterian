"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaCross, FaBars, FaChevronDown, FaSearch } from "react-icons/fa";
import { Search } from "./search";
import { AnimatePresence, motion, useScroll } from "framer-motion";

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isSearchVisible, setIsSearchVisible] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Track scroll behavior for background color change
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		// Track window size for mobile/tablet view
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Toggle search visibility and hide navigation items
	const toggleSearch = () => {
		setIsSearchVisible(!isSearchVisible);
		setMenuOpen(false);
		setDropdownOpen(false);
	};

	// Close the menu and dropdown when a link is clicked (for both mobile and tablet views)
	const handleLinkClick = () => {
		setMenuOpen(false);
		setDropdownOpen(false);
	};

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};
	const { scrollYProgress } = useScroll();
	return (
		<nav
			className={`${
				scrolled
					? "bg-white text-navy dark:bg-black dark:text-white dark:bg-opacity-80"
					: "bg-navy dark:bg-black bg-opacity-70 text-white"
			} fixed w-full top-0 left-0 z-20 flex items-center justify-between h-16 p-3 px-5 transition-colors duration-300`}
		>
			<motion.div
				className="fixed top-0 left-0 right-0 h-1 bg-yellow"
				style={{ scaleX: scrollYProgress }}
			/>
			{/* Logo */}
			<div className="flex-shrink-0">
				<Link href="/" onClick={handleLinkClick}>
					<FaCross
						className={`h-8 cursor-pointer ${scrolled ? "text-navy dark:text-white" : "text-white"}`}
					/>
				</Link>
			</div>

			{/* Hamburger button for mobile/tablet view */}
			<div className="lg:hidden">
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className={`${scrolled ? "text-navy dark:text-white" : "text-white"}`}
				>
					<FaBars className="h-6 w-6" />
				</button>
			</div>

			{/* Navigation Links */}
			{!isSearchVisible && (
				<ul
					className={`${
						menuOpen ? "block" : "hidden"
					} lg:flex absolute lg:relative gap-y-2 md:gap-y-6 gap-x-6 ${
						menuOpen && !scrolled
							? "bg-black bg-opacity-80 text-white"
							: menuOpen && scrolled
								? "bg-white text-navy dark:bg-black dark:text-white dark:bg-opacity-80"
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
						<AnimatePresence>
							{dropdownOpen && (
								<motion.div
									ref={dropdownRef}
									className="bg-transparent text-foreground rounded-lg mt-2 w-full lg:w-[180px] lg:absolute lg:bg-black lg:text-white lg:bg-opacity-50 lg:shadow-2xl lg:py-2 px-4"
									initial={{ opacity: 0, y: 0.9 }}
									animate={{ opacity: 1, y: 1 }}
									exit={{ opacity: 0, y: 0.9 }}
									transition={{ duration: 0.5 }}
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
								</motion.div>
							)}
						</AnimatePresence>
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
						<button
							onClick={toggleSearch}
							className={`${scrolled ? "text-black dark:text-white" : "text-white"}`}
						>
							<FaSearch className="h-6 w-6" />
						</button>
					</li>
				</ul>
			)}
			<AnimatePresence>
				{isSearchVisible && (
					<motion.div
						className="fixed lg:absolute top-0 left-0 w-full px-6 lg:px-2 h-full lg:w-[50rem] 2xl:w-[70rem] lg:left-[7rem] xl:left-[15rem] 2xl:left-[25rem] 3xl:left-[30rem] bg-black bg-opacity-80 lg:bg-transparent flex items-center justify-center z-30"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.7 }}
					>
						<Search
							scrolled={scrolled}
							isSearchVisible={isSearchVisible}
							setIsSearchVisible={setIsSearchVisible}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};
