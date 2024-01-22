import { Navbar } from "@/components/ui";
import React from "react";
import { FirstSection, Sliders, SecondSection, ThirdSection } from "./_components";
const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<FirstSection />
			<Sliders />
			<SecondSection />
			<ThirdSection  />
		</div>
	);
};
export default LandingPage;
