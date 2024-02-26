"use client";

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" }); //If you are dealing with a backend, you'd add your api link here

export const apiSlice = createApi({
	baseQuery,
	tagTypes: [""], // For al your reducers
	endpoints: (builder) => ({}),
});
