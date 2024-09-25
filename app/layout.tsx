import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CookieConsent } from "@/components/CookiConsent";

const defaultUrl = process.env.NEXT_PUBLIC_BASE_URL
	? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Grace Presbyterian",
	description: "Go and make disciples",
	openGraph: {
		title: "Grace Presbyterian Church",
		description: "Join us in our mission to spread the Word of God.",
		url: defaultUrl,
		type: "website",
		images: [
			{
				url: `${defaultUrl}/images/member.jpg`,
				width: 1200,
				height: 630,
				alt: "Grace Presbyterian Church",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Grace Presbyterian Church",
		description: "Join us in our mission to spread the Word of God.",
		images: [`${defaultUrl}/images/temple.jpg`],
	},
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
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/images/cross.png" />
			</head>
			<body className="bg-background text-foreground m-0 p-0">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="min-h-screen flex flex-col items-center p-0 font-roboto">
						<div className="flex-1 w-full flex flex-col items-center p-0">
							{/* Header */}
							<nav className="absolute top-0 w-full flex justify-between items-center p-3 px-5 h-16 z-20">
								<div className="w-full max-w-5xl">
									<Header />
								</div>
							</nav>
							{/* Main Body */}
							<div className="flex w-full flex-col p-0">{children}</div>
							<footer className="text-navy dark:text-white w-full flex items-center justify-center border-t mx-auto text-center text-[8px] md:text-[12px] gap-x-6 md:gap-x-10 py-2 whitespace-nowrap ">
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
									<a
										href="/terms-and-conditions"
										className="font-bold hover:underline"
									>
										Terms and Condition
									</a>
								</p>
								<p>
									<a
										href="/privacy-policy"
										className="font-bold hover:underline"
									>
										Private Policy
									</a>
								</p>
								<ThemeSwitcher />
							</footer>
						</div>
					</main>
				</ThemeProvider>
				<CookieConsent />
			</body>
		</html>
	);
}
