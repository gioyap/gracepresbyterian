import React from "react";

const page = () => {
	return (
		<div>
			<section className=" h-screen lg:h-full mt-28 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto p-6 md:p-0">
				<h1 className=" text-h3 md:text-h2 lg:text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">18 Mar 23</span> Matthew 4: 1-11(B)
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.youtube.com/embed/iKowfNviddE?si=dRflEiBvI8I7_gDW"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[250px] md:h-[370px] lg:h-[450px] xl:h-[600px]"
					></iframe>
				</div>
				<div>
					<p className="text-lg lg:text-h4 text-navy text-[14px] md:text-h4 font-medium mb-10 md:mt-6 mt-6 ">
						“The focus is again on his relationship to God. As Son of God, he
						could surely claim with absolute confidence the physical protection
						which God promises in Psalm 91:11-12…The Son of God can live only in
						a relationship of trust which needs no test.” (France)
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
