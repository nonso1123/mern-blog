import React, { useState, useEffect } from "react";
import { getPost } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
const ReadBlog = () => {
	const [post, setPost] = useState({});
	let { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const loadPost = async () => {
			let data = await getPost(id);
			console.log(data);
			let date = new Date(data.dateCreated);
			data.dateCreated = date.toString().substring(0, 15);
			setPost(data);
			console.log(data);
		};
		loadPost();
	}, [id]);
	return (
		<div className="flex flex-col w-1/3 items-center">
			<Button onClick={() => navigate(-1)} className="w-48 my-4">
				Back
			</Button>
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
				{post.title}
			</h1>
			<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">
				{post.description}
			</h2>
			<div className="flex w-full justify-center">
				<img src={post.image?.data} alt="" className="max-h-96 my-4" />
			</div>
			<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
				{post.dateCreated}
			</h3>
			<p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-left">
				{post.content}
			</p>
		</div>
	);
};

export default ReadBlog;
