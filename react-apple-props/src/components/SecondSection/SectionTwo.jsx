import React from "react";
import LearnMoreBuyLinks from "../LearnMoreBuy";

function SectionTwo() {
	const links = [
		{
			linkName: "Learn more",
			linkUrl: "/LearnMore",
		},
		{
			linkName: "Buy",
			linkUrl: "/Order",
		},
	];

	return (
		<>
			<div>
				<section className="second-hightlight-wrapper">
					<div className="container">
						<div className="new-alert">New</div>

						<div className="title-wraper bold black">MacBook Air</div>

						<div className="description-wrapper black">
							Twice the speed. Twice the storage.
						</div>

						<div className="price-wrapper grey">From $999.</div>

						<div className="links-wrapper">
							<LearnMoreBuyLinks links={links} />
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default SectionTwo;
