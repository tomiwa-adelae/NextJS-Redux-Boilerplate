"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	posts: [
		{
			id: 1,
			title: "Post 1",
			details:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, officiis.",
		},
		{
			id: 2,
			title: "Post 2",
			details:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, officiis.",
		},
		{
			id: 3,
			title: "Post 3",
			details:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, officiis.",
		},
		{
			id: 4,
			title: "Post 4",
			details:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, officiis.",
		},
	],
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		getPosts: (state, action) => {
			state.posts = posts;
		},
	},
});

export const { getPosts } = postSlice.actions;

export default postSlice.reducer;
