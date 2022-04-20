import React, { useState } from "react";

import "./styles/App.css"

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
	const [posts, setPosts] = useState([
		{ title: "Javascript1", id: 1, body: "Description" },
		{ title: "Javascript2", id: 2, body: "Description" },
		{ title: "Javascript3", id: 3, body: "Description" },
		{ title: "Javascript4", id: 4, body: "Description" },
		{ title: "Javascript5", id: 5, body: "Description" },
	])
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const addNewPost = (event) => {

		event.preventDefault()
		const newPost = {
			title, body
		}

		console.log(newPost)
	}

	return (
		<div className="App">
			<form>
				<MyInput
					value={title}
					type="text"
					placeholder="Название поста"
					onChange={x => setTitle(x.target.value)}
				/>
				<MyInput
					value={body}
					type="text"
					placeholder="Описание поста"
					onChange={x => setBody(x.target.value)}
				/>
				<MyButton onClick={addNewPost}>Create post121</MyButton>
			</form>
			<PostList posts={posts} title={"Hello"} />
		</div>
	);
}

export default App;
