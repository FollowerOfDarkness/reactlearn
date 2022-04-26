

const defaultState = {
	customers: []
}


export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "USERS":
			return { ...state, customers: [...state.customers, ...action.payload] }
		default:
			return state
	}
}

export const addUsers = (payload) => ({ type: "USERS", payload })