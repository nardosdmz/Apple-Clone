import React from "react";
import SectionOne from "./components/FirstSection/SectionOne";
import SectionTwo from "./components/SecondSection/SectionTwo";
import SectionThree from "./components/ThirdSection/SectionThree";
import SectionFour from "./components/FourthSection/SectionFour";
import SectionFive from "./components/FifthSection/SectionFive";
import SectionSix from "./components/SixthSection/SectionSix";
import YoutubeVideos from "./components/Youtube/YoutubeVideos";

function homePg() {
	return (
		<>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
			<SectionSix />
			<YoutubeVideos />
		</>
	);
}

export default homePg;
