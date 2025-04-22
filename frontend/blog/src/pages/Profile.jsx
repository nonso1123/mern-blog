import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getPosts } from "../api";
import BlogCard from "../components/BlogCard";

const Profile = () => {
	const [posts, setPosts] = useState([]);
	const [user, setUser] = useState({});

	useEffect(() => {
		const loadUserData = async () => {
			const token = sessionStorage.getItem("User");
			const decodedUser = jwtDecode(token);
			const allPosts = await getPosts();
			const filteredPosts = allPosts.filter(
				(post) => post.author === decodedUser._id
			);
			let date = new Date(decodedUser.joinDate);
			decodedUser.joinDate = date.toString().substring(0, 15);
			setPosts(filteredPosts);
			setUser(decodedUser);
		};
		loadUserData();
	}, []);
	return (
		<div className="w-1/3">
			<label className="flex left-0 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">
				Name:
			</label>
			<h2 className="flex left-0 mb-4"> {user.name}</h2>
			<label className="flex left-0 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">
				Email:
			</label>
			<h2 className="flex left-0 mb-4">{user.email}</h2>
			<label className="flex left-0 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">
				Join Date:
			</label>
			<h2 className="flex left-0 mb-4">{user.joinDate}</h2>
			{posts.map((post) => (
				<BlogCard post={post} />
			))}
		</div>
	);
};

export default Profile;
