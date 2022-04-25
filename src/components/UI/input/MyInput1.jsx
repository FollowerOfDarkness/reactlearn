import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../toolkitReducer/toolkitSlice";



const MyInput1 = () => {

	const dispatch = useDispatch()
	const value = useSelector(state => state.toolkit.value)
	// console.log(value)
	//console.log(setValue(value))

	console.log(setValue(value))
	const onChangeInput = (e) => {
		const value = e.target.value
		dispatch(setValue({ value, a: 14 }))
	}

	return (
		<div>
			<h1>{value}</h1>
			<input
				type="text"
				onChange={onChangeInput}
			/>
		</div>
	)
}


export default MyInput1;