import React from "react";

const page = () => {
	return (
		<div>
			<section className=" mt-28 max-w-screen-lg mx-auto">
				<h1 className=" text-h2 md:text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">10 Jul 22</span> John 20:19-31
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpresbyterian.church.984%2Fvideos%2F1093084787951778%2F&show_text=false&width=560&t=0"
						title="Mat. 13:31-44"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[250px] md:h-[600px]"
					></iframe>
				</div>
				<div className="">
					<p className=" text-navy md:text-h4 font-medium mb-10">
						“Whosoever will be saved, before all things it is necessary that he
						be able to unite with Thomas heartily in this creed, ‘My Lord and my
						God.’ I do not go in for all the minute distinctions of the
						Athanasian Creed, but I have no doubt that it was absolutely needful
						at the time it was written, and that it materially helped to check
						the evasions and tricks of the Arians. This short creed of Thomas I
						like much better, for it is brief, pithy, full, sententious, and it
						avoids those matters of detail which are the quicksands of faith.”
						(Spurgeon)
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
