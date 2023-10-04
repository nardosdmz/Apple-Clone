import React from "react";
import LearnMoreBuyLinks from "../LearnMoreBuy";
import { Link } from "react-router-dom";

function SectionOne() {
	const links = [
		{
			linkName: "Learn more",
			linkUrl: "/LearnMore",
		},
		{
			linkName: "Order",
			linkUrl: "/Order",
		},
	];

	return (
		<>
			{/* <!-- Alert Section --> */}
			<section className="alert-section top-50">
				<div className="container">
					<div className="alert-title">We’re open for you.</div>
					<div className="alert-text">
						Our retail stores are closed, but you can buy our products here
						online and get fast, free delivery. If you need help finding the
						right product or have a question on your order, chat online with a
						Specialist or call 1-800-MY-APPLE.
						<br />
						For service and support, visit{" "}
						<Link href="#">support.apple.com</Link>.
					</div>
				</div>
			</section>

			<section className="first-hightlight-wrapper">
				<div className="container">
					<div className="new-alert">New</div>
					<div className="title-wraper bold black">iPad Pro</div>
					<div className="links-wrapper">
						<LearnMoreBuyLinks links={links} />
					</div>

					<div className="ipod-caption mt-2 row">
						<div className="col-sm-12 col-md-6 text-md-right">
							iPad Pro available starting 3.25
						</div>
						<div className="col-sm-12 col-md-6 text-md-left">
							Magic Keyboard coming in May
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default SectionOne;
