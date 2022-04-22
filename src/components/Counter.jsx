import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
	const dispatch = useDispatch()
	const count = useSelector(state => state.count)
	return (
		<div>
			<h1>{count}</h1>
			<button >Increment</button>
			<button >Decrement</button>
		</div>
	)
}

export default Counter;