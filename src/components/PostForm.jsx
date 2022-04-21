import { useState } from "react";
import React from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' })

	const addNewPost = (event) => {
		event.preventDefault()
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		setPost({ title: '', body: '' })
	}

	return (

		<form>
			<MyInput
				value={post.title}
				type="text"
				placeholder="Название поста"
				onChange={x => setPost({ ...post, title: x.target.value })}
			/>
			<MyInput
				value={post.body}
				type="text"
				placeholder="Описание поста"
				onChange={x => setPost({ ...post, body: x.target.value })}
			/>
			<MyButton onClick={addNewPost}>Create post</MyButton>
		</form>

	)
}


export default PostForm;