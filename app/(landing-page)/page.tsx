import { Navbar } from "@/components/ui";
import {
	EighthSection,
	FifthSection,
	FirstSection,
	FourthSection,
	SecondSection,
	SeventhSection,
	SixthSection,
	Sliders,
	ThirdSection,
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
			<EighthSection />
		</div>
	);
};
export default LandingPage;
