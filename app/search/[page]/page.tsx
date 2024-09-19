import { notFound } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

interface SearchResult {
	title: string;
	summary: string;
	url: string;
}

interface SearchPageProps {
	params: {
		page: string;
	};
	searchParams: {
		s?: string;
	};
}

export default async function SearchPage({
	params,
	searchParams,
}: SearchPageProps) {
	// Ensure the page number is correctly parsed and has a valid fallback
	const page = !isNaN(parseInt(params.page, 10))
		? parseInt(params.page, 10)
		: 1;
	const searchQuery = searchParams.s || "";
	const perPage = 10;

	// Use an absolute URL for fetching data
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

	// Fetch search results based on the search query and page
	const response = await fetch(
		`${baseUrl}/api/search?s=${encodeURIComponent(searchQuery)}&page=${page}`
	);

	if (!response.ok) {
		notFound(); // Handle 404
	}

	const data = await response.json();
	const { results, total } = data;
	const totalPages = Math.ceil(total / perPage);

	// If no results found, display a message
	if (!results || results.length === 0) {
		return (
			<div className=" md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 3xl:max-w-screen-2xl mx-auto min-h-[calc(115vh-200px)] pt-36 text-navy">
				<h1 className="text-2xl mb-4">Search Results for "{searchQuery}"</h1>
				<p>No results found</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col justify-between md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 3xl:max-w-screen-2xl mx-auto 2xl:min-h-[calc(115vh-200px)] 2xl:pt-36 text-navy dark:text-white pt-24 px-6 min-h-[calc(132vh-200px)]">
			<Head>
				<title>Search Results for "{searchQuery}"</title>
				<meta
					name="description"
					content={`Search results for "${searchQuery}"`}
				/>
				<link
					rel="canonical"
					href={`${baseUrl}/search?s=${encodeURIComponent(searchQuery)}`}
				/>
			</Head>
			<h1 className="text-h3 md:text-h2 mb-4">
				Search Results for "{searchQuery}"
			</h1>
			<div className="list-disc pl-5 flex-grow">
				{results.map((result: SearchResult, index: number) => (
					<div
						key={index}
						className="mb-6 py-6 border-b border-navy-light dark:border-gray-600"
					>
						<Link href={result.url} className="text-h4 font-bold">
							{result.title}
						</Link>
						<p className=" text-sm md:text-md lg:text-lg">{result.summary}</p>
						<Link href={result.url} className="text-blue-500 hover:underline">
							Read More
						</Link>
					</div>
				))}
			</div>

			{/* Pagination */}
			<div className="flex gap-4 justify-center items-center my-10">
				{/* First page button */}
				<Link
					href={`/search/1?s=${searchQuery}`}
					className={`px-3 py-1 bg-yellow text-navy hover:bg-navy-light dark:hover:bg-navy-light dark:text-white rounded-full ${
						page === 1 ? "opacity-50 cursor-not-allowed" : ""
					}`}
					aria-disabled={page === 1}
				>
					{"<<"}
				</Link>

				{/* Previous button */}
				<Link
					href={`/search/${page - 1}?s=${searchQuery}`}
					className={`px-3 py-1 bg-yellow text-navy hover:bg-navy-light dark:hover:bg-navy-light dark:text-white rounded-full ${
						page === 1 ? "opacity-50 cursor-not-allowed" : ""
					}`}
					aria-disabled={page === 1}
				>
					{"<"}
				</Link>

				<span>
					Page {page} of {totalPages}
				</span>

				{/* Next button */}
				<Link
					href={`/search/${page + 1}?s=${searchQuery}`}
					className={`px-3 py-1 bg-yellow text-navy hover:bg-navy-light dark:hover:bg-navy-light dark:text-white rounded-full ${
						page === totalPages ? "opacity-50 cursor-not-allowed" : ""
					}`}
					aria-disabled={page === totalPages}
				>
					{">"}
				</Link>

				{/* Last page button */}
				<Link
					href={`/search/${totalPages}?s=${searchQuery}`}
					className={`px-3 py-1 bg-yellow text-navy hover:bg-navy-light dark:hover:bg-navy-light dark:text-white rounded-full ${
						page === totalPages ? "opacity-50 cursor-not-allowed" : ""
					}`}
					aria-disabled={page === totalPages}
				>
					{">>"}
				</Link>
			</div>
		</div>
	);
}
