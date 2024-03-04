import { Navbar } from "@/components/ui";
import React from "react";
import {
	FirstSection,
	Sliders,
	SecondSection,
	ThirdSection,
	FourthSection,
	FifthSection,
	SixthSection,
	SeventhSection,
} from "./_components";
const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<FirstSection />
			<Sliders />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<SeventhSection />
		</div>
	);
};
export default LandingPage;
