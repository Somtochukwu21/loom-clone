"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, AlignJustify } from "lucide-react";

export const ActionButtons = () => {
	const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

	const toggleDropdown: () => void = () => {
		setIsDropdownVisible(!isDropdownVisible);
	};

	const closeDropdownL: () => void = () => {
		setIsDropdownVisible(false);
	};

	return (
		<div className="flex items-center md:justify-end md:space-x-6 sm:px-10">
			<div className="flex xl:space-x-6">
				<Link href={"/pricing"} className="items-center hidden xl:flex">
					<div>Pricing</div>
				</Link>{" "}
				<Link href={"/sign-in"} className="items-center hidden xl:flex">
					<div className="font-light flex xl:w-12">Sign In</div>
				</Link>
			</div>
			<div className="flex lg:space-x-4 items-center">
				<Link href={"/free"}>
					<Button className="hidden text-md font-light rounded-[40px] border-4 border-indigo-400/90 py-6 bg-[#565add] md:flex hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300">
						Get Bird For Free
					</Button>
				</Link>
				<Link href={"/contact"}>
					<Button className="hidden text-[#565add] text-md font-light bg-[#eff0ff] rounded-[40px] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300 md:hidden lg:flex p-6">
						Contact Sales
					</Button>
				</Link>
			</div>

			{isDropdownVisible && (
				<div
					onClick={toggleDropdown}
					className="bg-[#565add] p-3 rounded-full xl:hidden">
					<X className="h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full" />
				</div>
			)}
			{!isDropdownVisible && (
				<div
					onClick={toggleDropdown}
					className="bg-[#eff0ff] p-3 rounded-full xl:hidden">
					<AlignJustify className="h-6 w-6 text-[#565add] items-center justify-center rounded-full" />
				</div>
			)}
		</div>
	);
};
