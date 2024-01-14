import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import { IconButton, Box } from "@material-ui/core";
import SideNav from "./SidenavList";

const MainLayout = () => {
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);

	const handleToggleSideNav = () => {
		setIsSideNavOpen(!isSideNavOpen);
	};

	return (
		<div>
			<Hidden mdUp>
				<IconButton onClick={handleToggleSideNav}>
					<Icon icon="ci:hamburger-lg" width={20} height={20} />
				</IconButton>

				<Drawer
					id="myDrawer"
					open={isSideNavOpen}
					onClose={handleToggleSideNav}
				>
					<SideNav />
				</Drawer>
			</Hidden>
		</div>
	);
};

export default MainLayout;
