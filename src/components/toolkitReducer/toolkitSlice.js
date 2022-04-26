import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const delay = ms => {
	return new Promise(res => setTimeout(() => res(), ms))
}
export const fetchTodos = createAsyncThunk(
	'toolkit/fetchTodos',
	async function () {
		const response = await delay(5000).then(() => { return "Login" })
		console.log(response)
		return response
	}
	// () => {
	// 	console.log('asd')
	// 	return fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response => response.json())

	// }
	// async (userId: number, thunkAPI) => {
	//   const response = await userAPI.fetchById(userId)
	//   return response.data
	// }
)

const toolkitSlice = createSlice({
	name: "toolkit",
	initialState: {
		value: "text",
		login: "",
		status: null
	},
	reducers: {
		setValue(state, action) {
			console.log(action)
			state.value = action.payload.value + action.payload.a
		}
	},
	extraReducers: {

		[fetchTodos.pending]: (state, action) => {

			state.status = "loading"
			console.log('Working pending')
		},
		[fetchTodos.fulfilled]: (state, action) => {
			state.status = "resolved";
			state.login = action.payload
			console.log('Working fulfilled')
		}
	}
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(fetchTodos.pending, (state, action) => {
	// 			state.status = "loading"
	// 			console.log('Working pending')
	// 		})
	// 		.addCase(fetchTodos.fulfilled, (state, action) => {
	// 			state.status = "resolved";
	// 			state.todos = action.payload
	// 			console.log('Working pending')
	// 		})
	// }
})

export default toolkitSlice.reducer
export const { setValue } = toolkitSlice.actions