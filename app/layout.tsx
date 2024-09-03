import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import { Header } from "@/components/header";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Grace Presbyterian",
	description: "Go and make disciple",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={GeistSans.className} suppressHydrationWarning>
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="bg-background text-foreground m-0 p-0">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="min-h-screen flex flex-col items-center p-0 font-playfair">
						<div className="flex-1 w-full flex flex-col items-center p-0">
							{/* Header */}
							<nav className="absolute top-0 w-full flex justify-between items-center p-3 px-5 h-16 z-20">
								<div className="w-full max-w-5xl">
									<Header />
								</div>
							</nav>
							{/* Main Body */}
							<div className="flex w-full flex-col p-0">{children}</div>
							<footer className="w-full flex items-center justify-center border-t mx-auto text-center sm:text-xs gap-8 py-5 p-0 ">
								<p>
									<a
										href="https://www.facebook.com/presbyterian.church.984"
										target="_blank"
										className="font-bold hover:underline"
										rel="noreferrer"
									>
										Grace Presbyterian Church
									</a>{" "}
									2024
								</p>
								<p>
									<a href="/terms" className="font-bold hover:underline">
										Terms and Condition
									</a>
								</p>
								<p>
									<a href="/policy" className="font-bold hover:underline">
										Private Policy
									</a>
								</p>
								<ThemeSwitcher />
							</footer>
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
