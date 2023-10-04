import React, { useState, useEffect } from "react";
import flag from "../../commonResource/images/icons/16.png";
import Footer from "./Footer";

function NavFooter() {
	const links = [
		{ linkUrl: "#", linkName: "Mac" },
		{ linkUrl: "#", linkName: "iPad" },
		{ linkUrl: "#", linkName: "iPhone" },
		{ linkUrl: "#", linkName: "Watch" },
		{ linkUrl: "#", linkName: "TV" },
		{ linkUrl: "#", linkName: "Music" },
		{ linkUrl: "#", linkName: "AirPods" },
		{ linkUrl: "#", linkName: "HomePod" },
		{ linkUrl: "#", linkName: "iPod touch" },
		{ linkUrl: "#", linkName: "Accessories" },
		{ linkUrl: "#", linkName: "Gift Cards" },

		// Add other objects for additional sections if needed
	];

	const Services = [
		{ linkUrl: "#", linkName: "Apple Music" },
		{ linkUrl: "#", linkName: "Apple News+" },
		{ linkUrl: "#", linkName: "Apple TV+" },
		{ linkUrl: "#", linkName: "Apple Arcade" },
		{ linkUrl: "#", linkName: "Apple Card" },
		{ linkUrl: "#", linkName: "iCloud" },
	];
	const Account = [
		{ linkUrl: "#", linkName: "Manage Your Apple ID" },
		{ linkUrl: "#", linkName: "Apple Store Account" },
		{ linkUrl: "#", linkName: "iCloud.com" },
	];
	const AppleStore = [
		{ linkUrl: "#", linkName: "Find a Store" },
		{ linkUrl: "#", linkName: "Genius Bar" },
		{ linkUrl: "#", linkName: "Today at Apple" },
		{ linkUrl: "#", linkName: "Apple Camp" },
		{ linkUrl: "#", linkName: "Field Trip" },
		{ linkUrl: "#", linkName: "Apple Store App" },
		{ linkUrl: "#", linkName: "Refurbished and Clearance" },
		{ linkUrl: "#", linkName: "Financing" },
		{ linkUrl: "#", linkName: "Apple Trade In" },
		{ linkUrl: "#", linkName: "Order Status" },
		{ linkUrl: "#", linkName: "Shopping Help" },
	];
	const ForBusiness = [
		{ linkUrl: "#", linkName: "Apple and Business" },
		{ linkUrl: "#", linkName: "Shop for Business" },
	];
	const ForEducation = [
		{ linkUrl: "#", linkName: "Apple and Education" },
		{ linkUrl: "#", linkName: "Shop for College" },
	];
	const ForHealthcare = [
		{ linkUrl: "#", linkName: "Manage Your Apple ID" },
		{ linkUrl: "#", linkName: "Apple Store Account" },
		{ linkUrl: "#", linkName: "iCloud.com" },
	];
	const ForGovernment = [
		{ linkUrl: "#", linkName: "Apple and Education" },
		{ linkUrl: "#", linkName: "Shop for College" },
	];
	const AppleValues = [
		{ linkUrl: "#", linkName: "Find a Store" },
		{ linkUrl: "#", linkName: "Genius Bar" },
		{ linkUrl: "#", linkName: "Today at Apple" },
		{ linkUrl: "#", linkName: "Apple Camp" },
		{ linkUrl: "#", linkName: "Field Trip" },
		{ linkUrl: "#", linkName: "Apple Store App" },
	];
	const AboutApple = [
		{ linkUrl: "#", linkName: "Find a Store" },
		{ linkUrl: "#", linkName: "Genius Bar" },
		{ linkUrl: "#", linkName: "Today at Apple" },
		{ linkUrl: "#", linkName: "Apple Camp" },
		{ linkUrl: "#", linkName: "Field Trip" },
		{ linkUrl: "#", linkName: "Apple Store App" },
	];

	const abebe = [
		{ linkUrl: "#", linkName: "Privacy Policy" },
		{ linkUrl: "#", linkName: "Terms of Use" },
		{ linkUrl: "#", linkName: "Sales and Refunds" },
		{ linkUrl: "#", linkName: "Legal" },
		{ linkUrl: "#", linkName: "Site Map" },
	];

	return (
		<>
			<footer className="footer-wrapper">
				<div className="container">
					<div className="upper-text-container">
						<p>
							1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
							promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
							X in good condition. Additional trade‑in values require purchase
							of a new iPhone, subject to availability and limits. Must be at
							least 18. Apple or its trade-in partners reserve the right to
							refuse or limit any Trade In transaction for any reason. In‑store
							trade‑in requires presentation of a valid, government-issued photo
							ID (local law may require saving this information). Sales tax may
							be assessed on full value of new iPhone. Additional terms from
							Apple or Apple’s trade-in partners may apply. Monthly pricing:
							Available to qualified customers and requires 0% APR, 24-month
							installment loan with Citizens One or Apple Card Monthly
							Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
							Verizon. Taxes and shipping not included. Additional Apple Card
							Monthly Installments terms are in the{" "}
							<a href="'#" target="_blank">
								{" "}
								Customer Agreement
							</a>
							. Additional iPhone Payments terms are <a href="#"> here</a>.
						</p>
						<p>
							2. Subscription required.
							<br />
							<br />
							Magic Keyboard sold separately.
							<br />
							<br />
							Apple TV+ is $4.99/month after free trial. One subscription per
							Family Sharing group. Offer good for 3 months after eligible
							device activation. Plan automatically renews until cancelled.
							Restrictions and other <a href="#/">terms </a> apply.
						</p>
					</div>

					<div className="footer-links-wrapper row">
						<div className="links-wrapper-1 col-sm-12 col-md ">
							<Footer title="Shop and Learn" abebe={links} />
						</div>
						<div className="links-wrapper-2 col-sm-12 col-md">
							<Footer title="Servcie" abebe={Services} />
							<Footer title="Account" abebe={Account} />
						</div>

						<div className="links-wrapper-3 col-sm-12 col-md">
							<Footer title="Apple Store" abebe={AppleStore} />
						</div>

						<div className="links-wrapper-4 col-sm-12 col-md">
							<Footer title="For Business" abebe={ForBusiness} />
							<Footer title="For Education" abebe={ForEducation} />
							<Footer title="For Healthcare" abebe={ForHealthcare} />
							<Footer title="For Government" abebe={ForGovernment} />
						</div>

						<div className="links-wrapper-5 col-sm-12 col-md">
							<Footer title="Apple Values" abebe={AppleValues} />
							<Footer title="About Apple" abebe={AboutApple} />
						</div>
					</div>

					<div className="my-apple-wrapper">
						More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
						<a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
					</div>
					<div className="copyright-wrapper row">
						<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
							Copyright &copy; 2020 Apple Inc. All rights reserved.
						</div>
						<div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2 ">
							<Footer abebe={abebe} />
						</div>
						<div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
							<div className="flag-wrapper">
								<img src={flag} />
							</div>{" "}
							<div className="footer-country-name">United States</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default NavFooter;
