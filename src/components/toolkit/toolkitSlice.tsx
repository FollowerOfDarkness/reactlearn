import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
const delay = (ms: number) => {
	return new Promise(res => setTimeout(() => res(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
export const fetchTodos = createAsyncThunk(
	'toolkit/fetchTodos',
	async function (x) {
		await delay(2000)
		if (x !== "Admin") {
			console.log("Error")
			throw "err"
		}
	}
)
enum Status {
	loading = "loading",
	resolved = "resolved",
	rejected = "rejected",
}

interface IState {
	value: string,
	status: string
}
const initialState: IState = {
	value: "text",
	status: ""
}
const toolkitSlice = createSlice({
	name: "toolkit",
	initialState,
	reducers: {
		setValue(state, action: PayloadAction<number>) {
			console.log(action)
			// state.value = action.payload.value + action.payload.a
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.pending, (state) => {
				state.status = "loading"
				console.log('Working pending')
			})
			.addCase(fetchTodos.fulfilled, (state) => {
				state.status = "resolved";
				console.log('Working fulfilled')
			})
			.addCase(fetchTodos.rejected, (state) => {
				state.status = "rejected";
				console.log('Working rejected')
			})
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