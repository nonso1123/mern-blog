import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import ReadBlog from "./pages/ReadBlog";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import axios from "axios";
// import "./App.css";
const App = () => {
	useEffect(() => {
		let token = sessionStorage.getItem("User");
		let user = JSON.parse(token);
		if (user) {
			axios.defaults.headers.common["Authorization"] = `Bearer ${user}`;
		}
	}, []);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route element={<Layout />}>
					<Route path="/home" element={<Home />} />
					<Route path="/createblog" element={<CreateBlog />} />
					<Route path="/readblog/:id" element={<ReadBlog />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
