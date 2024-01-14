import React, { useState } from "react";
import {
	TextField,
	Button,
	FormControl,
	Box,
	Typography,
	Card,
} from "@material-ui/core";

const Login = ({ setAuthToken }) => {
	const [username, setUsername] = useState("Test@spacevue.com");
	const [password, setPassword] = useState("Test@1234");
	const [loginError, setLoginError] = useState({ status: false, message: "" });

	const handleLogin = () => {
		try {
			const UsernameStr = "Test@spacevue.com";
			const PasswordStr = "Test@1234";

			if (username === UsernameStr && password === PasswordStr) {
				// Successful login
				setLoginError({ status: false, message: "" });
				setAuthToken(true);
				localStorage.setItem("spaceVueToken", "allowed");
			} else {
				// Failed login
				setLoginError({
					status: true,
					message: "Username and Password does not match!!",
				});
				setAuthToken(false);
			}
		} catch (error) {
			setLoginError({
				status: true,
				message: "Something Went Wrong!!",
			});
			console.log(error, "handleLogin");
		}
	};
	return (
		<Box className="loginWrapper formCenter">
			<Card>
				<Box
					component="form"
					style={{ padding: "40px", width: "40ch" }}
					noValidate
					autoComplete="off"
					onSubmit={(e) => {
						e.preventDefault();
						handleLogin();
					}}
				>
					<Typography variant="h5" className="loginText">
						Login From
					</Typography>
					{loginError.status && (
						<Typography className="errorMessage">
							{loginError.message}
						</Typography>
					)}
					<FormControl fullWidth style={{ marginTop: "20px" }}>
						<TextField
							label="Username"
							variant="outlined"
							size="small"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</FormControl>
					<FormControl fullWidth style={{ marginTop: "20px" }}>
						<TextField
							label="Password"
							variant="outlined"
							size="small"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormControl>

					<Button
						style={{ marginTop: "20px", marginBottom: "20px" }}
						type="submit"
						fullWidth
						variant="contained"
						className=""
						size="small"
						color="primary"
					>
						Submit
					</Button>
				</Box>
			</Card>
		</Box>
	);
};

export default Login;
