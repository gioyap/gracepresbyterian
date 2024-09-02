import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";

import "./globals.css";

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
			<body className="bg-background text-foreground m-0 p-0">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="min-h-screen flex flex-col items-center p-0">
						<div className="flex-1 w-full flex flex-col items-center p-0">
							<div className="flex w-full flex-col p-0">{children}</div>
							<footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16 p-0">
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
								<ThemeSwitcher />
							</footer>
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
