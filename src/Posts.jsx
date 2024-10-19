import { useEffect, useState } from "react"

export default function Posts(){

	const [posts, setPosts] = useState([]);

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))
	}, [])
	
	return (
		<div className="">
			<h3>Posts: {posts.length}</h3>

			{
				posts.map(post => <Post></Post>)
			}
		</div>
	)
}


/**
 * 1. Create a store to store the data
 * 2. Create  use effect with no dependencies
 * 3. fetch to load data
 */