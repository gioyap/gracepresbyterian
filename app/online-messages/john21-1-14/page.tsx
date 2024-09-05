import React from "react";

const page = () => {
	return (
		<div>
			<section className=" mt-28 max-w-screen-lg mx-auto">
				<h1 className=" text-h1 text-navy font-bold text-start mb-2">
					<span className=" text-grei-light">24 Jul 22</span> John 21:1-14
				</h1>
				<div>
					<iframe
						width="100%"
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpresbyterian.church.984%2Fvideos%2F856868705282840%2F&show_text=false&width=560&t=0"
						title="Mat. 13:31-44"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-[250px] md:h-[600px]"
					></iframe>
				</div>
				<div>
					<p className=" text-navy md:text-h4 font-medium mb-10">
						“They ate the bread and fish that morning, I doubt not, in silent
						self- humiliation. Peter looked with tears in his eyes at that fire
						of coals, remembering how he stood and warmed himself when he denied
						his Master. Thomas stood there, wondering that he should have dared
						to ask such proofs of a fact most clear. All of them felt that they
						could shrink into nothing in his divine presence, since they had
						behaved so ill.” (Spurgeon)
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
