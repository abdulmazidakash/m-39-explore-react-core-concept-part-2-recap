import { useEffect, useState } from "react"

export default function Posts(){

	const [posts, setPosts] = useState([]);

	useEffect(()=>{

	}, [])
	return (
		<div className="">
			<h3>Posts: </h3>
		</div>
	)
}


/**
 * 1. Create a store to store the data
 * 2. Create  use effect with no dependencies
 * 3. fetch to load data
 */