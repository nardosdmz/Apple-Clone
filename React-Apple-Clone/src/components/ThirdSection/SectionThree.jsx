import React from "react";
import LearnMoreBuyLinks from "../LearnMoreBuy";

function SectionThree () {
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
			<section className="third-hightlight-wrapper">
				<div className="container">
					<div className="title-wraper bold">iPhone 11 Pro</div>

					<div className="description-wrapper">
						Pro cameras. Pro display. Pro performance.
					</div>

					<div className="price-wrapper">
						From $24.95/mo. or $599 with trade‑in.
					</div>

					<div className="links-wrapper">
						<LearnMoreBuyLinks links={links} />
					</div>
				</div>
			</section>
		</>
	);
};

export default SectionThree;
