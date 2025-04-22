import React, { useEffect, useState } from "react";
import { getPosts } from "../api";
import BlogCard from "../components/BlogCard";

const Home = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const loadAllPosts = async () => {
			const data = await getPosts();
			data.sort(
				(d1, d2) =>
					new Date(d2.dateCreated).getTime() -
					new Date(d1.dateCreated).getTime()
			);
			setPosts(data);
		};
		loadAllPosts();
	}, []);
	return (
		<div className="flex flex-col items-center w-full">
			<div className="w-1/3 mt-4">
				{posts.map((post) => (
					<BlogCard key={post._id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Home;
