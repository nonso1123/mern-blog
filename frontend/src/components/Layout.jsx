import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
const Layout = () => {
	let user = JSON.parse(sessionStorage.getItem("User"));
	const navigate = useNavigate();
	useEffect(() => {
		if (!user) {
			navigate("/");
		}
	}, [user]);
	return (
		<>
			<Navbar />
			<main className=" flex mt-24 justify-center w-screen">
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
