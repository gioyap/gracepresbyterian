import React from "react";

const page = () => {
	return (
		<div>
			<section className="h-screen lg:h-full mt-28 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto p-6 md:p-0">
				<h1 className=" text-h3 md:text-h2 lg:text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">14 Aug 22</span> John 21:15-25
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpresbyterian.church.984%2Fvideos%2F593181835739419%2F&show_text=false&width=560&t=0"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[220px] md:h-[370px] lg:h-[450px] xl:h-[600px]"
					></iframe>
				</div>
				<div>
					<p className="text-lg lg:text-h4 text-navy md:text-h4 font-medium mb-10 md:mt-6">
						“I have come to the conclusion that, instead of trying to set all my
						Master’s servants right at once, my first and most important work is
						to follow my Lord; and I think, my brother, that it will be wise for
						you to come to the same conclusion.” (Spurgeon)
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
