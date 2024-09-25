"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

export const CookieConsent = () => {
	const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

	useEffect(() => {
		const savedPreference = localStorage.getItem("cookiesAccepted");
		if (savedPreference !== null) {
			setCookiesAccepted(JSON.parse(savedPreference));
		}
	}, []);

	const handleAccept = () => {
		setCookiesAccepted(true);
		localStorage.setItem("cookiesAccepted", "true");
	};

	const handleDecline = () => {
		setCookiesAccepted(false);
		localStorage.setItem("cookiesAccepted", "false");
	};

	return (
		<>
			{/* Cookie Consent Popup */}
			{cookiesAccepted === null && (
				<div className="fixed bottom-0 w-full bg-navy-deep text-white p-4 text-center flex flex-col items-center gap-4">
					<div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 3xl:max-w-screen-2xl mx-auto">
						<p className="text-sm mb-4">
							We use cookies to improve your experience. By continuing to use
							this site, you agree with our Privacy Policy. For more information
							about how we use cookies and your submitted information,{" "}
							<a
								href="/privacy-policy"
								className="underline text-blue-300 hover:text-blue-500"
							>
								See our Privacy Policy
							</a>
							.
						</p>
						<div className="flex justify-center gap-4">
							<button
								className="bg-yellow text-navy px-4 py-2 rounded-full font-semibold hover:bg-navy-light hover:text-white"
								onClick={handleAccept}
							>
								Yes, I Accept
							</button>
							<button
								className="bg-yellow text-navy px-4 py-2 rounded-full font-semibold hover:bg-navy-light hover:text-white"
								onClick={handleDecline}
							>
								No, I Decline
							</button>
						</div>
					</div>
				</div>
			)}
			{/* Conditionally load Tawk.to script based on cookie consent */}
			{cookiesAccepted && (
				<Script
					src="https://embed.tawk.to/66ea200383ab531891e8330f/1i818q3uu"
					strategy="afterInteractive"
					crossOrigin="anonymous"
				/>
			)}
		</>
	);
};
