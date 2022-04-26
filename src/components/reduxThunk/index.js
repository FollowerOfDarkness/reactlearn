import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { customerReducer } from "./customerReducer";






const rootReducer = combineReducers({

	customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))