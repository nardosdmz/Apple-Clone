import React from "react";
import Header from "./Header.jsx";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import { Link } from "react-router-dom";

function Nav() {
	const links = [
		{
			linkUrl: "/mac",
			linkName: "Mac",
		},
		{
			linkUrl: "/iphone",
			linkName: "iphone",
		},
		{
			linkUrl: "/ipad",
			linkName: "ipad",
		},
		{
			linkUrl: "/watch",
			linkName: "watch",
		},
		{
			linkUrl: "/tv",
			linkName: "tv",
		},
		{
			linkUrl: "/music",
			linkName: "Music",
		},
		{
			linkUrl: "/support",
			linkName: "Support",
		},
	];

	return (
		<>
			<div className="nav-wrapper fixed-top">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm navbar-expand-md">
						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							☰
						</button>
						<Link className="navbar-brand mx-auto apple-logo" to="/">
							<img src={logo} alt="Logo" />
						</Link>

						<div className="navbar-collapse collapse">
							<ul className="navbar-nav nav-justified w-100 nav-fill">
								{<Header abebe={links} />}
								<li className="nav-item">
									<Link className="nav-link js-scroll-trigger" to="/">
										<img src={search} alt="Search" />
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link js-scroll-trigger" to="/">
										<img src={cart} alt="Cart" />
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
}

export default Nav;
