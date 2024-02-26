"use client";
import { apiSlice } from "./apiSlice";
const URL = ""; // Whatever URL the backend is coming from

export const postApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPosts: builder.mutation({
			query: (data) => ({
				url: `${URL}/getposts`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetPostsMutation } = postApiSlice;
