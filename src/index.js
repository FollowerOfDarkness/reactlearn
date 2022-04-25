import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import { store } from './components/toolkitReducer';

// const defaultState = {
// 	count: 5,
// }

// export const increment = (value) => ({type: "INCREMENT", payload: value})

// const reducer = (state = defaultState, action) => {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			state.count = state.count + action.payload
// 			//return { ...state, count: state.count + action.payload }
// 			return state
// 		case "DECREMENT":
// 			return { ...state, count: state.count - action.payload }
// 		default:
// 			return state
// 	}
// }

// const store = createStore(reducer)

// const defaultState = {
// 	value: "Text",
// }
// const INPUT = "INPUT"
// export const setInput = (value) => ({ type: INPUT, payload: value })

// const reducer = (state = defaultState, action) => {
// 	switch (action.type) {
// 		case "INPUT":
// 			return { ...state, value: action.payload }

// 		default:
// 			return state
// 	}
// }

// const store = createStore(reducer)
console.log(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

