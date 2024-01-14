import React, { useEffect, useState } from "react";
import { Button, Box, Grid, Hidden } from "@material-ui/core";
import DataGrid from "../Component/Dashboard/DataGrid.js";
import Charts from "../Component/Dashboard/Charts";
import MainLayout from "../Component/Sidenav/Sidenav";
import SideNav from "../Component/Sidenav/SidenavList";

const Dashboard = ({ setAuthToken }) => {
	const logoutHandler = () => {
		setAuthToken(false);
		localStorage.removeItem("spaceVueToken");
	};
	const [missionList, setMissionList] = useState([]);
	const [missionListSuccessful, setMissionListSuccessful] = useState([]);
	const [missionListUnsuccessful, setMissionListUnsuccessful] = useState([]);

	const getDataMission = async () => {
		try {
			const resp = await fetch(
				"https://www.ag-grid.com/example-assets/space-mission-data.json"
			);
			const jsonData = await resp.json();

			setMissionList(jsonData);

			setMissionListSuccessful(
				jsonData.filter((data) => data.successful === true)
			);
			setMissionListUnsuccessful(
				jsonData.filter((data) => data.successful !== true)
			);
		} catch (error) {
			console.log(error, "getDataMission");
			setMissionList([]);
		}
	};
	useEffect(() => {
		getDataMission();
	}, []);
	return (
		<Box className="pageWrapper">
			<header className="headerDesign">
				<Box display="flex" width="100px">
					<MainLayout />
					<Hidden smDown>
						<Box>Space-Vue</Box>
					</Hidden>
				</Box>

				<Button
					type="button"
					variant="outlined"
					onClick={() => logoutHandler()}
				>
					Logout
				</Button>
			</header>

			<Box className="pageSection">
				<Hidden smDown>
					<Box className="sideNavDesignBig">
						<SideNav />
					</Box>
				</Hidden>

				<Box className="contentContainer">
					<Grid container spacing={2}>
						<Grid item sm={12} md={12}>
							<Charts
								missionList={missionListSuccessful}
								type="bar"
								yKey="price"
								heading="Successful Mission Price"
							/>
						</Grid>
						<Grid item sm={12} md={8}>
							<DataGrid missionList={missionList} />
						</Grid>
						<Grid item sm={12} md={4}>
							<Charts
								missionList={missionListUnsuccessful}
								type="line"
								yKey="price"
								heading="Unsuccessful Mission Price"
							/>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
