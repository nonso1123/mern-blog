import React, { useRef, useState } from "react";
import { createPost } from "../api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");
	const [file, setFile] = useState();
	const navigate = useNavigate();

	const MAX_FILE_SIZE = 15000000;

	const inputFile = useRef(null);

	async function handleSubmit(e) {
		e.preventDefault();
		let submitObject = {
			title: title,
			description: description,
			content: content,
			author: null,
			dateCreated: new Date(),
			file: file,
		};

		await createPost(submitObject);
		navigate("/home");
	}

	function handleFileUpload(e) {
		const file = e.target.files[0];
		const fileExtension = file.name.substring(file.name.lastIndexOf("."));
		if (
			fileExtension != ".jpg" &&
			fileExtension != ".jpeg" &&
			fileExtension != ".png"
		) {
			alert("Files must be jpg or png");
			inputFile.current.value = "";
			inputFile.current.type = "file";
			return;
		}
		if (file.size > MAX_FILE_SIZE) {
			alert("File size exceeds the limit (15 Mb)");
			inputFile.current.value = "";
			inputFile.current.type = "file";
			return;
		}

		setFile(file);
	}
	return (
		<form onSubmit={handleSubmit} className="w-1/3">
			<Label className="flex left-0 p-2">Blog Post Title:</Label>
			<Input
				name="title"
				type="text"
				maxLength={100}
				required
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Label className="flex left-0 p-2">Blog Description:</Label>
			<Input
				name="description"
				type="text"
				maxLength={200}
				required
				onChange={(e) => setDescription(e.target.value)}
			/>
			<Label className="flex left-0 p-2">Blog Content</Label>
			<Textarea
				name="content"
				type="text"
				maxLength={5000}
				required
				onChange={(e) => setContent(e.target.value)}
			/>
			<Label className="flex left-0 p-2">Blog Image</Label>
			<Input
				name="file"
				type="file"
				ref={inputFile}
				onChange={handleFileUpload}
				className="cursor-pointer hover:bg-accent"
			/>
			<Button type="submit" className="mt-4">
				Submit
			</Button>
		</form>
	);
};

export default CreateBlog;
