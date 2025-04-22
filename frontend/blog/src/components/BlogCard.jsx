import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const BlogCard = ({ post }) => {
	let date = new Date(post.dateCreated);
	let stringDate = date.toString();
	return (
		<Card className="w-full flex justify-center my-8 hover:bg-muted">
			<Link to={`/readblog/${post._id}`} className="w-full">
				<CardHeader>
					<CardTitle>
						<h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
							{post.title}
						</h1>
					</CardTitle>
					<CardDescription>
						<h2>{post.description}</h2>
					</CardDescription>
					<CardContent>
						<h3>{stringDate.substring(0, 15)}</h3>
					</CardContent>
				</CardHeader>
			</Link>
		</Card>
	);
};

export default BlogCard;
