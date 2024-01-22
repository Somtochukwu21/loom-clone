import React from "react";
import { SliderOne, SliderThree, SliderTwo } from "./_components";

export const Sliders = () => {
	return (
		<div className="py-32">
			<div className="text-[#2b1c50] px-6 md:w-1/3 mx-auto text-center flex justify-center items-center text-3xl md:text-5xl font-medium">
				More than 21 Million people Across 120,000 Companies Choose Bird
			</div>
			<div className="pt-20">
				<SliderOne />
				<SliderTwo />
				<SliderThree />
			</div>
		</div>
	);
};
