import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
	return (
		<div>
			<Link href={"/"}>
				<Image
					src="/logos/bird-logo.png"
					alt="Logo"
					width={140}
					height={150}
					className="w-40"
				/>
			</Link>
		</div>
	);
};
