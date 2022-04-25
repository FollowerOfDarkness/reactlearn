import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
	const dispatch = useDispatch()
	const count = useSelector(store => store.count)
	console.log(count)
	const increment = () => {
		dispatch({ type: "INCREMENT", payload: 1 })
	}
	const increment1 = () => {
		dispatch(increment(4))
	}
	const decrement = () => {
		dispatch({ type: "DECREMENT", payload: 1 })
	}
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment} >Increment</button>
			<button onClick={decrement} >Decrement</button>
		</div>
	)
}

export default Counter;