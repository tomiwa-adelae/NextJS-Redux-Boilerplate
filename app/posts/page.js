"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
	const { posts } = useSelector((state) => state.post);
	return (
		<div>
			<button>
				<Link href="/">Go back home</Link>
			</button>
			<h1>Posts</h1>
			{posts.map((post) => (
				<div key={post.id}>
					<h3>Post title: {post.title}</h3>
					<p>Post details: {post.details}</p>
				</div>
			))}
		</div>
	);
};

export default page;
