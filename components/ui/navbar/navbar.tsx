import { ActionButtons, Logo, NavigationMenuBar } from "./_components";

export const Navbar = () => {
	return (
		<div className="flex items-center justify-between pr-10 sticky bg-white h-24 top-0 z-50 lg:px-20">
			<div className="px-4 ">
				<div className="w-40">
					<Logo />
				</div>
			</div>
			<div className="flex items-center">
				<NavigationMenuBar />
				<ActionButtons />
			</div>
		</div>
	);
};
