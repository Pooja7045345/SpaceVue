import React from "react";
import { Card, Typography, Box } from "@material-ui/core";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

const DataGrid = ({ missionList }) => {
	const colDefs = [
		{ field: "mission" },
		{ field: "company" },
		{ field: "location" },
		{ field: "date" },
		{ field: "price" },
		{ field: "successful" },
		{ field: "rocket" },
	];
	return (
		<Card>
			<Box className="gridDesign">
				<Typography variant="h6">Mission Data List</Typography>
				<div
					className="ag-theme-quartz"
					style={{ height: "300px", width: "100%" }}
				>
					<AgGridReact
						rowData={missionList}
						columnDefs={colDefs}
						pagination={true}
						paginationPageSize={10}
					/>
				</div>
			</Box>
		</Card>
	);
};

export default DataGrid;
