import React, { useState } from "react";
import { verifyUser } from "../api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await verifyUser(user);

			sessionStorage.setItem("User", JSON.stringify(response));
			axios.defaults.headers.common["Authorization"] = `Bearer ${response}`;
			navigate("/home");
		} catch {
			setLoading(false);
			alert("Login failed");
		}
	};
	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<Input
				type="email"
				name="email"
				placeholder="Email"
				onChange={handleChange}
				required
				className="mb-4"
			/>
			<Input
				type="password"
				name="password"
				placeholder="Password"
				onChange={handleChange}
				required
				minLength={8}
				className="mb-4"
			/>
			<Button
				type="submit"
				className={`mb-4 ${loading ? "cursor-not-allowed" : ""}`}
			>
				Login
			</Button>
		</form>
	);
};

export default Login;
