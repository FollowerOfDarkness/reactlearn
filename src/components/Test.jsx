import React from "react";


export const Test = (props) => {

	function func(event) {
		console.log(event); // объект с событием
	}

	return <div>
		<button onClick={func}>act</button>
	</div>;
}