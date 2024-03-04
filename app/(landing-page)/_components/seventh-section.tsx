import { Check } from "lucide-react";
import React from "react";

export const SeventhSection = () => {
	return (
		<div className="px-10">
			<div className="w-full text-center text-[#2b1c50] flex justify-center text-4xl md:text-6xl font-medium items-center pb-20">
				Powerful features for easy, custom recordings
			</div>
			<div className="flex flex-col items-center justify-center">
				<div className="md:flex">
					<div className="space-y-10">
						<div className="flex items-center gap-4">
							<div className="h-10 w-10 bg-[#eff0ff] items-center flex rounded-full justify-center">
								<Check className=" text-3xl text-indigo-500" />
							</div>
							<span className="text-xl">Screen and camera recording</span>
						</div>

						<div className="flex items-center gap-4">
							<div className="h-10 w-10 bg-[#eff0ff] items-center flex rounded-full justify-center">
								<Check className=" text-3xl text-indigo-500" />
							</div>
							<span className="text-xl">Trim and stitch video clips</span>
						</div>
						<div className="flex items-center gap-4">
							<div className="h-10 w-10 bg-[#eff0ff] items-center flex rounded-full justify-center">
								<Check className=" text-3xl text-indigo-500" />
							</div>
							<span className="text-xl">Custom background</span>
						</div>
						<div className="flex items-center gap-4">
							<div className="h-10 w-10 bg-[#eff0ff] items-center flex rounded-full justify-center">
								<Check className=" text-3xl text-indigo-500" />
							</div>
							<span className="text-xl">
								Transcriptions and closed captions
							</span>
						</div>
					</div>
					<div className="pt-10 md:pt-0 space-y-10 md:ml-40">
						<div className="flex items-center gap-4">
							<div className="h-10 w-10 bg-[#eff0ff] items-center flex rounded-full justify-center">
								<Check className=" text-3xl text-indigo-500" />
							</div>
							<span className="text-xl">Easy sharing and embedding</span>
						</div>{" "}
						<div className="flex items-center gap-4">
							<div className="h-10 w-10 bg-[#eff0ff] items-center flex rounded-full justify-center">
								<Check className=" text-3xl text-indigo-500" />
							</div>
							<span className="text-xl">Download and upload</span>
						</div>{" "}
						<div className="flex items-center gap-4">
							<div className="h-10 w-10 bg-[#eff0ff] items-center flex rounded-full justify-center">
								<Check className=" text-3xl text-indigo-500" />
							</div>
							<span className="text-xl">Video privacy controls</span>
						</div>{" "}
						<div className="flex items-center gap-4">
							<div className="h-10 w-10 bg-[#eff0ff] items-center flex rounded-full justify-center">
								<Check className=" text-3xl text-indigo-500" />
							</div>
							<span className="text-xl">Video and viewer insights</span>
						</div>
					</div>
				</div>
				<div className="underline pt-20 font-medium">see all features</div>
			</div>
		</div>
	);
};
