import React, { Component } from "react";
import AppleLogo from "../../commonResource/images/icons/apple-tv-logo.png";
import Banker from "../../commonResource/images/home/banker.png";
import Series5 from "../../commonResource/images/icons/watch-series5-logo.png";
import LearnMoreBuyLinks from "../LearnMoreBuy";

function SectionFive() {
	const links = [
		{
			linkName: "Learn more",
			linkUrl: "/LearnMore",
		},
		{
			linkName: "Buy",
			linkUrl: "/Buy",
		},
	];
	return (
		<>
			<section className="fifth-heghlight-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="left-side-wrapper col-sm-12 col-md-6">
							<div className="left-side-container">
								<div className="top-logo-wrapper">
									<div className="logo-wrapper">
										<img src={AppleLogo} />
									</div>
								</div>

								<div className="tvshow-logo-wraper">
									<img src={Banker} />
								</div>

								<div className="watch-more-wrapper">
									<a href="#">Watch now on the Apple TV App</a>
								</div>
							</div>
						</div>
						<div className="right-side-wrapper col-sm-12 col-md-6">
							<div className="right-side-container">
								<div className="top-logo-wrapper">
									<div className="logo-wrapper">
										<img src={Series5} />
									</div>
								</div>
								<div className="description-wraper">
									With the Always-On Retina display.
									<br />
									You’ve never seen a watch like this.
								</div>
								<div className="links-wrapper">
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
export default SectionFive;
