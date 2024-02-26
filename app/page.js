"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useSelector } from "react-redux";

export default function Home() {
	const { posts } = useSelector((state) => state.post);

	return (
		<main className={styles.main}>
			<h1>Hello, Jarvis</h1>
			<p>There are {posts.length} number of posts available.</p>
			<button>
				<Link href="/posts">View all the posts</Link>
			</button>
		</main>
	);
}
