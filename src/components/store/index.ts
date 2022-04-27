import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "../toolkit/toolkitSlice";

// const rootReducer = combineReducers({})


// export const setupStore = () => {
// 	configureStore({
// 		reducer: { toolkit: toolkitSlice }
// 	})
// }



export const store = configureStore({
	reducer: { toolkit: toolkitSlice },
})


export type AppStore = ReturnType<typeof setupStore>
export type RootStore = ReturnType<typeof toolkitSlice>