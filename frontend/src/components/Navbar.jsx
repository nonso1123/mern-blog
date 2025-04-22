import React from "react";
import { pageData } from "../pageData";
import { Link, useNavigate } from "react-router-dom";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
	const navigate = useNavigate();
	const handleLogOut = () => {
		sessionStorage.removeItem("User");
		navigate("/");
	};
	return (
		<NavigationMenu className="bg-primary h-20 p-2 fixed top-0 left-0 w-screen">
			<NavigationMenuList>
				{pageData.map((page) => (
					<NavigationMenuItem>
						<Link to={page.path} key={page.name}>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{page.name}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>

			<NavigationMenuLink
				className={
					"ml-2 " +
					navigationMenuTriggerStyle() +
					" bg-red-500 " +
					" hover:bg-red-500 " +
					" cursor-pointer"
				}
				onClick={handleLogOut}
			>
				Log out
			</NavigationMenuLink>
		</NavigationMenu>
	);
};

export default Navbar;
