import React from "react";

const page = () => {
	return (
		<div>
			<section className=" mt-28 max-w-screen-lg mx-auto">
				<h1 className=" text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">28 July</span> Matthew 13: 45-52
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpresbyterian.church.984%2Fvideos%2F1671910020241072%2F&show_text=false&width=560&t=0"
						title="Mat. 13:45-52"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[250px] md:h-[600px]"
					></iframe>
				</div>
				<div>
					<p className=" text-navy md:text-h4 font-medium mb-10">
						“A small degree of knowledge is not sufficient for a preacher of the
						Gospel. The sacred writings should be his treasure, and he should
						properly understand them… his knowledge consists in being well
						instructed in the things concerning the kingdom of heaven, and the
						art of conducting men thither.” (Clarke)
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
