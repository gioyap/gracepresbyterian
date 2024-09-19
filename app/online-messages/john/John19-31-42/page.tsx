import React from "react";

const page = () => {
	return (
		<div>
			<section className="  h-screen lg:h-full mt-28 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto p-6 md:p-0">
				<h1 className=" text-h3 md:text-h2 lg:text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">29 May 22</span> John 19:31-42
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpresbyterian.church.984%2Fvideos%2F3222272618051419%2F&show_text=false&width=560&t=0"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[200px] md:h-[370px] lg:h-[450px] xl:h-[600px]"
					></iframe>
				</div>
				<div className="">
					<p className="text-lg lg:text-h4 text-navy md:text-h4 font-medium mb-10 md:mt-6 ">
						“Jesus did not come into their midst to show them a new thought, a
						philosophic discovery, or even a deep doctrine, or a profound
						mystery, or indeed anything but himself. He was a sacred egoist that
						day, for what he spake of was himself; and what he revealed was
						himself.” (Spurgeon)
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
