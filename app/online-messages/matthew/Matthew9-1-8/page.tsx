import React from "react";

const page = () => {
	return (
		<div>
			<section className=" h-screen lg:h-full mt-28 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto p-6 md:p-0">
				<h1 className=" text-h3 md:text-h2 lg:text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">5 May 23</span> Matthew 9: 1-8
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.youtube.com/embed/t75mEDYPYMU?si=a41PYFlClBf1Py0n"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[250px] md:h-[370px] lg:h-[450px] xl:h-[600px]"
					></iframe>
				</div>
				<div>
					<p className="text-lg lg:text-h4 text-navy text-[14px] md:text-h4 font-medium mb-10 md:mt-6 mt-6 ">
						“A man gives proof of his conversion from sin to God who imitates
						this paralytic person. He who does not rise and stand upright, but
						either continues grovelling on the earth, or falls back as soon as
						he is got up, is not yet cured of his spiritual palsy.” (Clarke)
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
