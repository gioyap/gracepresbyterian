import React from "react";

const PrivacyPolicy = () => {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative w-screen h-[200px] md:h-[300px] flex items-center justify-end">
				<div className="absolute inset-0 bg-navy"></div>
				<div className="text-white text-[28px] md:text-h1 xl:text-[4rem] font-bold whitespace-nowrap mr-6 md:mr-20 absolute">
					<h1>Privacy Policy</h1>
				</div>
			</section>

			{/* Privacy Policy Content */}
			<section className="px-6 md:px-20 py-10 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto">
				<div className="text-navy text-[16px] md:text-h4">
					<h2 className="text-h3 md:text-h2 mb-2 xl:text-h1 font-semibold xl:mb-6">
						Grace Presbyterian Privacy Policy
					</h2>

					<p className="mb-4 xl:mb-8">
						Thank you for visiting the Grace Website. We value your privacy and
						are committed to protecting any personal information you share with
						us. This Privacy Policy outlines the types of data we collect and
						how we use, store, and protect that data.
					</p>

					<h3 className="text-h4 md:text-h3 xl:text-h2 font-semibold mb-2 xl:mb-4">
						1. Data Collection
					</h3>
					<p className="mb-4 xl:mb-8">
						Currently, the Grace Website does not collect personal data directly
						from users browsing or accessing resources on the site. Visitors are
						free to explore all available resources, including videos, articles,
						and downloadable content, without providing any personal
						information.
					</p>

					<h3 className="text-h4 md:text-h3 xl:text-h2 font-semibold mb-2 xl:mb-4">
						2. Donorbox - Donation Information
					</h3>
					<p className="mb-4">
						For donations, we use a third-party service called{" "}
						<strong>Donorbox</strong>. When you make a donation through
						Donorbox, the following personal information may be collected:
					</p>
					<ul className="list-disc list-inside mb-4">
						<li>Name</li>
						<li>Email address</li>
						<li>Payment information (credit card, bank details, etc.)</li>
					</ul>
					<p className="mb-4 xl:mb-8">
						Please refer to Donorbox’s{" "}
						<a
							href="https://donorbox.org/privacy"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 underline"
						>
							Privacy Policy
						</a>{" "}
						for details on how they handle and secure your data. Grace Website
						does not have access to your payment information, and we rely on
						Donorbox to process donations securely.
					</p>

					<h3 className="text-h4 md:text-h3 xl:text-h2 font-semibold mb-2 xl:mb-4">
						3. Tawk.to - Chatbox Service
					</h3>
					<p className="mb-4 xl:mb-8">
						We use a third-party service, <strong>Tawk.to</strong>, to provide a
						live chat feature for communicating with website visitors. Tawk.to
						may collect personal information such as your name, email address,
						and the contents of your chat messages. This information is used to
						respond to your inquiries and improve our communication services.
					</p>
					<p className="mb-4 xl:mb-8">
						Please refer to Tawk.to’s{" "}
						<a
							href="https://www.tawk.to/privacy-policy/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 underline"
						>
							Privacy Policy
						</a>{" "}
						for more information on how they handle your data. Grace Website
						does not store or access chat data outside of the Tawk.to service.
					</p>

					<h3 className="text-h4 md:text-h3 xl:text-h2 font-semibold mb-2 xl:mb-4">
						4. How We Use Your Information
					</h3>
					<p className="mb-4">
						The personal data we receive through Donorbox and Tawk.to may be
						used to:
					</p>
					<ul className="list-disc list-inside mb-4 xl:mb-8">
						<li>Send donation receipts or confirmations</li>
						<li>
							Respond to any inquiries or communication regarding your donations
							or chat messages
						</li>
						<li>Maintain records for accounting and regulatory purposes</li>
					</ul>

					<h3 className="text-h4 md:text-h3 xl:text-h2 font-semibold mb-2 xl:mb-4">
						5. Data Sharing
					</h3>
					<p className="mb-4 xl:mb-8">
						We do not sell or share your personal data with third parties,
						except as required by law or for regulatory purposes. The Grace
						Website only shares information with Donorbox and Tawk.to as needed
						to process donations or manage chat interactions.
					</p>

					<h3 className="text-h4 md:text-h3 xl:text-h2 font-semibold mb-2 xl:mb-4">
						6. Data Security
					</h3>
					<p className="mb-4 xl:mb-8">
						We take appropriate measures to protect your personal data from
						unauthorized access, alteration, disclosure, or destruction.
						However, please note that no method of transmission over the
						Internet or method of electronic storage is 100% secure. While we
						strive to protect your personal information, we cannot guarantee its
						complete security.
					</p>

					<h3 className="text-h4 md:text-h3 xl:text-h2 font-semibold mb-2 xl:mb-4">
						7. Links to Third-Party Websites
					</h3>
					<p className="mb-4 xl:mb-8">
						The Grace Website may contain links to third-party websites, such as
						Donorbox and Tawk.to. Please note that we are not responsible for
						the privacy practices of these external sites. We encourage you to
						review their privacy policies to understand how they handle your
						personal information.
					</p>

					<h3 className="text-h4 md:text-h3 xl:text-h2 font-semibold mb-2 xl:mb-4">
						8. Changes to This Privacy Policy
					</h3>
					<p className="mb-4 xl:mb-8">
						We may update this Privacy Policy from time to time to reflect
						changes in our practices or for legal reasons. Any updates will be
						posted on this page.
					</p>

					<h3 className="text-h4 md:text-h3 xl:text-h2 font-semibold mb-2 xl:mb-4">
						9. Contact Us
					</h3>
					<p className="mb-4 xl:mb-8">
						If you have any questions or concerns about this Privacy Policy,
						please contact us at [+63 9327134450].
					</p>
					<p>
						If you feel that we are in breach of this privacy statement, you may
						contact us by any of the above methods.
					</p>
				</div>
			</section>
		</div>
	);
};

export default PrivacyPolicy;
