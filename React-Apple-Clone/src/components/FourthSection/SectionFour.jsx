import React from "react";
import Footer from "../Footer/Footer";
import LearnMoreBuyLinks from "../LearnMoreBuy";

function SectionFour() {
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
			<section className="fourth-heghlight-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="left-side-wrapper col-sm-12 col-md-6">
							<div className="left-side-container">
								<div className="title-wraper">iPhone 11</div>
								<div className="description-wraper">
									Just the right amount of everything.
								</div>
								<div className="price-wrapper">
									From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
								</div>

								<div className="links-wrapper">
									<LearnMoreBuyLinks links={links} />
								</div>
							</div>
						</div>
						<div className="right-side-wrapper col-sm-12 col-md-6">
							<div className="right-side-container">
								<div className="title-wraper white">
									Get the latest CDC response to COVID-19.
								</div>

								<div className="links-wrapper white">
									<ul>
										<li>
											<a href="">Watch the PSA</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default SectionFour;
