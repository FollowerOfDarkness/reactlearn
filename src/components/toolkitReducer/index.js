import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";
import toolkitSlice from "./toolkitSlice";




export const store = configureStore({
	reducer: { toolkit: toolkitSlice },
})
