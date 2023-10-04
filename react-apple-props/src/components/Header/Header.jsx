import React from "react";
import { Link } from "react-router-dom";

function Header({ abebe }) {
	return (
		<>
			{abebe.map(({ linkUrl, linkName }, index) => (
				<li className="nav-item" key={index}>
					<Link className="nav-link js-scroll-trigger" to={linkUrl}>
						{linkName}
					</Link>
				</li>
			))}
		</>
	);
}

export default Header;
