import { createSlice } from "@reduxjs/toolkit"


const toolkitSlice = createSlice({
	name: "toolkit",
	initialState: {
		value: "text"
	},
	reducers: {
		setValue(state, action) {
			console.log(action)
			state.value = action.payload.value + action.payload.a
		}
	}
})
console.log(toolkitSlice.reducer)
export default toolkitSlice.reducer
export const { setValue } = toolkitSlice.actions