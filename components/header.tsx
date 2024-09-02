// components/Header.tsx
import Link from "next/link";
// border-b border-b-foreground/10
export const Header = () => {
	return (
		<nav className="w-full flex justify-center h-16">
			<div className="w-full flex justify-between items-center p-3 px-5 text-sm">
				<ul className="flex space-x-6">
					<li>
						<Link href="/about" className="hover:underline">
							About
						</Link>
					</li>
					<li>
						<Link href="/give" className="hover:underline">
							Give
						</Link>
					</li>
					<li>
						<Link href="/watch" className="hover:underline">
							Watch
						</Link>
					</li>
					<li>
						<Link href="/connect" className="hover:underline">
							Connect
						</Link>
					</li>
					<li>
						<Link href="/missions" className="hover:underline">
							Missions
						</Link>
					</li>
					<li>
						<Link href="/intercedeyouth" className="hover:underline">
							IntercedeYouth
						</Link>
					</li>
					<li>
						<Link href="/events" className="hover:underline">
							Events
						</Link>
					</li>
					<li>
						<Link href="/resources" className="hover:underline">
							Resources
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
