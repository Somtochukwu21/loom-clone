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
		</div>
	);
};
export default LandingPage;
