import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function RoutesPath() {
	const [authToken, setAuthToken] = useState(false);
	useEffect(() => {
		const accessToken = localStorage.getItem("spaceVueToken");
		if (accessToken !== null) {
			if (accessToken === "allowed") {
				setAuthToken(true);
			} else {
				setAuthToken(false);
			}
		} else {
			setAuthToken(false);
		}
	}, []);

	return (
		<>
			<React.Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								authToken ? (
									<Dashboard setAuthToken={setAuthToken} />
								) : (
									<Login setAuthToken={setAuthToken} />
								)
							}
						/>
					</Routes>
				</BrowserRouter>
			</React.Suspense>
		</>
	);
}

export default RoutesPath;

const Dashboard = React.lazy(() => import("./../Dashboard/Dashboard.js"));
const Login = React.lazy(() => import("./../Auth/Login.js"));
