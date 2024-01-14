import { Icon } from "@iconify/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const SideNav = () => {
	return (
		<List style={{ background: "#2f3c8e" }}>
			<ListItem button>
				<Icon icon="carbon:dashboard" color="white" />
				<ListItemText
					sx={{ color: "white", marginLeft: "10px" }}
					primary="Dashboard"
				/>
			</ListItem>
		</List>
	);
};
export default SideNav;
