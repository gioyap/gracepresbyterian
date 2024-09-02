import { Header } from "@/components/header";
import Link from "next/link";

export default async function About() {
	return (
		<div className="flex-1 w-full flex flex-col gap-12">
			<section
				className="relative w-screen h-screen overflow-hidden"
				style={{
					backgroundImage: "url('/images/member.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-30"></div>
				{/* Hero Content */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-5">
					<h1 className=" font-bold text-white text-title">Who we are</h1>
				</div>
			</section>
			<section className=" text-navy font-semibold text-h3">
				<div className=" max-w-screen-lg mx-auto">
					<p>
						We are a movement of men and women who have encountered God and
						committed our lives to the Lord, focused on making an impact through
						the work of the Holy Spirit in transforming lives, families,
						communities and nations, for the glory of God!
					</p>
				</div>
			</section>
			<section className="flex items-center justify-center pb-10 bg-background">
				<div className="max-w-screen-lg mx-auto text-center text-navy">
					<h1 className="text-h1 mb-4 font-bold">Our Mission</h1>
					<p className="mb-4 text-h3">
						To honor God and make Christ-committed followers who will make
						Christ-committed followers.
					</p>
					<p className="mb-4 font-medium text-h3">
						“Go and make disciples of all nations, baptizing them in the name of
						the Father and of the Son and of the Holy Spirit, and teaching them
						to obey everything I have commanded you.”
					</p>
					<p className="italic font-bold text-h3">Matthew 28:19-20</p>
				</div>
			</section>
			<section className="flex items-center justify-center pb-10 bg-background">
				<div className="max-w-screen-lg mx-auto text-center text-navy">
					<h1 className="text-h1 mb-4 font-bold">Our Vision</h1>
					<p className="mb-4 font-medium text-h3">
						Our vision is to see a movement of millions of committed followers
						of the lord jesus christ meeting in small groups and transforming
						lives, families, communities and nations, for the glory of god.
					</p>
				</div>
			</section>

			<section className="pb-10 bg-background">
				<div className="max-w-screen-lg mx-auto px-4 text-navy">
					<h1 className="text-h1 font-bold text-navy mb-6 text-center">
						Our Core Values
					</h1>
					<p className="mb-6 text-center text-h3">
						Every church has its own set of values. Part of what unites CGPC is
						our common set of values that help guide us with our priorities in
						our walk with God.
					</p>

					<div className="space-y-6">
						<div>
							<h2 className="text-h3 font-semibold text-navy mb-2">
								Love God, Love Others
							</h2>
							<ul className="list-disc list-inside ml-4 text-h4">
								<li>
									Consistent personal devotions, prayer time, and personal study
									of God’s word
								</li>
								<li>
									Love displayed even for people who are difficult to love; seek
									to maintain good relationships
								</li>
								<li>No critical spirit or participation in gossip</li>
								<li>
									Private life is in order (free from immorality and
									pornography, computer games, and other addictions)
								</li>
								<li>
									Consistent sharing of the gospel and discipleship of others
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-h3 font-semibold text-navy mb-2">
								Obey God’s Word and Authorities
							</h2>
							<ul className="list-disc list-inside ml-4 text-h4">
								<li>Application of God’s word in everyday life</li>
								<li>Decisions made and priorities set based on Scripture</li>
								<li>
									Submission to God-given authorities with respect and a
									positive attitude
								</li>
								<li>
									Display of consistent humility; willing acceptance of
									criticism, correction, and suggestions
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-h3 font-semibold text-navy mb-2">
								Volunteer
							</h2>
							<ul className="list-disc list-inside ml-4 text-h4">
								<li>Use of God-given gifts and talents to serve others</li>
								<li>
									Encouraging (or creation of opportunities for) others to serve
								</li>
								<li>
									Consistent leadership of (and attendance in) a small group
								</li>
								<li>Serving others even when inconvenient</li>
								<li>Tithes / offerings consistently given</li>
								<li>
									Good stewardship of God’s resources (time, talents, and
									treasure)
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-h3 font-semibold text-navy mb-2">
								Engage the Family
							</h2>
							<ul className="list-disc list-inside ml-4 text-h4">
								<li>
									Quality time spent and good relationships maintained with
									wife, children, (parents and siblings, if single)
								</li>
								<li>
									Temper kept under control — no physical abuse, no verbal abuse
									(shouting, hurtful words)
								</li>
								<li>Set a Christ-like example for family members</li>
								<li>Family members walk with and serve the Lord</li>
								<li>
									Intentional discipleship of family members by having regular
									family devotions
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="flex items-center justify-center pb-10">
				<div className="max-w-screen-lg mx-auto">
					<Link
						href="/about/statement"
						className=" font-bold text-h1 text-navy"
					>
						Statement of Faith
					</Link>
				</div>
			</section>
		</div>
	);
}
