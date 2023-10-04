import React from "react";
import Arcade from "../../commonResource/images/icons/arcade.png";
import LearnMoreBuyLinks from "../LearnMoreBuy";

function SectionSix() {
	const links = [
		{
			linkName: "Learn more",
			linkUrl: "/LearnMore",
		},
		{
			linkName: "Apply now",
			linkUrl: "/ApplyNow",
		},
	];

	return (
		<>
			<section className="sixth-heghlight-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="left-side-wrapper col-sm-12 col-md-6">
							<div className="left-side-container">
								<div className="top-logo-wrapper">
									<div className="logo-wrapper">
										<img src={Arcade} alt="Arcade" />
									</div>
								</div>
								<div className="description-wraper white">
									Agent 8 is a small hero on a big mission.
								</div>
								<div className="links-wrapper">
									<ul>
										<li>
											<a href="">
												Play now<sup>2</sup>
											</a>
										</li>
										<li>
											<a href="">Learn about Apple Arcade</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="right-side-wrapper col-sm-12 col-md-6">
							<div className="right-side-container">
								<div className="title-wraper">
									Apple Card Monthly Installments
								</div>
								<div className="description-wraper">
									Pay for your next iPhone over time, interest-free with Apple
									Card.
								</div>
								<div className="links-wrapper d-block">
									<LearnMoreBuyLinks links={links} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default SectionSix;
