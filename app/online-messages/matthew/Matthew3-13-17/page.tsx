import React from "react";

const page = () => {
	return (
		<div>
			<section className=" h-screen lg:h-full mt-28 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto p-6 md:p-0">
				<h1 className=" text-h3 md:text-h2 lg:text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">8 Jan 23</span> Matthew 3: 13-17
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.youtube.com/embed/tNVTcpbhOK4?si=eLkOovB-QAAxjEGW"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[250px] md:h-[370px] lg:h-[450px] xl:h-[600px]"
					></iframe>
				</div>
				<div>
					<p className="text-lg lg:text-h4 text-navy text-[14px] md:text-h4 font-medium mb-10 md:mt-6 mt-6 ">
						There is no suggestion that Jesus became the Son of God with this
						experience. “We need not assume that Jesus had no previous
						experience of the Spirit; the vision symbolizes his commissioning
						for his Messianic work, not a new spiritual status.” (France)
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
