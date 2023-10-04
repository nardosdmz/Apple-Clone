import React, { useEffect, useState } from "react";

function Footer({ title, abebe }) {
	const [isHidden, setIsHidden] = useState(true);

	const toggleVisibility = () => {
		setIsHidden(!isHidden);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768 && !isHidden) {
				window.location.reload();
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isHidden]);

	return (
		<>
			<h3
				onClick={toggleVisibility}
				className={`${!isHidden ? "expanded" : ""}`}
			>
				{title}
			</h3>
			<ul className={` ${isHidden ? "display-none" : ""}`}>
				{abebe.map(({ linkName, linkUrl }, i) => (
					<li key={i}>
						<a href={linkUrl}>{linkName}</a>
					</li>
				))}
			</ul>
		</>
	);
}

export default Footer;
