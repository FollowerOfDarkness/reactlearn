// import { addUsers } from "./customerReducer"

// export const fetchCustomers = () => {
// 	return dispatch => {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then(response => response.json())
// 			.then(json => dispatch(addUsers(json)))
// 	}
// }

// const fetchUserById = createAsyncThunk(
// 	'users/fetchByIdStatus',
// 	() => {
// 		return fetch('https://jsonplaceholder.typicode.com/users')
// 			.then(response => response.json())
// 	}
// 	// async (userId: number, thunkAPI) => {
// 	//   const response = await userAPI.fetchById(userId)
// 	//   return response.data
// 	// }
//  )