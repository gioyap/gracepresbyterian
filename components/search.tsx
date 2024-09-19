import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
	scrolled: boolean;
	isSearchVisible: boolean;
	setIsSearchVisible: (visible: boolean) => void;
}

export const Search: React.FC<SearchProps> = ({
	scrolled,
	isSearchVisible,
	setIsSearchVisible,
}) => {
	const [searchQuery, setSearchQuery] = useState("");
	const searchRef = useRef<HTMLDivElement>(null);

	const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleSearchSubmit = () => {
		if (searchQuery.trim()) {
			const query = encodeURIComponent(searchQuery.trim());
			window.location.href = `/search/page?s=${query}`; // Ensure the path matches your route
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchRef.current &&
				!searchRef.current.contains(event.target as Node)
			) {
				setIsSearchVisible(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative flex-1" ref={searchRef}>
			{isSearchVisible ? (
				<>
					<input
						type="text"
						placeholder="Search..."
						value={searchQuery}
						onChange={handleSearchInput}
						onKeyPress={(e) => e.key === "Enter" && handleSearchSubmit()}
						className={`p-2 rounded bg-white text-black dark:bg-black dark:text-white border ${
							scrolled ? "border-black" : "border-white"
						} w-full max-w-full`}
					/>
					<button
						onClick={handleSearchSubmit}
						className="absolute right-3 top-3 text-black"
					>
						<FaSearch />
					</button>
				</>
			) : (
				<button
					onClick={() => setIsSearchVisible(true)}
					className="text-foreground"
				>
					<FaSearch />
				</button>
			)}
		</div>
	);
};
