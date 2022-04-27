import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css"
import { fetchTodos } from "./components/toolkit/toolkitSlice";
import { useAppDispatch, useAppSelector } from "./components/hooks/redux";



function App() {
	// const [posts, setPosts] = useState([
	// 	{ title: "бб", id: 1, body: "бб" },
	// 	{ title: "аа", id: 2, body: "гг" },
	// 	{ title: "вв", id: 3, body: "уу" },
	// ])

	// const [selectedSort, setSelectedSort] = useState('')
	// const [searchQuery, setSearchQuery] = useState('')

	// const sortedPosts = useMemo(() => {
	// 	console.log("Fn")
	// 	if (selectedSort) {
	// 		return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
	// 	}
	// 	return posts
	// }, [selectedSort, posts])

	// const sortedAndSearchedPosts = useMemo(() => {
	// 	return sortedPosts.filter(post => post.title.includes(searchQuery))
	// }, [searchQuery, posts])
	// const createPost = (newPost) => {
	// 	setPosts([...posts, newPost])
	// }
	// const sortPosts = (sort) => {
	// 	setSelectedSort(sort);

	// 	console.log(sort)
	// }

	// const removePost = (post) => {
	// 	setPosts(posts.filter(p => p.id !== post.id))
	// }
	const dispatch = useAppDispatch()
	const status = useAppSelector(state => state.toolkit.status)
	const [value, setValue] = useState("")

	const isLoading = status === "loading"

	function btnClick() {
		dispatch(fetchTodos(value))
	}

	console.log(value)

	return (
		<div className="App">
			<input

				disabled={isLoading}
				className="input"
				style={{ margin: "15px" }}
				type="text"
				onChange={e => setValue(e.target.value)}
			/>
			<button
				disabled={isLoading}
				className="btn"
				onClick={btnClick}
			>
				Ввести логин
			</button>
			<div
				style={isLoading ? { color: "green" } : status === "rejected" ? { color: "red" } : { color: "green" }}
				className="div"
			>
				{isLoading ?
					"Loading....." :
					status === "resolved" ?
						"Comleted. Hello Admin" :
						status === "rejected" ?
							"You are not admin" :
							""
				}
			</div>

		</div >
	);
}

export default App;
