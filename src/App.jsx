"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./styles/App.css");
const toolkitSlice_1 = require("./components/toolkit/toolkitSlice");
const redux_1 = require("./components/hooks/redux");
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
    const dispatch = (0, redux_1.useAppDispatch)();
    const status = (0, redux_1.useAppSelector)(state => state.toolkit.status);
    const [value, setValue] = (0, react_1.useState)("");
    const isLoading = status === "loading";
    function btnClick() {
        dispatch((0, toolkitSlice_1.fetchTodos)(value));
    }
    console.log(value);
    return (<div className="App">
			<input disabled={isLoading} className="input" style={{ margin: "15px" }} type="text" onChange={e => setValue(e.target.value)}/>
			<button disabled={isLoading} className="btn" onClick={btnClick}>
				Ввести логин
			</button>
			<div style={isLoading ? { color: "green" } : status === "rejected" ? { color: "red" } : { color: "green" }} className="div">
				{isLoading ?
            "Loading....." :
            status === "resolved" ?
                "Comleted. Hello Admin" :
                status === "rejected" ?
                    "You are not admin" :
                    ""}
			</div>

		</div>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map