import React from "react";

const page = () => {
	return (
		<div>
			<section className="h-screen lg:h-full mt-28 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto p-6 md:p-0">
				<h1 className=" text-h3 md:text-h2 lg:text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">16 July 24</span> Matthew 13: 31-44
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpresbyterian.church.984%2Fvideos%2F8444012342293247%2F&show_text=false&width=560&t=0"
						title="Mat. 13:31-44"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[220px] md:h-[370px] lg:h-[450px] xl:h-[600px]"
					></iframe>
				</div>
				<div>
					<p className="text-lg lg:text-h4 text-navy md:text-h4 font-medium mb-10 md:mt-6 ">
						This parable powerfully teaches that it is God’s job to divide in
						judgment. “Magistrates and churches may remove the openly wicked
						from their society; the outwardly good who are inwardly worthless
						they must leave; for the judging of hearts is beyond their sphere.”
						(Spurgeon)
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
