import React from "react";

const page = () => {
	return (
		<div>
			<section className=" mt-28 max-w-screen-lg mx-auto">
				<h1 className=" text-h2 md:text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">18 Dec 22</span> Purpose of
					Christmas
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fpresbyterian.church.984%2Fvideos%2F540442674644964%2F&show_text=false&width=438&t=0"
						title="Mat. 13:31-44"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[250px] md:h-[800px]"
					></iframe>
				</div>
				<div className=" mt-8">
					<p className=" text-navy md:text-h4 font-medium mb-10">
						Every year, around the world, people celebrate the birth of Jesus
						Christ on Christmas Day, 25 December. It's a day – and season –
						filled with Christmas carols, tree decorating, gift-giving and
						parties. And, among all the celebrations, you may be wondering: what
						is the real meaning of Christmas? Or, why do we have these Christmas
						traditions? What do they have to do with Jesus?
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
