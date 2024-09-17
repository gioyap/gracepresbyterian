import React from "react";

const page = () => {
	return (
		<div>
			<section className=" h-screen lg:h-full mt-28 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto p-6 md:p-0">
				<h1 className=" text-h3 md:text-h2 lg:text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">25 Feb 23</span> Matthew 4: 1-11(A)
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.youtube.com/embed/r_UMjm4SVqc?si=h7KZ8d5eQVg_PAZ9"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[250px] md:h-[370px] lg:h-[450px] xl:h-[600px]"
					></iframe>
				</div>
				<div>
					<p className="text-lg lg:text-h4 text-navy text-[14px] md:text-h4 font-medium mb-10 md:mt-6 mt-6 ">
						This wasn’t a temptation to miraculously create great riches or
						luxuries, only bread. The Bible has many accounts of miraculous
						provision, some at the hands of Jesus. Yet Jesus would not command
						that these stones become bread, especially at the instigation of
						Satan.
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
