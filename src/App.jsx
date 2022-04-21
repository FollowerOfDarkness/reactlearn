import React, { useMemo, useRef, useState } from "react";

import "./styles/App.css"

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import { MySelect } from "./components/UI/select/MySelect";


function App() {
	const [posts, setPosts] = useState([
		{ title: "бб", id: 1, body: "бб" },
		{ title: "аа", id: 2, body: "гг" },
		{ title: "вв", id: 3, body: "уу" },
	])

	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	const sortedPosts = useMemo(() => {
		console.log("Fn")
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		}
		return posts
	}, [selectedSort, posts])
	// function getSortedPosts() {
	// 	console.log("Fn")
	// 	if (selectedSort) {
	// 		return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
	// 	}
	// 	return posts
	// }
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}
	const sortPosts = (sort) => {
		setSelectedSort(sort);

		console.log(sort)
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}
	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 5px' }} />
			<div>
				<MyInput
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					placeholder='Serch...'
				/>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue="сортировка"
					options={[
						{ value: 'title', name: 'По названию' },
						{ value: 'body', name: 'По описанию' }
					]}
				/>

			</div>
			{posts.length !== 0
				? <PostList remove={removePost} posts={sortedPosts} title={"Hello"} />
				: <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
			}

		</div>
	);
}

export default App;
