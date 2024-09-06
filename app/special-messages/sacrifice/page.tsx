import React from "react";

const page = () => {
	return (
		<div>
			<section className="h-screen lg:h-full mt-20 md:mt-28 md:max-w-screen-md xl:max-w-screen-lg mx-auto p-6 lg:p-0">
				<h1 className=" text-h3 md:text-h2 lg:text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">9 Apr 23</span> Youth Camp - Living
					Sacrifice
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.youtube.com/embed/6DAPlKFHBSo?si=6Ze28ZUQq0f7WFNP"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[250px] md:h-[500px] lg:h-[650px]"
					></iframe>
				</div>
				<div>
					<p className="text-lg lg:text-h4 text-navy text-[14px] md:text-h4 font-medium mb-10 mt-6">
						“Whereas the heathen are prone to sacrifice in order to obtain
						mercy, biblical faith teaches that the divine mercy provides the
						basis of sacrifice as the fitting response.” (Harrison)
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
