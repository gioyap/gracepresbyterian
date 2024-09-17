"use client";
import React, { useState } from "react";

const verses = [
	"Matthew 24:35",
	"John 10:35",
	"John 16:12-13",
	"John 17:17",
	"1 Corinthians 2:13",
	"2 Timothy 3:15-17",
	"Hebrews 4:12",
];

const page = () => {
	const [visibleVerse, setVisibleVerse] = useState<string | null>(null);
	const [verseData, setVerseData] = useState<{ [key: string]: string }>({});

	// Function to fetch Bible verse from the API
	const fetchBibleVerse = async (verse: string) => {
		try {
			const response = await fetch(`https://bible-api.com/${verse}`);
			const data = await response.json();
			const text = data.verses.map((v: any) => v.text).join(" ");
			setVerseData((prev) => ({ ...prev, [verse]: text }));
		} catch (error) {
			console.error("Error fetching verse:", error);
		}
	};

	const toggleVerse = (verse: string) => {
		if (visibleVerse === verse) {
			setVisibleVerse(null); // Hide if already visible
		} else {
			fetchBibleVerse(verse); // Fetch and show the verse
			setVisibleVerse(verse);
		}
	};

	return (
		<div className="relative">
			<section className="pt-20 pb-10 bg-background px-6">
				<div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto 3xl:max-w-screen-2xl">
					<h1 className="text-h2 lg:text-h1 3xl:text-title font-bold text-navy dark:text-white mb-6 text-center">
						Grace Presbyterian Doctrinal Statement
					</h1>
					{/* Download Button */}
					<div className="mt-10 hidden xl:block absolute top-16 left-12 3xl:left-6">
						<a
							href="/statements/Statement-of-Faith.pdf"
							download
							className="p-2 bg-navy text-white rounded-lg hover:bg-yellow hover:text-black"
						>
							Download Statement of Faith (PDF)
						</a>
					</div>
					<div className="space-y-8">
						<div>
							<h2 className="text-h3 lg:text-h2 3xl:text-h1 font-semibold text-navy dark:text-white mb-6 text-center">
								I. The Holy Scriptures
							</h2>

							<div className="space-y-4">
								<div>
									<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										1. Inspiration and Authority
									</h3>
									<div className="xl:text-lg 3xl:text-h4">
										We teach that the Bible is God’s written revelation to man,
										and thus the sixty-six books of the Bible given to us by the
										Holy Spirit constitute the plenary{" "}
										<strong className="text-red-600">
											(inspired equally in all parts)
										</strong>{" "}
										Word of God{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Thessalonians 2:13")}
										>
											(1 Thessalonians 2:13)
											{visibleVerse === "1 Thessalonians 2:13" &&
												verseData["1 Thessalonians 2:13"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Thessalonians 2:13"]}
														</p>
													</div>
												)}
										</strong>{" "}
										verbally inspired in every word
										<br />
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Timothy 3:16")}
										>
											(2 Timothy 3:16)
											{visibleVerse === "2 Timothy 3:16" &&
												verseData["2 Timothy 3:16"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Timothy 3:16"]}
														</p>
													</div>
												)}
										</strong>
										, absolutely inerrant in the original documents, infallible
										and God-breathed, the only infallible rule of faith and
										practice.
										<span className="flex flex-wrap gap-2 mt-2">
											{verses.map((verse) => (
												<p key={verse} className="relative">
													<strong
														className="text-red-600 cursor-pointer"
														onClick={() => toggleVerse(verse)}
													>
														{`(${verse})`}
														{visibleVerse === verse && verseData[verse] && (
															<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10 text-navy dark:text-white">
																<p className="text-sm xl:text-[16px] 3xl:text-lg">
																	{verseData[verse]}
																</p>
															</div>
														)}
													</strong>
												</p>
											))}
										</span>
									</div>
								</div>

								<div>
									<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										2. Interpretation
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach the literal, grammatical, historical interpretation
										of Scripture, which affirms the belief that the opening
										chapters of Genesis present creation in six literal 24-hour
										days{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Genesis 1:31")}
										>
											(Genesis 1:31)
											{visibleVerse === "Genesis 1:31" &&
												verseData["Genesis 1:31"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className=" text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Genesis 1:31"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Exodus 31:17")}
										>
											(Exodus 31:17)
											{visibleVerse === "Exodus 31:17" &&
												verseData["Exodus 31:17"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className=" text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Exodus 31:17"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										3. Dual Authorship
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach God spoke in His written Word by a process of dual
										authorship. The Holy Spirit so superintended the human
										authors that, through their individual personalities and
										different styles of writing, as sunlight through stained
										glass windows, they composed and recorded God’s Word to man{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Peter 1:20-21")}
										>
											(2 Peter 1:20-21)
											{visibleVerse === "2 Peter 1:20-21" &&
												verseData["2 Peter 1:20-21"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className=" text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Peter 1:20-21"]}
														</p>
													</div>
												)}
										</strong>{" "}
										without error in the whole or in the part{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Matthew 5:18")}
										>
											(Matthew 5:18)
											{visibleVerse === "Matthew 5:18" &&
												verseData["Matthew 5:18"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className=" text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Matthew 5:18"]}
														</p>
													</div>
												)}
										</strong>{" "}
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										4. True Interpretation
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that whereas there may be several applications of
										any given passage of Scripture, there is but one true
										interpretation. The meaning of Scripture is to be found as
										one diligently applies the literal grammatical-historical
										method of interpretation under the enlightenment of the Holy
										Spirit{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 7:17")}
										>
											(John 7:17)
											{visibleVerse === "John 7:17" &&
												verseData["John 7:17"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className=" text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 7:17"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 16:12-15")}
										>
											(John 16:12-15)
											{visibleVerse === "John 16:12-15" &&
												verseData["John 16:12-15"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className=" text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 16:12-15"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Corinthians 2:7-15")}
										>
											(1 Corinthians 2:7-15)
											{visibleVerse === "1 Corinthians 2:7-15" &&
												verseData["1 Corinthians 2:7-15"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className=" text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Corinthians 2:7-15"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 John 2:20")}
										>
											(1 John 2:20)
											{visibleVerse === "1 John 2:20" &&
												verseData["1 John 2:20"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className=" text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 John 2:20"]}
														</p>
													</div>
												)}
										</strong>
										. It is the responsibility of believers as they grow in
										maturity, to ascertain carefully the true intent and meaning
										of Scripture, recognizing that such truth is binding on all
										generations. Yet the truth of Scripture stands in judgment
										of men; never do men stand in judgment of it.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-10 bg-background px-6">
				<div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto 3xl:max-w-screen-2xl">
					<h1 className="text-h3 lg:text-h2 3xl:text-h1 font-bold text-navy dark:text-white mb-6 text-center">
						II. God
					</h1>

					<div className="space-y-8">
						<div>
							<p className="xl:text-lg 3xl:text-h4">
								We teach that there is but one living and true God{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Deuteronomy 6:4")}
								>
									(Deuteronomy 6:4)
									{visibleVerse === "Deuteronomy 6:4" &&
										verseData["Deuteronomy 6:4"] && (
											<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Deuteronomy 6:4"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Isaiah 45:5-7")}
								>
									(Isaiah 45:5-7)
									{visibleVerse === "Isaiah 45:5-7" &&
										verseData["Isaiah 45:5-7"] && (
											<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Isaiah 45:5-7"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Corinthians 8:4")}
								>
									(1 Corinthians 8:4)
									{visibleVerse === "1 Corinthians 8:4" &&
										verseData["1 Corinthians 8:4"] && (
											<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Corinthians 8:4"]}
												</p>
											</div>
										)}
								</strong>
								, an infinite, all-knowing Spirit{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 4:24")}
								>
									(John 4:24)
									{visibleVerse === "John 4:24" && verseData["John 4:24"] && (
										<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["John 4:24"]}
											</p>
										</div>
									)}
								</strong>{" "}
								, perfect in all His attributes, one in essence, eternally
								existing in three Persons – Father, Son, and Holy Spirit{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Matthew 28:19")}
								>
									(Matthew 28:19)
									{visibleVerse === "Matthew 28:19" &&
										verseData["Matthew 28:19"] && (
											<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Matthew 28:19"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Corinthians 13:14")}
								>
									(2 Corinthians 13:14)
									{visibleVerse === "2 Corinthians 13:14" &&
										verseData["2 Corinthians 13:14"] && (
											<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Corinthians 13:14"]}
												</p>
											</div>
										)}
								</strong>
								, each equally deserving worship and obedience.
							</p>
						</div>

						<div>
							<h2 className="text-xl xl:text-h3 font-semibold text-navy dark:text-white mb-6 ">
								A. God the Father
							</h2>

							<div className="space-y-4">
								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										1. Sovereignty and Creation
									</h3>
									<p className=" xl:text-lg 3xl:text-h4">
										We teach that God the Father, the first person of the
										Trinity, orders and disposes all things according to His own
										purpose and grace{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Psalm 145:8-9")}
										>
											(Psalm 145:8-9)
											{visibleVerse === "Psalm 145:8-9" &&
												verseData["Psalm 145:8-9"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Psalm 145:8-9"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Corinthians 8:6")}
										>
											(1 Corinthians 8:6)
											{visibleVerse === "1 Corinthians 8:6" &&
												verseData["1 Corinthians 8:6"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Corinthians 8:6"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										2. Creator
									</h3>
									<p className=" xl:text-lg 3xl:text-h4">
										He is the creator of all things{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Genesis 1:1-31")}
										>
											(Genesis 1:1-31)
											{visibleVerse === "Genesis 1:1-31" &&
												verseData["Genesis 1:1-31"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Genesis 1:1-31"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse(" Ephesians 3:9")}
										>
											( Ephesians 3:9)
											{visibleVerse === " Ephesians 3:9" &&
												verseData[" Ephesians 3:9"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData[" Ephesians 3:9"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										3. Absolute Ruler
									</h3>
									<p className=" xl:text-lg 3xl:text-h4">
										He is the only absolute and omnipotent ruler in the
										universe; He is sovereign in creation, providence, and
										redemption <br />
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Psalm 103:19")}
										>
											(Psalm 103:19)
											{visibleVerse === "Psalm 103:19" &&
												verseData["Psalm 103:19"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className=" text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Psalm 103:19"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 11:36")}
										>
											(Romans 11:36)
											{visibleVerse === "Romans 11:36" &&
												verseData["Romans 11:36"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className=" text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 11:36"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										4. Fatherhood
									</h3>
									<p className=" xl:text-lg 3xl:text-h4">
										His fatherhood involves both His designation within the
										Trinity and His relationship with mankind as Creator. He is
										Father to all men{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Ephesians 4:6")}
										>
											(Ephesians 4:6)
											{visibleVerse === "Ephesians 4:6" &&
												verseData["Ephesians 4:6"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Ephesians 4:6"]}
														</p>
													</div>
												)}
										</strong>
										, but He is spiritual Father only to believers{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 8:14")}
										>
											(Romans 8:14)
											{visibleVerse === "Romans 8:14" &&
												verseData["Romans 8:14"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 8:14"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Corinthians 6:18")}
										>
											(2 Corinthians 6:18)
											{visibleVerse === "2 Corinthians 6:18" &&
												verseData["2 Corinthians 6:18"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Corinthians 6:18"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										5. Decree and Governance
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										He has decreed for His own glory all things that come to
										pass{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Ephesians 1:11")}
										>
											(Ephesians 1:11)
											{visibleVerse === "Ephesians 1:11" &&
												verseData["Ephesians 1:11"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Ephesians 1:11"]}
														</p>
													</div>
												)}
										</strong>
										. He continually upholds, directs, and governs all creatures
										and events{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Chronicles 29:11")}
										>
											(1 Chronicles 29:11)
											{visibleVerse === "1 Chronicles 29:11" &&
												verseData["1 Chronicles 29:11"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Chronicles 29:11"]}
														</p>
													</div>
												)}
										</strong>
										. He has graciously chosen from eternity past those whom He
										would have as His own{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Ephesians 1:4-6")}
										>
											(Ephesians 1:4-6)
											{visibleVerse === "Ephesians 1:4-6" &&
												verseData["Ephesians 1:4-6"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Ephesians 1:4-6"]}
														</p>
													</div>
												)}
										</strong>
										. He saves from sin all who come to Him through Jesus
										Christ; He adopts as His own all those who come to Him; and
										He becomes, upon adoption, Father to His own{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 1:12")}
										>
											(John 1:12)
											{visibleVerse === "John 1:12" &&
												verseData["John 1:12"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 1:12"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 8:15")}
										>
											(Romans 8:15)
											{visibleVerse === "Romans 8:15" &&
												verseData["Romans 8:15"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 8:15"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Galatians 4:5")}
										>
											(Galatians 4:5)
											{visibleVerse === "Galatians 4:5" &&
												verseData["Galatians 4:5"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Galatians 4:5"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Hebrews 12:5-9")}
										>
											(Hebrews 12:5-9)
											{visibleVerse === "Hebrews 12:5-9" &&
												verseData["Hebrews 12:5-9"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Hebrews 12:5-9"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-xl xl:text-h3 font-semibold text-navy dark:text-white mb-6">
								B. God the Son Incarnate
							</h2>

							<div className="space-y-4">
								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										1. Divine Excellencies
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										Jesus Christ, the second Person of the Trinity, possesses
										all the divine excellencies, and in these He is coequal,
										consubstantial, and coeternal with the Father{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 10:30")}
										>
											(John 10:30)
											{visibleVerse === "John 10:30" &&
												verseData["John 10:30"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 10:30"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 14:9")}
										>
											(John 14:9)
											{visibleVerse === "John 14:9" &&
												verseData["John 14:9"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 14:9"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										2. Creation through the Son
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that God the Father created all things according to
										His own will, through His Son, Jesus Christ, and in Him all
										things hold together{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 1:3")}
										>
											(John 1:3)
											{visibleVerse === "John 1:3" && verseData["John 1:3"] && (
												<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
													<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
														{verseData["John 1:3"]}
													</p>
												</div>
											)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Colossians 1:15-17")}
										>
											(Colossians 1:15-17)
											{visibleVerse === "Colossians 1:15-17" &&
												verseData["Colossians 1:15-17"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Colossians 1:15-17"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Hebrews 1:2")}
										>
											(Hebrews 1:2)
											{visibleVerse === "Hebrews 1:2" &&
												verseData["Hebrews 1:2"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Hebrews 1:2"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										3. The Incarnation
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that in the incarnation{" "}
										<strong className=" text-red-600">
											(God becoming man)
										</strong>{" "}
										Christ surrendered only the prerogatives of deity but
										nothing of the divine essence, either in degree or kind. In
										His incarnation, Christ’s divine nature united with a human
										nature in an indissoluble union, and so He became the
										God-man ;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Colossians 2:9")}
										>
											(Colossians 2:9)
											{visibleVerse === "Colossians 2:9" &&
												verseData["Colossians 2:9"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Colossians 2:9"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										4. Unity of Humanity and Deity
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that Jesus Christ represents humanity and deity in
										indivisible oneness{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Micah 5:2")}
										>
											(Micah 5:2)
											{visibleVerse === "Micah 5:2" &&
												verseData["Micah 5:2"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Micah 5:2"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 14:9-10")}
										>
											(John 14:9-10)
											{visibleVerse === "John 14:9-10" &&
												verseData["John 14:9-10"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 14:9-10"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 5:23")}
										>
											(John 5:23)
											{visibleVerse === "John 5:23" &&
												verseData["John 5:23"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 5:23"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										5. Virgin Birth
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that our Lord Jesus Christ was virgin born{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Isaiah 7:14")}
										>
											(Isaiah 7:14)
											{visibleVerse === "Isaiah 7:14" &&
												verseData["Isaiah 7:14"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Isaiah 7:14"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Matthew 1:23, 25")}
										>
											(Matthew 1:23, 25)
											{visibleVerse === "Matthew 1:23, 25" &&
												verseData["Matthew 1:23, 25"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Matthew 1:23, 25"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Luke 1:26-35")}
										>
											(Luke 1:26-35)
											{visibleVerse === "Luke 1:26-35" &&
												verseData["Luke 1:26-35"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Luke 1:26-35"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										6. Purpose of the Incarnation
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that He was God incarnate{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 1:1,14")}
										>
											(John 1:1,14)
											{visibleVerse === "John 1:1,14" &&
												verseData["John 1:1,14"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 1:1,14"]}
														</p>
													</div>
												)}
										</strong>
										; and the purpose of the incarnation was to reveal God,
										redeem men, and rule over God’s kingdom{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Psalm 2:7-9")}
										>
											(Psalm 2:7-9)
											{visibleVerse === "Psalm 2:7-9" &&
												verseData["Psalm 2:7-9"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Psalm 2:7-9"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Isaiah 9:6")}
										>
											(Isaiah 9:6)
											{visibleVerse === "Isaiah 9:6" &&
												verseData["Isaiah 9:6"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Isaiah 9:6"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 1:29")}
										>
											(John 1:29)
											{visibleVerse === "John 1:29" &&
												verseData["John 1:29"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 1:29"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Philippians 2:9-11")}
										>
											(Philippians 2:9-11)
											{visibleVerse === "Philippians 2:9-11" &&
												verseData["Philippians 2:9-11"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Philippians 2:9-11"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Hebrews 7:25-26")}
										>
											(Hebrews 7:25-26)
											{visibleVerse === "Hebrews 7:25-26" &&
												verseData["Hebrews 7:25-26"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Hebrews 7:25-26"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Peter 1:18-19")}
										>
											(1 Peter 1:18-19)
											{visibleVerse === "1 Peter 1:18-19" &&
												verseData["1 Peter 1:18-19"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Peter 1:18-19"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										7. Humility and Service
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that in the incarnation, the second person of the
										Trinity laid aside His right to the full prerogatives of
										coexistence with God, assumed the place of a Son, and took
										on an existence appropriate to a servant while never
										divesting Himself of His divine attributes{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Philippians 2:5-8")}
										>
											(Philippians 2:5-8)
											{visibleVerse === "Philippians 2:5-8" &&
												verseData["Philippians 2:5-8"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Philippians 2:5-8"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-xl xl:text-h3 font-semibold text-navy dark:text-white mb-6 ">
								C. God the Son: Redeemer
							</h2>

							<div className="space-y-4">
								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										1. Accomplished Redemption
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that our Lord Jesus Christ accomplished our
										redemption through His death on the cross and that His death
										was voluntary, vicarious, substitutionary, propitiatory, and
										redemptive{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 10:15")}
										>
											(John 10:15)
											{visibleVerse === "John 10:15" &&
												verseData["John 10:15"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 10:15"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 3:24-25")}
										>
											(Romans 3:24-25)
											{visibleVerse === "Romans 3:24-25" &&
												verseData["Romans 3:24-25"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 3:24-25"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 5:8")}
										>
											(Romans 5:8)
											{visibleVerse === "Romans 5:8" &&
												verseData["Romans 5:8"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 5:8"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Peter 2:24")}
										>
											(1 Peter 2:24)
											{visibleVerse === "1 Peter 2:24" &&
												verseData["1 Peter 2:24"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Peter 2:24"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										2. Results of Redemption
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that on the basis of the efficacy of the death of
										our Lord Jesus Christ, the believing sinner is freed from
										the punishment, the penalty, the power, and one day the very
										presence of sin; and that he is declared righteous, given
										eternal life, and adopted into the family of God{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 3:25")}
										>
											(Romans 3:25)
											{visibleVerse === "Romans 3:25" &&
												verseData["Romans 3:25"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 3:25"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 5:8-9")}
										>
											(Romans 5:8-9)
											{visibleVerse === "Romans 5:8-9" &&
												verseData["Romans 5:8-9"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 5:8-9"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Corinthians 5:14-15")}
										>
											(2 Corinthians 5:14-15)
											{visibleVerse === "2 Corinthians 5:14-15" &&
												verseData["2 Corinthians 5:14-15"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Corinthians 5:14-15"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Peter 3:18")}
										>
											(1 Peter 3:18)
											{visibleVerse === "1 Peter 3:18" &&
												verseData["1 Peter 3:18"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Peter 3:18"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										3. Justification and Resurrection
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that our justification is made sure by His literal,
										physical resurrection from the dead and that He is now
										ascended to the right hand of the Father, where He now
										mediates as our Advocate and High Priest{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Matthew 28:6")}
										>
											(Matthew 28:6)
											{visibleVerse === "Matthew 28:6" &&
												verseData["Matthew 28:6"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Matthew 28:6"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Luke 24:38-39")}
										>
											(Luke 24:38-39)
											{visibleVerse === "Luke 24:38-39" &&
												verseData["Luke 24:38-39"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Luke 24:38-39"]}
														</p>
													</div>
												)}
										</strong>
										; <br />
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Acts 2:30-31")}
										>
											(Acts 2:30-31)
											{visibleVerse === "Acts 2:30-31" &&
												verseData["Acts 2:30-31"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Acts 2:30-31"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 4:25")}
										>
											(Romans 4:25)
											{visibleVerse === "Romans 4:25" &&
												verseData["Romans 4:25"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 4:25"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 8:34")}
										>
											(Romans 8:34)
											{visibleVerse === "Romans 8:34" &&
												verseData["Romans 8:34"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 8:34"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Hebrews 7:25")}
										>
											(Hebrews 7:25)
											{visibleVerse === "Hebrews 7:25" &&
												verseData["Hebrews 7:25"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Hebrews 7:25"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Hebrews 9:24")}
										>
											(Hebrews 9:24)
											{visibleVerse === "Hebrews 9:24" &&
												verseData["Hebrews 9:24"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Hebrews 9:24"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 John 2:1")}
										>
											(1 John 2:1)
											{visibleVerse === "1 John 2:1" &&
												verseData["1 John 2:1"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 John 2:1"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										4. Proof and Guarantee
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that in the resurrection of Jesus Christ from the
										grave, God confirmed the deity of His Son and gave proof
										that God has accepted the atoning work of Christ on the
										cross. And that Jesus’ bodily resurrection is also the
										guarantee of a future resurrection life for all believers{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 5:26-29")}
										>
											(John 5:26-29)
											{visibleVerse === "John 5:26-29" &&
												verseData["John 5:26-29"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 5:26-29"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 14:19")}
										>
											(John 14:19)
											{visibleVerse === "John 14:19" &&
												verseData["John 14:19"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 14:19"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 1:4")}
										>
											(Romans 1:4)
											{visibleVerse === "Romans 1:4" &&
												verseData["Romans 1:4"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 1:4"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 6:5-10")}
										>
											(Romans 6:5-10)
											{visibleVerse === "Romans 6:5-10" &&
												verseData["Romans 6:5-10"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 6:5-10"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<br />
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Corinthians 15:20,23")}
										>
											(1 Corinthians 15:20,23)
											{visibleVerse === "1 Corinthians 15:20,23" &&
												verseData["1 Corinthians 15:20,23"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Corinthians 15:20,23"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-xl xl:text-h3 font-semibold text-navy dark:text-white mb-6">
								D. God the Son: Judge
							</h2>

							<div className="space-y-4">
								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										1. Return and Millennial Kingdom
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that Jesus Christ will return to receive the
										church, which is His body, unto Himself at the rapture and,
										returning with His church in glory, will establish His
										millennial kingdom on earth{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Acts 1:9-11")}
										>
											(Acts 1:9-11)
											{visibleVerse === "Acts 1:9-11" &&
												verseData["Acts 1:9-11"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Acts 1:9-11"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Thessalonians 4:13-18")}
										>
											(1 Thessalonians 4:13-18)
											{visibleVerse === "1 Thessalonians 4:13-18" &&
												verseData["1 Thessalonians 4:13-18"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Thessalonians 4:13-18"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Revelation 20")}
										>
											(Revelation 20)
											{visibleVerse === "Revelation 20" &&
												verseData["Revelation 20"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Revelation 20"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										2. Judgment
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We believe that the Lord Jesus Christ is the one through
										whom God will judge all mankind{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 5:22-23")}
										>
											(John 5:22-23)
											{visibleVerse === "John 5:22-23" &&
												verseData["John 5:22-23"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 5:22-23"]}
														</p>
													</div>
												)}
										</strong>
										:
									</p>
									<ul className="list-disc pl-5">
										<li>
											Believers{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("1 Corinthians 3:10-15")}
											>
												(1 Corinthians 3:10-15)
												{visibleVerse === "1 Corinthians 3:10-15" &&
													verseData["1 Corinthians 3:10-15"] && (
														<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["1 Corinthians 3:10-15"]}
															</p>
														</div>
													)}
											</strong>{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("2 Corinthians 5:10")}
											>
												(2 Corinthians 5:10)
												{visibleVerse === "2 Corinthians 5:10" &&
													verseData["2 Corinthians 5:10"] && (
														<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["2 Corinthians 5:10"]}
															</p>
														</div>
													)}
											</strong>
											.
										</li>
										<li>
											Living inhabitants of the earth at His glorious return{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("Matthew 25:31-46")}
											>
												(Matthew 25:31-46)
												{visibleVerse === "Matthew 25:31-46" &&
													verseData["Matthew 25:31-46"] && (
														<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["Matthew 25:31-46"]}
															</p>
														</div>
													)}
											</strong>
											.
										</li>
										<li>
											Unbelieving dead at the Great White Throne{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("Revelation 20:11-15")}
											>
												(Revelation 20:11-15)
												{visibleVerse === "Revelation 20:11-15" &&
													verseData["Revelation 20:11-15"] && (
														<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["Revelation 20:11-15"]}
															</p>
														</div>
													)}
											</strong>
											.
										</li>
									</ul>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										3. Mediator and Final Judge
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										As the mediator between God and man{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Timothy 2:5")}
										>
											(1 Timothy 2:5)
											{visibleVerse === "1 Timothy 2:5" &&
												verseData["1 Timothy 2:5"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Timothy 2:5"]}
														</p>
													</div>
												)}
										</strong>
										, the head of His body the church{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Ephesians 1:22")}
										>
											(Ephesians 1:22)
											{visibleVerse === "Ephesians 1:22" &&
												verseData["Ephesians 1:22"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Ephesians 1:22"]}
														</p>
													</div>
												)}
										</strong>
										,{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Ephesians 5:23")}
										>
											(Ephesians 5:23)
											{visibleVerse === "Ephesians 5:23" &&
												verseData["Ephesians 5:23"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Ephesians 5:23"]}
														</p>
													</div>
												)}
										</strong>
										,{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Colossians 1:18")}
										>
											(Colossians 1:18)
											{visibleVerse === "Colossians 1:18" &&
												verseData["Colossians 1:18"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Colossians 1:18"]}
														</p>
													</div>
												)}
										</strong>
										, and the coming universal King who will reign on the throne
										of David{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Isaiah 9:6")}
										>
											(Isaiah 9:6)
											{visibleVerse === "Isaiah 9:6" &&
												verseData["Isaiah 9:6"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Isaiah 9:6"]}
														</p>
													</div>
												)}
										</strong>
										,{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Luke 1:31-33")}
										>
											(Luke 1:31-33)
											{visibleVerse === "Luke 1:31-33" &&
												verseData["Luke 1:31-33"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Luke 1:31-33"]}
														</p>
													</div>
												)}
										</strong>
										, He is the final judge of all who fail to place their trust
										in Him as Savior and Lord{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Matthew 25:14-46")}
										>
											(Matthew 25:14-46)
											{visibleVerse === "Matthew 25:14-46" &&
												verseData["Matthew 25:14-46"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Matthew 25:14-46"]}
														</p>
													</div>
												)}
										</strong>
										,{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Acts 17:30-31")}
										>
											(Acts 17:30-31)
											{visibleVerse === "Acts 17:30-31" &&
												verseData["Acts 17:30-31"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Acts 17:30-31"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-xl xl:text-h3 font-semibold text-navy dark:text-white mb-6">
								E. God the Holy Spirit
							</h2>

							<div className="space-y-4">
								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										1. Divine Attributes
									</h3>
									<p className=" xl:text-lg 3xl:text-h4">
										We teach that the Holy Spirit is a divine person, eternal,
										underived, possessing all the attributes of the Godhead:
									</p>
									<ul className="list-disc pl-5">
										<li>
											Intellect{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("1 Corinthians 2:10-13")}
											>
												(1 Corinthians 2:10-13)
												{visibleVerse === "1 Corinthians 2:10-13" &&
													verseData["1 Corinthians 2:10-13"] && (
														<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["1 Corinthians 2:10-13"]}
															</p>
														</div>
													)}
											</strong>
											;
										</li>
										<li>
											Emotions{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("Ephesians 4:30")}
											>
												(Ephesians 4:30)
												{visibleVerse === "Ephesians 4:30" &&
													verseData["Ephesians 4:30"] && (
														<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["Ephesians 4:30"]}
															</p>
														</div>
													)}
											</strong>
											;
										</li>
										<li>
											Will{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("1 Corinthians 12:11")}
											>
												(1 Corinthians 12:11)
												{visibleVerse === "1 Corinthians 12:11" &&
													verseData["1 Corinthians 12:11"] && (
														<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["1 Corinthians 12:11"]}
															</p>
														</div>
													)}
											</strong>
											;
										</li>
										<li>
											Eternality{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("Hebrews 9:14")}
											>
												(Hebrews 9:14)
												{visibleVerse === "Hebrews 9:14" &&
													verseData["Hebrews 9:14"] && (
														<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["Hebrews 9:14"]}
															</p>
														</div>
													)}
											</strong>
											;
										</li>
										<li>
											Omnipresence{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("Psalm 139:7-10")}
											>
												(Psalm 139:7-10)
												{visibleVerse === "Psalm 139:7-10" &&
													verseData["Psalm 139:7-10"] && (
														<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["Psalm 139:7-10"]}
															</p>
														</div>
													)}
											</strong>
											;
										</li>
										<li>
											Omniscience{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("Isaiah 40:13-14")}
											>
												(Isaiah 40:13-14)
												{visibleVerse === "Isaiah 40:13-14" &&
													verseData["Isaiah 40:13-14"] && (
														<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["Isaiah 40:13-14"]}
															</p>
														</div>
													)}
											</strong>
											;
										</li>
										<li>
											Omnipotence{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("Romans 15:13")}
											>
												(Romans 15:13)
												{visibleVerse === "Romans 15:13" &&
													verseData["Romans 15:13"] && (
														<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["Romans 15:13"]}
															</p>
														</div>
													)}
											</strong>
											;
										</li>
										<li>
											Truthfulness{" "}
											<strong
												className="text-red-600 cursor-pointer relative"
												onClick={() => toggleVerse("John 16:13")}
											>
												(John 16:13)
												{visibleVerse === "John 16:13" &&
													verseData["John 16:13"] && (
														<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
															<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
																{verseData["John 16:13"]}
															</p>
														</div>
													)}
											</strong>
											.
										</li>
									</ul>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that in all the divine attributes He is coequal and
										consubstantial with the Father and the Son{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Matthew 28:19")}
										>
											(Matthew 28:19)
											{visibleVerse === "Matthew 28:19" &&
												verseData["Matthew 28:19"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Matthew 28:19"]}
														</p>
													</div>
												)}
										</strong>
										; <br />
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Acts 5:3-4")}
										>
											(Acts 5:3-4)
											{visibleVerse === "Acts 5:3-4" &&
												verseData["Acts 5:3-4"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Acts 5:3-4"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Acts 28:25-26")}
										>
											(Acts 28:25-26)
											{visibleVerse === "Acts 28:25-26" &&
												verseData["Acts 28:25-26"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Acts 28:25-26"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Corinthians 12:4-6")}
										>
											(1 Corinthians 12:4-6)
											{visibleVerse === "1 Corinthians 12:4-6" &&
												verseData["1 Corinthians 12:4-6"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Corinthians 12:4-6"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Corinthians 13:14")}
										>
											(2 Corinthians 13:14)
											{visibleVerse === "2 Corinthians 13:14" &&
												verseData["2 Corinthians 13:14"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Corinthians 13:14"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Jeremiah 31:31-34")}
										>
											(Jeremiah 31:31-34)
											{visibleVerse === "Jeremiah 31:31-34" &&
												verseData["Jeremiah 31:31-34"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Jeremiah 31:31-34"]}
														</p>
													</div>
												)}
										</strong>
										;{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Hebrews 10:15-17")}
										>
											(Hebrews 10:15-17)
											{visibleVerse === "Hebrews 10:15-17" &&
												verseData["Hebrews 10:15-17"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Hebrews 10:15-17"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										2. Work of the Holy Spirit
									</h3>
									<p className="xl:text-lg 3xl:text-h4">
										We teach that it is the work of the Holy Spirit to execute
										the divine will with relation to all mankind. We recognize
										His sovereign activity in creation{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Genesis 1:2")}
										>
											(Genesis 1:2)
											{visibleVerse === "Genesis 1:2" &&
												verseData["Genesis 1:2"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Genesis 1:2"]}
														</p>
													</div>
												)}
										</strong>
										, the incarnation{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Matthew 1:18")}
										>
											(Matthew 1:18)
											{visibleVerse === "Matthew 1:18" &&
												verseData["Matthew 1:18"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Matthew 1:18"]}
														</p>
													</div>
												)}
										</strong>
										, the written revelation{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Peter 1:20-21")}
										>
											(2 Peter 1:20-21)
											{visibleVerse === "2 Peter 1:20-21" &&
												verseData["2 Peter 1:20-21"] && (
													<div className="absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Peter 1:20-21"]}
														</p>
													</div>
												)}
										</strong>
										, and the work of salvation{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 3:5-7")}
										>
											(John 3:5-7)
											{visibleVerse === "John 3:5-7" &&
												verseData["John 3:5-7"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 3:5-7"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
									<p className="xl:text-lg 3xl:text-h4 mb-10">
										We teach that the work of the Holy Spirit in this age began
										at Pentecost, when He came from the Father as promised by
										Christ{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 14:16-17")}
										>
											(John 14:16-17)
											{visibleVerse === "John 14:16-17" &&
												verseData["John 14:16-17"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 14:16-17"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 15:26")}
										>
											(John 15:26)
											{visibleVerse === "John 15:26" &&
												verseData["John 15:26"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 15:26"]}
														</p>
													</div>
												)}
										</strong>{" "}
										to initiate and complete the building of the body of Christ,
										which is His church{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Corinthians 12:13")}
										>
											(1 Corinthians 12:13)
											{visibleVerse === "1 Corinthians 12:13" &&
												verseData["1 Corinthians 12:13"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Corinthians 12:13"]}
														</p>
													</div>
												)}
										</strong>
										. The broad scope of His divine activity includes convicting
										the world of sin, of righteousness, and of judgment;
										glorifying the Lord Jesus Christ and transforming believers
										into the image of Christ{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 16:7-9")}
										>
											(John 16:7-9)
											{visibleVerse === "John 16:7-9" &&
												verseData["John 16:7-9"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 16:7-9"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Acts 1:5")}
										>
											(Acts 1:5)
											{visibleVerse === "Acts 1:5" && verseData["Acts 1:5"] && (
												<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
													<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
														{verseData["Acts 1:5"]}
													</p>
												</div>
											)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Acts 2:4")}
										>
											(Acts 2:4)
											{visibleVerse === "Acts 2:4" && verseData["Acts 2:4"] && (
												<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
													<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
														{verseData["Acts 2:4"]}
													</p>
												</div>
											)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 8:29")}
										>
											(Romans 8:29)
											{visibleVerse === "Romans 8:29" &&
												verseData["Romans 8:29"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 8:29"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<br />
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Corinthians 3:18")}
										>
											(2 Corinthians 3:18)
											{visibleVerse === "2 Corinthians 3:18" &&
												verseData["2 Corinthians 3:18"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Corinthians 3:18"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Ephesians 2:22")}
										>
											(Ephesians 2:22)
											{visibleVerse === "Ephesians 2:22" &&
												verseData["Ephesians 2:22"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Ephesians 2:22"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<h2 className="text-xl xl:text-h3 font-semibold text-navy dark:text-white mb-6">
									F. Holy Spirit and the Church
								</h2>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										1. Regeneration and Empowerment
									</h3>
									<p className=" xl:text-lg 3xl:text-h4">
										We teach that the Holy Spirit is the supernatural and
										sovereign agent in regeneration, baptizing all believers
										into the body of Christ. The Holy Spirit also indwells,
										sanctifies, instructs, empowers them for service, and seals
										them unto the day of redemption{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Romans 8:9")}
										>
											(Romans 8:9)
											{visibleVerse === "Romans 8:9" &&
												verseData["Romans 8:9"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Romans 8:9"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Corinthians 3:6")}
										>
											(2 Corinthians 3:6)
											{visibleVerse === "2 Corinthians 3:6" &&
												verseData["2 Corinthians 3:6"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Corinthians 3:6"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Ephesians 1:13")}
										>
											(Ephesians 1:13)
											{visibleVerse === "Ephesians 1:13" &&
												verseData["Ephesians 1:13"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Ephesians 1:13"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										2. Divine Teacher
									</h3>
									<p className=" xl:text-lg 3xl:text-h4">
										We teach that the Holy Spirit is the divine teacher who
										guided the apostles and prophets into all truth as they
										committed to writing God’s revelation, the Bible. Every
										believer possesses the indwelling presence of the Holy
										Spirit from the moment of salvation, and it is the duty of
										all those born of the Spirit to be filled with{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("(controlled by)")}
										>
											(controlled by)
											{visibleVerse === "(controlled by)" &&
												verseData["(controlled by)"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["(controlled by)"]}
														</p>
													</div>
												)}
										</strong>{" "}
										the Spirit{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Ephesians 5:18")}
										>
											(Ephesians 5:18)
											{visibleVerse === "Ephesians 5:18" &&
												verseData["Ephesians 5:18"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Ephesians 5:18"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Peter 1:19-21")}
										>
											(2 Peter 1:19-21)
											{visibleVerse === "2 Peter 1:19-21" &&
												verseData["2 Peter 1:19-21"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Peter 1:19-21"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 John 2:20,27")}
										>
											(1 John 2:20,27)
											{visibleVerse === "1 John 2:20,27" &&
												verseData["1 John 2:20,27"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 John 2:20,27"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>

								<div>
									<h3 className="text-lg xl:text-h4 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
										3. Spiritual Gifts
									</h3>
									<p className=" xl:text-lg 3xl:text-h4">
										We teach that the Holy Spirit alone administers spiritual
										gifts to the church. The Holy Spirit glorifies neither
										Himself nor His gifts by ostentatious displays, but all He
										does is to glorify Christ, to implement His work of
										redeeming the lost, and to build up believers in the most
										holy faith{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("John 16:13-14")}
										>
											(John 16:13-14)
											{visibleVerse === "John 16:13-14" &&
												verseData["John 16:13-14"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["John 16:13-14"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Acts 1:8")}
										>
											(Acts 1:8)
											{visibleVerse === "Acts 1:8" && verseData["Acts 1:8"] && (
												<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
													<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
														{verseData["Acts 1:8"]}
													</p>
												</div>
											)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Corinthians 12:4-11")}
										>
											(1 Corinthians 12:4-11)
											{visibleVerse === "1 Corinthians 12:4-11" &&
												verseData["1 Corinthians 12:4-11"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Corinthians 12:4-11"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Corinthians 3:18")}
										>
											(2 Corinthians 3:18)
											{visibleVerse === "2 Corinthians 3:18" &&
												verseData["2 Corinthians 3:18"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Corinthians 3:18"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
									<p className=" xl:text-lg 3xl:text-h4">
										We teach, in this respect, that God the Holy Spirit is
										sovereign in the bestowing of all His gifts for the
										perfecting of the saints today and that speaking in tongues{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() =>
												toggleVerse("(unlearned foreign languages)")
											}
										>
											(unlearned foreign languages)
											{visibleVerse === "(unlearned foreign languages)" &&
												verseData["(unlearned foreign languages)"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["(unlearned foreign languages)"]}
														</p>
													</div>
												)}
										</strong>{" "}
										and the working of sign miracles gradually stopped as the
										New Testament Scriptures were completed and their authority
										became established{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("1 Corinthians 13:8-10")}
										>
											(1 Corinthians 13:8-10)
											{visibleVerse === "1 Corinthians 13:8-10" &&
												verseData["1 Corinthians 13:8-10"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["1 Corinthians 13:8-10"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<br />
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("2 Corinthians 12:12")}
										>
											(2 Corinthians 12:12)
											{visibleVerse === "2 Corinthians 12:12" &&
												verseData["2 Corinthians 12:12"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["2 Corinthians 12:12"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Ephesians 4:7-12")}
										>
											(Ephesians 4:7-12)
											{visibleVerse === "Ephesians 4:7-12" &&
												verseData["Ephesians 4:7-12"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Ephesians 4:7-12"]}
														</p>
													</div>
												)}
										</strong>{" "}
										<strong
											className="text-red-600 cursor-pointer relative"
											onClick={() => toggleVerse("Hebrews 2:1-4")}
										>
											(Hebrews 2:1-4)
											{visibleVerse === "Hebrews 2:1-4" &&
												verseData["Hebrews 2:1-4"] && (
													<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
														<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
															{verseData["Hebrews 2:1-4"]}
														</p>
													</div>
												)}
										</strong>
										.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-10 bg-background px-6">
				<div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto 3xl:max-w-screen-2xl ">
					<h2 className="text-h3 lg:text-h2 3xl:text-h1 font-semibold text-navy dark:text-white mb-6 text-center">
						III. Man
					</h2>

					<div className="space-y-4">
						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								1. Creation and Nature
							</h3>
							<p className="xl:text-lg 3xl:text-h4">
								We teach that man was directly and immediately created by God in
								His image and likeness. Man was created free of sin with a
								rational nature, intelligence, volition, self-determination, and
								moral responsibility to God{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Genesis 2:7")}
								>
									(Genesis 2:7)
									{visibleVerse === "Genesis 2:7" &&
										verseData["Genesis 2:7"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Genesis 2:7"]}
												</p>
											</div>
										)}
								</strong>{" "}
								and{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("James 3:9")}
								>
									(James 3:9)
									{visibleVerse === "James 3:9" && verseData["James 3:9"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["James 3:9"]}
											</p>
										</div>
									)}
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								2. Purpose of Creation
							</h3>
							<p className="xl:text-lg 3xl:text-h4">
								We teach that God’s intention in the creation of man was that
								man should glorify God, enjoy God’s fellowship, live his life in
								the will of God and by this, accomplish God’s purpose for man in
								the world{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Isaiah 43:7")}
								>
									(Isaiah 43:7)
									{visibleVerse === "Isaiah 43:7" &&
										verseData["Isaiah 43:7"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Isaiah 43:7"]}
												</p>
											</div>
										)}
								</strong>{" "}
								and{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Colossians 1:16")}
								>
									(Colossians 1:16)
									{visibleVerse === "Colossians 1:16" &&
										verseData["Colossians 1:16"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Colossians 1:16"]}
												</p>
											</div>
										)}
								</strong>{" "}
								and <br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Revelation 4:11")}
								>
									(Revelation 4:11)
									{visibleVerse === "Revelation 4:11" &&
										verseData["Revelation 4:11"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Revelation 4:11"]}
												</p>
											</div>
										)}
								</strong>
								.
							</p>
						</div>
						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								3. The Fall and Its Consequences
							</h3>
							<p className="xl:text-lg 3xl:text-h4">
								We teach that in Adam’s sin of disobedience to the revealed will
								and Word of God, man lost his innocence, incurred the penalty of
								spiritual and physical death, became subject to the wrath of
								God, and became inherently corrupt and utterly incapable of
								choosing or doing that which is acceptable to God apart from
								divine grace. With no recuperative powers to enable him to
								recover himself, man is hopelessly lost. Man’s salvation is
								thereby wholly of God’s grace through the redemptive work of our
								Lord Jesus Christ{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Genesis 2:16-17")}
								>
									(Genesis 2:16-17)
									{visibleVerse === "Genesis 2:16-17" &&
										verseData["Genesis 2:16-17"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Genesis 2:16-17"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Genesis 3:1-19")}
								>
									(Genesis 3:1-19)
									{visibleVerse === "Genesis 3:1-19" &&
										verseData["Genesis 3:1-19"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Genesis 3:1-19"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 3:36")}
								>
									(John 3:36)
									{visibleVerse === "John 3:36" && verseData["John 3:36"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["John 3:36"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 3:23")}
								>
									(Romans 3:23)
									{visibleVerse === "Romans 3:23" &&
										verseData["Romans 3:23"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 3:23"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 6:23")}
								>
									(Romans 6:23)
									{visibleVerse === "Romans 6:23" &&
										verseData["Romans 6:23"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 6:23"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Corinthians 2:14")}
								>
									(1 Corinthians 2:14)
									{visibleVerse === "1 Corinthians 2:14" &&
										verseData["1 Corinthians 2:14"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Corinthians 2:14"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Ephesians 2:1-3")}
								>
									(Ephesians 2:1-3)
									{visibleVerse === "Ephesians 2:1-3" &&
										verseData["Ephesians 2:1-3"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Ephesians 2:1-3"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Timothy 2:13-14")}
								>
									(1 Timothy 2:13-14)
									{visibleVerse === "1 Timothy 2:13-14" &&
										verseData["1 Timothy 2:13-14"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Timothy 2:13-14"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 John 1:8")}
								>
									(1 John 1:8)
									{visibleVerse === "1 John 1:8" && verseData["1 John 1:8"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["1 John 1:8"]}
											</p>
										</div>
									)}
								</strong>
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								4. Universal Sinfulness
							</h3>
							<p className="xl:text-lg 3xl:text-h4">
								We teach that because all men were in Adam, the consequence of
								Adam’s sin has been transmitted{" "}
								<strong className="text-red-600">(imputed)</strong> to all men
								of all ages, Jesus Christ being the only exception. All men are
								thus sinners by divine declaration, by nature, and by choice{" "}
								<br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Psalm 14:1-3")}
								>
									(Psalm 14:1-3)
									{visibleVerse === "Psalm 14:1-3" &&
										verseData["Psalm 14:1-3"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Psalm 14:1-3"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Jeremiah 17:9")}
								>
									(Jeremiah 17:9)
									{visibleVerse === "Jeremiah 17:9" &&
										verseData["Jeremiah 17:9"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Jeremiah 17:9"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 3:9-18")}
								>
									(Romans 3:9-18)
									{visibleVerse === "Romans 3:9-18" &&
										verseData["Romans 3:9-18"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 3:9-18"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 3:23")}
								>
									(Romans 3:23)
									{visibleVerse === "Romans 3:23" &&
										verseData["Romans 3:23"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 3:23"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 5:10-12")}
								>
									(Romans 5:10-12)
									{visibleVerse === "Romans 5:10-12" &&
										verseData["Romans 5:10-12"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 5:10-12"]}
												</p>
											</div>
										)}
								</strong>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-10 bg-background px-6">
				<div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto 3xl:max-w-screen-2xl ">
					<h2 className="text-h3 lg:text-h2 3xl:text-h1 font-semibold text-navy dark:text-white mb-6 text-center">
						IV. Salvation
					</h2>

					<div className="space-y-4">
						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								1. General Overview
							</h3>
							<p className="xl:text-lg 3xl:text-h4">
								We teach that salvation is wholly of God by grace, through the
								redemption of Jesus Christ, the merit of His shed blood, and not
								on the basis of human merit or works{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 1:12")}
								>
									(John 1:12)
									{visibleVerse === "John 1:12" && verseData["John 1:12"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["John 1:12"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Ephesians 1:7")}
								>
									(Ephesians 1:7)
									{visibleVerse === "Ephesians 1:7" &&
										verseData["Ephesians 1:7"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Ephesians 1:7"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Ephesians 2:8-10")}
								>
									(Ephesians 2:8-10)
									{visibleVerse === "Ephesians 2:8-10" &&
										verseData["Ephesians 2:8-10"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Ephesians 2:8-10"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Peter 1:18-19")}
								>
									(1 Peter 1:18-19)
									{visibleVerse === "1 Peter 1:18-19" &&
										verseData["1 Peter 1:18-19"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Peter 1:18-19"]}
												</p>
											</div>
										)}
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								A. Regeneration
							</h3>
							<p className="xl:text-lg 3xl:text-h4">
								1. We teach that regeneration is a supernatural work of the Holy
								Spirit by which the divine nature and divine life are given{" "}
								<br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 3:3-7")}
								>
									(John 3:3-7)
									{visibleVerse === "John 3:3-7" && verseData["John 3:3-7"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["John 3:3-7"]}
											</p>
										</div>
									)}
								</strong>
								.
							</p>
							<p className="xl:text-lg 3xl:text-h4">
								2. We teach that regeneration is instantaneous and is
								accomplished solely by the power of the Holy Spirit through the
								instrumentality of the Word of God{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 5:24")}
								>
									(John 5:24)
									{visibleVerse === "John 5:24" && verseData["John 5:24"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["John 5:24"]}
											</p>
										</div>
									)}
								</strong>
								.
							</p>
							<p className="xl:text-lg 3xl:text-h4">
								3. We teach that the Holy Spirit enables voluntary obedience to
								the gospel.
							</p>
							<p className="xl:text-lg 3xl:text-h4">
								4. We teach that genuine regeneration is manifested by
								repentance, faith, and righteous living. Good works will be its
								proper evidence and fruit{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Corinthians 6:19-20")}
								>
									(1 Corinthians 6:19-20)
									{visibleVerse === "1 Corinthians 6:19-20" &&
										verseData["1 Corinthians 6:19-20"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Corinthians 6:19-20"]}
												</p>
											</div>
										)}
								</strong>{" "}
								and will manifest to the extent that the believer submits to the
								control of the Holy Spirit in his life through faithful
								obedience to the Word of God{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Ephesians 5:17-21")}
								>
									(Ephesians 5:17-21)
									{visibleVerse === "Ephesians 5:17-21" &&
										verseData["Ephesians 5:17-21"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Ephesians 5:17-21"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Philippians 2:12")}
								>
									(Philippians 2:12)
									{visibleVerse === "Philippians 2:12" &&
										verseData["Philippians 2:12"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Philippians 2:12"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Colossians 3:16")}
								>
									(Colossians 3:16)
									{visibleVerse === "Colossians 3:16" &&
										verseData["Colossians 3:16"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Colossians 3:16"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Peter 1:4-10")}
								>
									(2 Peter 1:4-10)
									{visibleVerse === "2 Peter 1:4-10" &&
										verseData["2 Peter 1:4-10"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Peter 1:4-10"]}
												</p>
											</div>
										)}
								</strong>{" "}
								. This obedience causes the believer to be increasingly
								conformed to the image of our Lord Jesus Christ <br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Corinthians 3:18")}
								>
									(2 Corinthians 3:18)
									{visibleVerse === "2 Corinthians 3:18" &&
										verseData["2 Corinthians 3:18"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Corinthians 3:18"]}
												</p>
											</div>
										)}
								</strong>{" "}
								. Such a conformity is climaxed in the believer’s glorification
								at Christ’s coming{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 8:17")}
								>
									(Romans 8:17)
									{visibleVerse === "Romans 8:17" &&
										verseData["Romans 8:17"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 8:17"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Peter 1:4")}
								>
									(2 Peter 1:4)
									{visibleVerse === "2 Peter 1:4" &&
										verseData["2 Peter 1:4"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Peter 1:4"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 John 3:2-3")}
								>
									(1 John 3:2-3)
									{visibleVerse === "1 John 3:2-3" &&
										verseData["1 John 3:2-3"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 John 3:2-3"]}
												</p>
											</div>
										)}
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								B. Election
							</h3>
							<p className="xl:text-lg 3xl:text-h4">
								1. We teach that election is the act of God by which, before the
								foundation of the world, He chose in Christ those whom He
								graciously regenerates, saves, and sanctifies{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 8:28-30")}
								>
									(Romans 8:28-30)
									{visibleVerse === "Romans 8:28-30" &&
										verseData["Romans 8:28-30"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 8:28-30"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Ephesians 1:4-11")}
								>
									(Ephesians 1:4-11)
									{visibleVerse === "Ephesians 1:4-11" &&
										verseData["Ephesians 1:4-11"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Ephesians 1:4-11"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Thessalonians 2:13")}
								>
									(2 Thessalonians 2:13)
									{visibleVerse === "2 Thessalonians 2:13" &&
										verseData["2 Thessalonians 2:13"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Thessalonians 2:13"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Timothy 2:10")}
								>
									(2 Timothy 2:10)
									{visibleVerse === "2 Timothy 2:10" &&
										verseData["2 Timothy 2:10"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Timothy 2:10"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Peter 1:1-2")}
								>
									(1 Peter 1:1-2)
									{visibleVerse === "1 Peter 1:1-2" &&
										verseData["1 Peter 1:1-2"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Peter 1:1-2"]}
												</p>
											</div>
										)}
								</strong>
								.
							</p>

							<p className="xl:text-lg 3xl:text-h4">
								2. We teach that sovereign election does not contradict or
								negate the responsibility of man to repent and trust Christ as
								Savior and Lord{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Ezekiel 18:23")}
								>
									(Ezekiel 18:23)
									{visibleVerse === "Ezekiel 18:23" &&
										verseData["Ezekiel 18:23"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Ezekiel 18:23"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Ezekiel 18:32")}
								>
									(Ezekiel 18:32)
									{visibleVerse === "Ezekiel 18:32" &&
										verseData["Ezekiel 18:32"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Ezekiel 18:32"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Ezekiel 33:11")}
								>
									(Ezekiel 33:11)
									{visibleVerse === "Ezekiel 33:11" &&
										verseData["Ezekiel 33:11"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Ezekiel 33:11"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 3:18-19")}
								>
									(John 3:18-19)
									{visibleVerse === "John 3:18-19" &&
										verseData["John 3:18-19"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["John 3:18-19"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 3:36")}
								>
									(John 3:36)
									{visibleVerse === "John 3:36" && verseData["John 3:36"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["John 3:36"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 5:40")}
								>
									(John 5:40)
									{visibleVerse === "John 5:40" && verseData["John 5:40"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["John 5:40"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 9:22-23")}
								>
									(Romans 9:22-23)
									{visibleVerse === "Romans 9:22-23" &&
										verseData["Romans 9:22-23"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 9:22-23"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Thessalonians 2:10-12")}
								>
									(2 Thessalonians 2:10-12)
									{visibleVerse === "2 Thessalonians 2:10-12" &&
										verseData["2 Thessalonians 2:10-12"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Thessalonians 2:10-12"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Revelation 22:17")}
								>
									(Revelation 22:17)
									{visibleVerse === "Revelation 22:17" &&
										verseData["Revelation 22:17"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Revelation 22:17"]}
												</p>
											</div>
										)}
								</strong>{" "}
								. Nevertheless, since sovereign grace includes the means of
								receiving the gift of salvation as well as the gift itself,
								sovereign election will result in what God determines. All whom
								the Father calls to Himself will come in faith, and all who come
								in faith the Father will receive{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 6:37-40")}
								>
									(John 6:37-40)
									{visibleVerse === "John 6:37-40" &&
										verseData["John 6:37-40"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["John 6:37-40"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 6:44")}
								>
									(John 6:44)
									{visibleVerse === "John 6:44" && verseData["John 6:44"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["John 6:44"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Acts 13:48")}
								>
									(Acts 13:48)
									{visibleVerse === "Acts 13:48" && verseData["Acts 13:48"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["Acts 13:48"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("James 4:8")}
								>
									(James 4:8)
									{visibleVerse === "James 4:8" && verseData["James 4:8"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["James 4:8"]}
											</p>
										</div>
									)}
								</strong>
								.
							</p>
							<p className="xl:text-lg 3xl:text-h4">
								3. We teach that the unmerited favor that God grants to totally
								depraved sinners is not related to any initiative on their own
								part nor to God’s anticipation of what they might do by their
								own will, but is solely of His sovereign grace and mercy <br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Ephesians 1:4-7")}
								>
									(Ephesians 1:4-7)
									{visibleVerse === "Ephesians 1:4-7" &&
										verseData["Ephesians 1:4-7"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Ephesians 1:4-7"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Titus 3:4-7")}
								>
									(Titus 3:4-7)
									{visibleVerse === "Titus 3:4-7" &&
										verseData["Titus 3:4-7"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Titus 3:4-7"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Peter 1:2")}
								>
									(1 Peter 1:2)
									{visibleVerse === "1 Peter 1:2" &&
										verseData["1 Peter 1:2"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Peter 1:2"]}
												</p>
											</div>
										)}
								</strong>{" "}
								.
							</p>
							<p className="xl:text-lg 3xl:text-h4">
								4. We teach that election should not be looked upon as based
								merely on abstract sovereignty. God is truly sovereign, but He
								exercises this sovereignty in harmony with His other attributes,
								especially His omniscience, justice, holiness, and wisdom{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 9:11-16")}
								>
									(Romans 9:11-16)
									{visibleVerse === "Romans 9:11-16" &&
										verseData["Romans 9:11-16"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 9:11-16"]}
												</p>
											</div>
										)}
								</strong>{" "}
								. This sovereignty will always exalt the will of God in a manner
								totally consistent with His character as revealed in the life of
								our Lord Jesus Christ{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Matthew 11:25-28")}
								>
									(Matthew 11:25-28)
									{visibleVerse === "Matthew 11:25-28" &&
										verseData["Matthew 11:25-28"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Matthew 11:25-28"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Timothy 1:9")}
								>
									(2 Timothy 1:9)
									{visibleVerse === "2 Timothy 1:9" &&
										verseData["2 Timothy 1:9"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Timothy 1:9"]}
												</p>
											</div>
										)}
								</strong>
								.
							</p>
						</div>
						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								C. Justification
							</h3>
							<p className="xl:text-lg 3xl:text-h4">
								We teach that justification before God is an act of God{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 8:33")}
								>
									(Romans 8:33)
									{visibleVerse === "Romans 8:33" &&
										verseData["Romans 8:33"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 8:33"]}
												</p>
											</div>
										)}
								</strong>
								, by which He declares righteous those who through faith in
								Christ repent of their sins{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Luke 13:3")}
								>
									(Luke 13:3)
									{visibleVerse === "Luke 13:3" && verseData["Luke 13:3"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["Luke 13:3"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Acts 2:38")}
								>
									(Acts 2:38)
									{visibleVerse === "Acts 2:38" && verseData["Acts 2:38"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["Acts 2:38"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Acts 3:19")}
								>
									(Acts 3:19)
									{visibleVerse === "Acts 3:19" && verseData["Acts 3:19"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["Acts 3:19"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Acts 11:18")}
								>
									(Acts 11:18)
									{visibleVerse === "Acts 11:18" && verseData["Acts 11:18"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["Acts 11:18"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 2:4")}
								>
									(Romans 2:4)
									{visibleVerse === "Romans 2:4" && verseData["Romans 2:4"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["Romans 2:4"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Corinthians 7:10")}
								>
									(2 Corinthians 7:10)
									{visibleVerse === "2 Corinthians 7:10" &&
										verseData["2 Corinthians 7:10"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Corinthians 7:10"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Isaiah 55:6-7")}
								>
									(Isaiah 55:6-7)
									{visibleVerse === "Isaiah 55:6-7" &&
										verseData["Isaiah 55:6-7"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Isaiah 55:6-7"]}
												</p>
											</div>
										)}
								</strong>{" "}
								and confess Him as sovereign Lord{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 10:9-10")}
								>
									(Romans 10:9-10)
									{visibleVerse === "Romans 10:9-10" &&
										verseData["Romans 10:9-10"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 10:9-10"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Corinthians 12:3")}
								>
									(1 Corinthians 12:3)
									{visibleVerse === "1 Corinthians 12:3" &&
										verseData["1 Corinthians 12:3"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Corinthians 12:3"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Corinthians 4:5")}
								>
									(2 Corinthians 4:5)
									{visibleVerse === "2 Corinthians 4:5" &&
										verseData["2 Corinthians 4:5"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Corinthians 4:5"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Philippians 2:11")}
								>
									(Philippians 2:11)
									{visibleVerse === "Philippians 2:11" &&
										verseData["Philippians 2:11"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Philippians 2:11"]}
												</p>
											</div>
										)}
								</strong>{" "}
								. This righteousness is apart from any virtue or work of man{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 3:20")}
								>
									(Romans 3:20)
									{visibleVerse === "Romans 3:20" &&
										verseData["Romans 3:20"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 3:20"]}
												</p>
											</div>
										)}
								</strong>{" "}
								and involves the imputation of our sins to Christ{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Colossians 2:14")}
								>
									(Colossians 2:14)
									{visibleVerse === "Colossians 2:14" &&
										verseData["Colossians 2:14"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Colossians 2:14"]}
												</p>
											</div>
										)}
								</strong>{" "}
								and the imputation of Christ’s righteousness to us{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Corinthians 1:30")}
								>
									(1 Corinthians 1:30)
									{visibleVerse === "1 Corinthians 1:30" &&
										verseData["1 Corinthians 1:30"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Corinthians 1:30"]}
												</p>
											</div>
										)}
								</strong>
								. By this means God is enabled to “be just, and the justifier of
								the one who has faith in Jesus”{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 3:26")}
								>
									(Romans 3:26)
									{visibleVerse === "Romans 3:26" &&
										verseData["Romans 3:26"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 3:26"]}
												</p>
											</div>
										)}
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								D. Sanctification
							</h3>
							<p className="xl:text-lg 3xl:text-h4">
								1. We teach that every believer is sanctified{" "}
								<strong className="text-red-600">(set apart)</strong> unto God
								by the death of our Lord Jesus Christ, is therefore declared to
								be holy, and is therefore identified as a saint. This is
								positional and instantaneous and should not be confused with
								progressive sanctification. This sanctification has to do with
								the believer’s standing, not his present walk or condition{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Acts 20:32")}
								>
									(Acts 20:32)
									{visibleVerse === "Acts 20:32" && verseData["Acts 20:32"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["Acts 20:32"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Corinthians 1:2")}
								>
									(1 Corinthians 1:2)
									{visibleVerse === "1 Corinthians 1:2" &&
										verseData["1 Corinthians 1:2"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Corinthians 1:2"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Corinthians 6:11")}
								>
									(1 Corinthians 6:11)
									{visibleVerse === "1 Corinthians 6:11" &&
										verseData["1 Corinthians 6:11"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Corinthians 6:11"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Thessalonians 2:13")}
								>
									(2 Thessalonians 2:13)
									{visibleVerse === "2 Thessalonians 2:13" &&
										verseData["2 Thessalonians 2:13"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Thessalonians 2:13"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Hebrews 2:11")}
								>
									(Hebrews 2:11)
									{visibleVerse === "Hebrews 2:11" &&
										verseData["Hebrews 2:11"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Hebrews 2:11"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Hebrews 3:1")}
								>
									(Hebrews 3:1)
									{visibleVerse === "Hebrews 3:1" &&
										verseData["Hebrews 3:1"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Hebrews 3:1"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Hebrews 10:10")}
								>
									(Hebrews 10:10)
									{visibleVerse === "Hebrews 10:10" &&
										verseData["Hebrews 10:10"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Hebrews 10:10"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Hebrews 10:14")}
								>
									(Hebrews 10:14)
									{visibleVerse === "Hebrews 10:14" &&
										verseData["Hebrews 10:14"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Hebrews 10:14"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Hebrews 13:12")}
								>
									(Hebrews 13:12)
									{visibleVerse === "Hebrews 13:12" &&
										verseData["Hebrews 13:12"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Hebrews 13:12"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Peter 1:2")}
								>
									(1 Peter 1:2)
									{visibleVerse === "1 Peter 1:2" &&
										verseData["1 Peter 1:2"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Peter 1:2"]}
												</p>
											</div>
										)}
								</strong>{" "}
								.
							</p>
							<p className="xl:text-lg 3xl:text-h4">
								2. We teach that there is also, by the work of the Holy Spirit,
								a progressive sanctification by which the state of the believer
								is brought closer to the standing the believer positionally
								enjoys through justification. Through obedience to the Word of
								God and the empowering of the Holy Spirit, the believer is able
								to live a life of increasing holiness in conformity to the will
								of God, becoming more and more like our Lord Jesus Christ{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 17:17")}
								>
									(John 17:17)
									{visibleVerse === "John 17:17" && verseData["John 17:17"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["John 17:17"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("John 17:19")}
								>
									(John 17:19)
									{visibleVerse === "John 17:19" && verseData["John 17:19"] && (
										<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
											<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
												{verseData["John 17:19"]}
											</p>
										</div>
									)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Romans 6:1-22")}
								>
									(Romans 6:1-22)
									{visibleVerse === "Romans 6:1-22" &&
										verseData["Romans 6:1-22"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Romans 6:1-22"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("2 Corinthians 3:18")}
								>
									(2 Corinthians 3:18)
									{visibleVerse === "2 Corinthians 3:18" &&
										verseData["2 Corinthians 3:18"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["2 Corinthians 3:18"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<br />
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Thessalonians 4:3-4")}
								>
									(1 Thessalonians 4:3-4)
									{visibleVerse === "1 Thessalonians 4:3-4" &&
										verseData["1 Thessalonians 4:3-4"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Thessalonians 4:3-4"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Thessalonians 5:23")}
								>
									(1 Thessalonians 5:23)
									{visibleVerse === "1 Thessalonians 5:23" &&
										verseData["1 Thessalonians 5:23"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Thessalonians 5:23"]}
												</p>
											</div>
										)}
								</strong>
								.
							</p>
							<p className="xl:text-lg 3xl:text-h4">
								3. We teach that every saved person is involved in a daily
								conflict– the new creation in Christ doing battle against the
								flesh–but adequate provision is made for victory through the
								power of the indwelling Holy Spirit. The struggle nevertheless
								stays with the believer all through this earthly life and is
								never completely ended. All claims to the eradication of sin in
								this life are unscriptural. Eradication of sin is not possible,
								but the Holy Spirit does provide for victory over sin{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Galatians 5:16-25")}
								>
									(Galatians 5:16-25)
									{visibleVerse === "Galatians 5:16-25" &&
										verseData["Galatians 5:16-25"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Galatians 5:16-25"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Ephesians 4:22-24")}
								>
									(Ephesians 4:22-24)
									{visibleVerse === "Ephesians 4:22-24" &&
										verseData["Ephesians 4:22-24"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Ephesians 4:22-24"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Philippians 3:12")}
								>
									(Philippians 3:12)
									{visibleVerse === "Philippians 3:12" &&
										verseData["Philippians 3:12"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Philippians 3:12"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("Colossians 3:9-10")}
								>
									(Colossians 3:9-10)
									{visibleVerse === "Colossians 3:9-10" &&
										verseData["Colossians 3:9-10"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["Colossians 3:9-10"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 Peter 1:14-16")}
								>
									(1 Peter 1:14-16)
									{visibleVerse === "1 Peter 1:14-16" &&
										verseData["1 Peter 1:14-16"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 Peter 1:14-16"]}
												</p>
											</div>
										)}
								</strong>{" "}
								<strong
									className="text-red-600 cursor-pointer relative"
									onClick={() => toggleVerse("1 John 3:5-9")}
								>
									(1 John 3:5-9)
									{visibleVerse === "1 John 3:5-9" &&
										verseData["1 John 3:5-9"] && (
											<div className="max-h-28 xl:max-h-36 overflow-y-auto absolute left-0 top-full mt-1 p-2 w-64 bg-gray-100 dark:bg-black border border-gray-300 rounded shadow-lg z-10">
												<p className="text-sm xl:text-[16px] 3xl:text-lg text-navy dark:text-white">
													{verseData["1 John 3:5-9"]}
												</p>
											</div>
										)}
								</strong>{" "}
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								E. Security
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								1. We teach that all the redeemed, once saved, are kept by God’s
								power and are thus secure in Christ forever{" "}
								<strong className=" text-red-600">
									(John 5:24; 6:37-40; 10:27-30; Romans 5:9-10; 8:1, 31-39; 1
									Corinthians 1:4-8; Ephesians 4:30; Hebrews 7:25; 13:5; 1 Peter
									1:5; Jude 24)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								2. We teach that it is the privilege of believers to rejoice in
								the assurance of their salvation through the testimony of God’s
								Word, which, however, clearly forbids the use of Christian
								liberty as an occasion for sinful living and carnality{" "}
								<strong className=" text-red-600">
									(Romans 6:15-22; 13:13-14; Galatians 5:13, 25-26; Titus
									2:11-14)
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								F. Separation from Sin
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								1. We teach that separation from sin is clearly called for
								throughout the Old and New Testaments, and that the Scriptures
								clearly indicate that in the last days apostasy and worldliness
								shall increase{" "}
								<strong className=" text-red-600">
									(2 Corinthians 6:14-7:1; 2 Timothy 3:1-5)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								2. We teach that out of deep gratitude for the undeserved grace
								of God granted to us and because our glorious God is so worthy
								of our total consecration, all the saved should live in such a
								manner as to demonstrate our adoring love to God and so as not
								to bring reproach upon our Savior and Lord. We also teach that
								separation from all religious apostasy, and worldly and sinful
								practices is commanded of us by God{" "}
								<strong className=" text-red-600">
									(Romans 12:1-2; 1 Corinthians 5:9-13; 2 Corinthians 6:14-7:1;
									1 John 2:15-17; 2 John 9-11)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								3. We teach that believers should be separated unto our Lord
								Jesus Christ{" "}
								<strong className=" text-red-600">
									(2 Thessalonians 1:11-12; Hebrews 12:1-2)
								</strong>{" "}
								and affirm that the Christian life is a life of obedient
								righteousness demonstrated by a beatitude attitude{" "}
								<strong className=" text-red-600">(Matthew 5:2-12)</strong> and
								a continual pursuit of holiness{" "}
								<strong className=" text-red-600">
									(Romans 12:1-2; 2 Corinthians 7:1; Hebrews 12:14; Titus
									2:11-14; 1 John 3:1-10)
								</strong>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-10 bg-background px-6">
				<div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto 3xl:max-w-screen-2xl ">
					<h2 className="text-h3 lg:text-h2 3xl:text-h1 font-semibold text-navy dark:text-white mb-6 text-center">
						V. The Church
					</h2>

					<div className="space-y-4">
						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								1. General Overview
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that all who place their faith in Jesus Christ are
								immediately baptized by the Holy Spirit into one united
								spiritual body, the church{" "}
								<strong className=" text-red-600">
									(1 Corinthians 12:12-13)
								</strong>
								, the bride of Christ{" "}
								<strong className=" text-red-600">
									(2 Corinthians 11:2; Ephesians 5:23-32; Revelation 19:7-8)
								</strong>
								, of which Christ is the head{" "}
								<strong className=" text-red-600">
									(Ephesians 1:22; 4:15; Colossians 1:18)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that the formation of the church, the body of Christ,
								began on the day of Pentecost{" "}
								<strong className=" text-red-600">(Acts 2:1-21, 38-47)</strong>{" "}
								and will be completed at the coming of Christ for His own at the
								rapture{" "}
								<strong className=" text-red-600">
									(1 Corinthians 15:51-52; 1 Thessalonians 4:13-18)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that the church is thus a unique spiritual organism
								designed by Christ, made up of all born again believers in this
								present age{" "}
								<strong className=" text-red-600">(Ephesians 2:11-3:6)</strong>.
								The church is distinct from Israel{" "}
								<strong className=" text-red-600">(1 Corinthians 10:32)</strong>
								, a mystery not revealed until this age{" "}
								<strong className=" text-red-600">
									(Ephesians 3:1-6; 5:32)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that the establishment and continuity of local churches
								is clearly taught and defined in the New Testament Scriptures
								<strong className=" text-red-600">
									(Acts 14:23,27; 20:17,28; Galatians 1:2; Philippians 1:1; 1
									Thessalonians 1:1; 2 Thessalonians 1:1)
								</strong>{" "}
								and that the members of this one spiritual body are directed to
								associate themselves together in local assemblies{" "}
								<strong className=" text-red-600">
									(1 Corinthians 11:18-20; Hebrews 10:25)
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								A. The Church: Leaders
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that the one supreme authority for the church is Christ
								<strong className=" text-red-600">
									(1 Corinthians 11:3; Ephesians 1:22; Colossians 1:18)
								</strong>{" "}
								and that church leadership, gifts, order, discipline, and
								worship are all appointed through His sovereignty as found in
								the Scriptures. The biblically designated officers serving under
								Christ and over the assembly are elders{" "}
								<strong className=" text-red-600">
									(also called bishops, pastors and pastor-teachers– Acts 20:28;
									Ephesians 4:11)
								</strong>
								, and deacons, both of whom must meet biblical qualifications{" "}
								<strong className=" text-red-600">
									(1 Timothy 3:1-13; Titus 1:5-9; 1 Peter 5:1-5)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that these leaders lead or rule as servants of Christ
								<strong className=" text-red-600">
									(1 Timothy 5:17-22)
								</strong>{" "}
								and have His authority in directing the church. The congregation
								is to submit to their leadership
								<strong className=" text-red-600">(Hebrews 13:7,17)</strong>.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach the importance of discipleship{" "}
								<strong className=" text-red-600">
									(Matthew 28:19-20; 2 Timothy 2:2)
								</strong>
								, mutual accountability of all believers to each other{" "}
								<strong className=" text-red-600">(Matthew 18:5-14)</strong>, as
								well as the need for discipline of sinning members of the
								congregation in accord with the standards of Scripture{" "}
								<strong className=" text-red-600">
									(Matthew 18:15-22; Acts 5:1-11; 1 Corinthians 5:1-13; 2
									Thessalonians 3:6-15; 1 Timothy 1:19-20; Titus 1:10-16)
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								B. The Church: Autonomy
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach the autonomy of the local church, free from any
								external authority or control, with the right of self-government
								and freedom from the interference of any hierarchy of
								individuals or organizations{" "}
								<strong className=" text-red-600">(Titus 1:5)</strong>. We teach
								that it is scriptural for true churches to cooperate with each
								other for the presentation and propagation of the faith. Each
								local church, however, through its elders and their
								interpretation and application of Scripture, should be the sole
								judge of the measure and method of its cooperation. The elders
								should determine all other matters of membership, policy,
								discipline, benevolence, and government as well{" "}
								<strong className=" text-red-600">
									(Acts 15:19-31; 20:28; 1 Corinthians 5:4-7,13; 1 Peter 5:1-4)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that the purpose of the church is to glorify God
								<strong className=" text-red-600">(Ephesians 3:21)</strong> by
								building itself up in the faith{" "}
								<strong className=" text-red-600">(Ephesians 4:13-16)</strong>,
								by instruction of the Word{" "}
								<strong className=" text-red-600">
									(2 Timothy 2:2,15; 3:16-17)
								</strong>
								, by fellowship{" "}
								<strong className=" text-red-600">
									(Acts 2:47; 1 John 1:3)
								</strong>
								, by keeping the ordinances{" "}
								<strong className=" text-red-600">
									(Luke 22:19; Acts 2:38-42)
								</strong>{" "}
								and by advancing and communicating the gospel to the entire
								world{" "}
								<strong className=" text-red-600">
									(Matthew 28:19; Acts 1:8; 2:42)
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								C. The Church: Equipping
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach the calling of all saints to the work of the ministry
								<strong className=" text-red-600">
									(1 Corinthians 15:58; Ephesians 4:12; Revelation 22:12)
								</strong>
								. We teach the need of the church to cooperate with God as He
								accomplishes His purpose in the world. To that end, He gives the
								church spiritual gifts. First, He gives men chosen for the
								purpose of equipping the saints for the work of the ministry
								<strong className=" text-red-600">
									(Ephesians 4:7-12)
								</strong>{" "}
								and He also gives unique and special spiritual abilities to each
								member of the body of Christ{" "}
								<strong className=" text-red-600">
									(Romans 12:5-8; 1 Corinthians 12:4-31; 1 Peter 4:10-11)
								</strong>
								. At the moment of spiritual birth every believer receives such
								a gift or gifts
								<strong className=" text-red-600">
									(1 Corinthians 12:4-13)
								</strong>
								. These gifts are sovereignly bestowed and cannot be sought{" "}
								<strong className=" text-red-600">(1 Corinthians 12:11)</strong>
								. It is essential that every believer discovers, develops, and
								employs his spiritual gift or gifts for the edification of the
								body and the accomplishment of the work of Christ in the world{" "}
								<strong className=" text-red-600">
									(Romans 12:3-8; 1 Peter 4:10-11)
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								D. The Church: Signs and Wonders
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that there were two kinds of gifts given the early
								church: miraculous gifts of divine revelation and healing, given
								temporarily in the apostolic era for the purpose of confirming
								the authenticity of the Apostles’ message{" "}
								<strong className=" text-red-600">(Hebrews 2:3-4)</strong>; and
								ministering gifts, given to equip believers for edifying one
								another. With the New Testament revelation now complete,
								Scripture becomes the sole test of the authenticity of a man’s
								message, and confirming gifts of a miraculous nature are no
								longer necessary to validate a man or his message{" "}
								<strong className=" text-red-600">
									(1 Corinthians 13:8-12)
								</strong>
								. Miraculous gifts can even be counterfeited by Satan so as to
								deceive even believers{" "}
								<strong className=" text-red-600">
									(1 Corinthians 13:13–14:12; Revelation 13:13-14)
								</strong>
								. The only gifts in operation today are those non-revelatory
								equipping gifts given for edification
								<strong className=" text-red-600">(Romans 12:6-8)</strong>.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that the confirming gifts of the apostolic period–
								healing, speaking in tongues{" "}
								<strong className=" text-red-600">
									(unlearned foreign languages)
								</strong>
								, interpretation, and the working of miracles– gradually ceased
								as the New Testament Scriptures were completed and their
								authority became established{" "}
								<strong className=" text-red-600">
									(compare 1 Corinthians 13:8-10; 2 Corinthians 12:12; Hebrews
									2:3-4; Acts 19:11-12 with 1 Corinthians 12:1-31)
								</strong>
								until the eternal state{" "}
								<strong className=" text-red-600">
									(1 Corinthians 13:8-12)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that no one possesses the gift of healing today but
								that God does hear and answer the prayer of faith on the part of
								every believer and will answer in accordance with His own
								perfect will for the sick, suffering, and afflicted{" "}
								<strong className=" text-red-600">
									(Luke 18:1-6; John 5:7-9; 2 Corinthians 12:6-10; James
									5:13-16; 1 John 5:14-15)
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								E. The Church: Ordinances
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that two ordinances have been committed to the local
								church: baptism and the Lord’s Supper{" "}
								<strong className=" text-red-600">(Acts 2:38-42)</strong>.
								Christian baptism by water preferably by immersion{" "}
								<strong className=" text-red-600">(Acts 8:36-39)</strong> is the
								solemn and beautiful testimony of a believer showing forth his
								faith in the crucified, buried, and risen Savior, and his union
								with Him in death to sin and resurrection to a new life{" "}
								<strong className=" text-red-600">(Romans 6:1-11)</strong>. It
								is also a sign of fellowship and identification with the visible
								body of Christ{" "}
								<strong className=" text-red-600">(Acts 2:41-42)</strong>.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that the Lord’s Supper is the commemoration and
								proclamation of His death until He comes, and should be always
								preceded by solemn self-examination{" "}
								<strong className=" text-red-600">
									(1 Corinthians 11:28-32)
								</strong>
								. We also teach that whereas the elements of communion are only
								representative of the flesh and blood of Christ, the Lord’s
								Supper is nevertheless an actual communion with the risen
								Christ, who is present in a unique way, fellowshipping with His
								people{" "}
								<strong className=" text-red-600">(1 Corinthians 10:16)</strong>
								.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-10 bg-background px-6">
				<div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto 3xl:max-w-screen-2xl ">
					<h2 className="text-h3 lg:text-h2 3xl:text-h1 font-semibold text-navy dark:text-white mb-6 text-center">
						VI. The Spiritual Realm
					</h2>

					<div className="space-y-4">
						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								A. Angels
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that angels are created beings and are therefore not to
								be worshipped. Although they are a higher order of creation than
								man, they are created to serve God and to worship Him{" "}
								<strong className=" text-red-600">
									(Luke 2:9-14; Hebrews 1:6-7,14; 2:6-7; Revelation 5:11-14;
									19:10; 22:9)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that Satan is a created angel and the author of sin. He
								incurred the judgment of God by rebelling against his Creator,
								by taking numerous angels with Him in his fall{" "}
								<strong className=" text-red-600">
									(Job 1:6-7; Isaiah 14:12-17; Ezekiel 28:11-19)
								</strong>
								, and by introducing sin into the human race by his temptation
								of Eve{" "}
								<strong className=" text-red-600">(Genesis 3:1-15)</strong>. We
								teach that Satan is the open and declared enemy of God and man
								<strong className=" text-red-600">
									(Isaiah 14:13-14; Matthew 4:1-11; Revelation 12:9-10)
								</strong>
								, the prince of this world who has been defeated through the
								death and resurrection of Jesus Christ{" "}
								<strong className=" text-red-600">(Romans 16:20)</strong> and
								that he shall be eternally punished in the lake of fire{" "}
								<strong className=" text-red-600">
									(Isaiah 14:12-17; Ezekiel 28:11-19; Matthew 25:41; Revelation
									20:10)
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								B. Death
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that physical death involves no loss of our immaterial
								consciousness{" "}
								<strong className=" text-red-600">(Revelation 6:9-11)</strong>,
								that the soul of the redeemed passes immediately into the
								presence of Christ{" "}
								<strong className=" text-red-600">
									(Luke 23:43; Philippians 1:23; 2 Corinthians 5:8)
								</strong>
								, that there is a separation of soul and body{" "}
								<strong className=" text-red-600">(Philippians 1:21-24)</strong>{" "}
								and that such separation will continue until the first
								resurrection{" "}
								<strong className=" text-red-600">(Revelation 20:4-6)</strong>,
								when our spirit, soul, and body will be reunited to be glorified
								forever with our Lord{" "}
								<strong className=" text-red-600">
									(Philippians 3:21; 1 Corinthians 15:35-44, 50-54; 1
									Thessalonians 4:16-17)
								</strong>
								. Until that time, the souls of the redeemed in Christ remain in
								joyful fellowship with our Lord Jesus Christ{" "}
								<strong className=" text-red-600">(2 Corinthians 5:8)</strong>.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach the bodily resurrection of all men, the saved to
								eternal life{" "}
								<strong className=" text-red-600">
									(John 6:39; Romans 8:10-11, 19-23; 2 Corinthians 4:14)
								</strong>{" "}
								and the unsaved to judgment and everlasting punishment
								<strong className=" text-red-600">
									(Daniel 12:2; John 5:29; Revelation 20:13-15)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that the souls of the unsaved at death are kept under
								punishment in hell until the second resurrection{" "}
								<strong className=" text-red-600">
									(Luke 16:19-26; Revelation 20:13-15)
								</strong>
								, when the soul and a resurrection body will be united{" "}
								<strong className=" text-red-600">(John 5:28-29)</strong>. They
								shall then appear at the Great White Throne judgment{" "}
								<strong className=" text-red-600">(Revelation 20:11-15)</strong>{" "}
								and shall be cast into the lake of fire{" "}
								<strong className=" text-red-600">(Matthew 25:41-46)</strong>,
								cut off from the life of God forever{" "}
								<strong className=" text-red-600">
									(Daniel 12:2; Matthew 25:41-46; 2 Thessalonians 1:7-9)
								</strong>
								.
							</p>
						</div>
					</div>

					<h2 className="text-h3 lg:text-h2 3xl:text-h1 font-semibold text-navy dark:text-white mb-6 text-center pt-10">
						VII. Future Things in Scripture
					</h2>

					<div className="space-y-4">
						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								A. The Rapture of the Church
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach the personal, bodily return of our Lord Jesus Christ{" "}
								<strong className=" text-red-600">
									(1 Thessalonians 4:16; Titus 2:13)
								</strong>{" "}
								to translate His church from this earth{" "}
								<strong className=" text-red-600">
									(John 14:1-3; 1 Corinthians 15:51-53; 1 Thessalonians
									4:15-5:11)
								</strong>{" "}
								and to reward believers according to their works{" "}
								<strong className=" text-red-600">
									(1 Corinthians 3:11-15; 2 Corinthians 5:10)
								</strong>{" "}
								with sufficient time elapsing between this event and His
								glorious return with His church to allow for the judgment of
								believers’ works.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								B. The Tribulation Period
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that immediately following the removal of the church
								from the earth{" "}
								<strong className=" text-red-600">
									(John 14:1-3; 1 Thessalonians 4:13-18)
								</strong>{" "}
								the righteous judgments of God will be poured out upon an
								unbelieving world{" "}
								<strong className=" text-red-600">
									(Jeremiah 30:7; Daniel 9:27; 12:1; 2 Thessalonians 2:7-12;
									Revelation 16)
								</strong>
								, and that these judgments will be climaxed by the return of
								Christ in glory to the earth
								<strong className=" text-red-600">
									(Matthew 24:27-31; 25:31-46; 2 Thessalonians 2:7-12)
								</strong>
								. At that time the Old Testament and tribulation saints will be
								raised and the living will be judged{" "}
								<strong className=" text-red-600">
									(Daniel 12:2-3; Revelation 20:4-6)
								</strong>
								. This period includes the seventieth week of Daniel’s prophecy
								<strong className=" text-red-600">
									(Daniel 9:24-27; Matthew 24:15-31; 25:31-46)
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								C. The Second Coming of Christ & His Millennial Reign
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that after the tribulation period, Christ will come to
								earth to occupy the throne of David{" "}
								<strong className=" text-red-600">
									(Matthew 25:31; Luke 1:31-33; Acts 1:10-11; 2:29-30)
								</strong>{" "}
								and establish His Messianic kingdom for a thousand years on the
								earth{" "}
								<strong className=" text-red-600">(Revelation 20:1-7)</strong>.
								During this time the resurrected saints will reign with Him over
								Israel and all the nations of the earth{" "}
								<strong className=" text-red-600">
									(Ezekiel 37:21-28; Daniel 7:17-22; Revelation 19:11-16)
								</strong>
								. This reign will be preceded by the overthrow of the antichrist
								and the false prophet, and the removal of Satan from the world{" "}
								<strong className=" text-red-600">
									(Daniel 7:17-27; Revelation 20:1-7)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that the kingdom itself will be the fulfillment of
								God’s promise to Israel{" "}
								<strong className=" text-red-600">
									(Isaiah 65:17-25; Ezekiel 37:21-28; Zechariah 8:1-17)
								</strong>{" "}
								to restore them to the land which they forfeited through their
								disobedience{" "}
								<strong className=" text-red-600">
									(Deuteronomy 28:15-68)
								</strong>
								. The result of their disobedience was that Israel was
								temporarily set aside{" "}
								<strong className=" text-red-600">
									(Matthew 21:43; Romans 11:1-26)
								</strong>{" "}
								but will again be awakened through repentance to enter into the
								land of blessing{" "}
								<strong className=" text-red-600">
									(Jeremiah 31:31-34; Ezekiel 36:22-32; Romans 11:25-29)
								</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that this time of our Lord’s reign will be
								characterized by harmony, justice, peace, righteousness, and
								long life{" "}
								<strong className=" text-red-600">
									(Isaiah 11; 65:17-25; Ezekiel 36:33-38)
								</strong>
								, and will be brought to an end with the release of Satan{" "}
								<strong className=" text-red-600">(Revelation 20:7)</strong>.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								D. The Judgment of the Lost and Hell
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that following the release of Satan after the thousand
								year reign of Christ{" "}
								<strong className=" text-red-600">(Revelation 20:7)</strong>,
								Satan will deceive the nations of the earth and gather them to
								battle against the saints and the beloved city. At that time
								Satan and his army will be devoured by fire from heaven{" "}
								<strong className=" text-red-600">(Revelation 20:9)</strong>.
								Following this, Satan will be thrown into the lake of fire and
								brimstone{" "}
								<strong className=" text-red-600">
									(Matthew 25:41; Revelation 20:10)
								</strong>{" "}
								whereupon Christ, who is the judge of all men{" "}
								<strong className=" text-red-600">(John 5:22)</strong>, will
								resurrect and judge the great and small at the Great White
								Throne judgment
								<strong className=" text-red-600">(Revelation 20:11-13)</strong>
								.
							</p>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that this resurrection of the unsaved dead to judgment
								will be a physical resurrection, whereupon receiving their
								judgment{" "}
								<strong className=" text-red-600">(Romans 14:10-13)</strong>,
								they will be committed to an eternal conscious punishment in the
								lake of fire{" "}
								<strong className=" text-red-600">
									(Matthew 25:41; Revelation 20:14-15)
								</strong>
								.
							</p>
						</div>

						<div>
							<h3 className="text-lg xl:text-h3 3xl:text-h2 font-semibold text-navy dark:text-white mb-2">
								E. Eternity
							</h3>
							<p className=" xl:text-lg 3xl:text-h4">
								We teach that after the closing of the millennium, the temporary
								release of Satan, and the judgment of unbelievers{" "}
								<strong className=" text-red-600">
									(2 Thessalonians 1:9; Revelation 20:7-15)
								</strong>
								, the saved will enter the eternal state of glory with God,
								after which the elements of this earth are to be dissolved{" "}
								<strong className=" text-red-600">(2 Peter 3:10)</strong> and
								replaced with a new earth wherein only righteousness dwells{" "}
								<strong className=" text-red-600">
									(Ephesians 5:5; Revelation 20:15; 21-22)
								</strong>
								. Following this, the heavenly city will come down out of heaven{" "}
								<strong className=" text-red-600">(Revelation 21:2)</strong> and
								will be the dwelling place of the saints, where they will enjoy
								forever fellowship with God and one another{" "}
								<strong className=" text-red-600">
									(John 17:3; Revelation 21,22)
								</strong>
								. Our Lord Jesus Christ, having fulfilled His redemptive
								mission, will then deliver up the kingdom to God the Father{" "}
								<strong className=" text-red-600">
									(1 Corinthians 15:24-28)
								</strong>{" "}
								that in all spheres the triune God may reign forever and ever{" "}
								<strong className=" text-red-600">(1 Corinthians 15:28)</strong>
								.
							</p>
						</div>
					</div>
				</div>
				{/* Download Button */}
				<div className=" mt-10 xl:hidden">
					<a
						href="/statements/Statement-of-Faith.pdf"
						download
						className=" p-2 bg-navy text-white rounded-lg hover:bg-yellow hover:text-black"
					>
						Download Statement of Faith (PDF)
					</a>
				</div>
			</section>
		</div>
	);
};

export default page;
