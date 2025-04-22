import React, { useState } from "react";
import { createUser } from "../api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateUser = ({ setView, view }) => {
	const [user, setUser] = useState({
		name: "",
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
			const response = await createUser(user);
			if (response) {
				setView(!view);
			}
		} catch {
			setLoading(false);
			alert("User account could not be created :(");
			return;
		}
	};
	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<Input
				type="text"
				name="name"
				placeholder="Name"
				onChange={handleChange}
				required
				className="mb-4"
			/>
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
				Create Account
			</Button>
		</form>
	);
};

export default CreateUser;
