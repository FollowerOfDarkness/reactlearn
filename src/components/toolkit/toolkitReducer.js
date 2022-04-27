import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
	value: "Text",

}
export const input = createAction("INPUT")

export default createReducer(initialState, {
	[input]: function (state) {
		state.value = state.value
	}
})
