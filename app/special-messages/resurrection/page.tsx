import React from "react";

const page = () => {
	return (
		<div>
			<section className=" mt-28 max-w-screen-lg mx-auto">
				<h1 className=" text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">5 May 23</span> Resurrection Day -
					My LORD's day
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.youtube.com/embed/4h0nIj149II?si=R7R-2xVgaP07873n"
						title="Mat. 13:31-44"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[250px] md:h-[600px]"
					></iframe>
				</div>
				<div>
					<p className=" text-navy md:text-h4 font-medium mb-10 mt-6">
						His resurrection assures us that our future is safe and secure.
						Without Christ's resurrection we would have no salvation from sin,
						and no hope for our own future resurrection.
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
