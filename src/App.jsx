import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyInput1 from "./components/UI/input/MyInput1";
import "./styles/App.css"
import { fetchCustomers } from "./components/reduxThunk/customer";
import { fetchTodos } from "./components/toolkitReducer/toolkitSlice";



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
	const value = useSelector(state => state.toolkit.value)
	const dispatch = useDispatch()
	const login = useSelector(state => state.toolkit.login)
	const status = useSelector(state => state.toolkit.status)
	console.log(status)
	function btnClick() {

		dispatch(fetchTodos())
		if (status == "loading") {
			console.log("loading....")
		}
		console.log(value, login, status)
	}
	return (
		<div className="App">
			<input
				style={{ margin: "15px" }}
				type="text"
				placeholder={value}
			/>
			<button onClick={() => btnClick()}>
				Ввести логин
			</button>





			{/* <Test number={123} />
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
			{sortedAndSearchedPosts.length !== 0
				? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Hello"} />
				: <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
			} */}

		</div >
	);
}

export default App;
