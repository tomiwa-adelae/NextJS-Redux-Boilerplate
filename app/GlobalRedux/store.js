"use client";

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		// Here we have all our reducers
		post: postReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});

export default store;
