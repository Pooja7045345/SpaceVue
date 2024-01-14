import React from "react";
import { AgChartsReact } from "ag-charts-react";
import { Card, Typography, Box } from "@material-ui/core";

const Charts = ({ missionList, type, yKey, heading }) => {
	const options = {
		data: missionList,
		series: [
			{
				type: type,
				xKey: "mission",
				yKey: yKey,
				yName: yKey,
			},
		],
	};

	return (
		<Card>
			<Box className="gridDesign">
				<Typography variant="h6">{heading}</Typography>
				<Box width="100%">
					<AgChartsReact options={options} />
				</Box>
			</Box>
		</Card>
	);
};

export default Charts;
