import React from "react";

function LearnMoreBuyLinks({ links }) {
	return (
		<>
			{links.map(({ linkName, linkUrl }, i) => (
				<a key={i} className="pr-4 text-decoration-none lead" href={linkUrl}>
					{linkName}
				</a>
			))}
		</>
	);
}

export default LearnMoreBuyLinks;
