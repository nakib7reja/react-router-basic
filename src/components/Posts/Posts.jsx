import React from 'react'
import { useLoaderData } from 'react-router'
import Post from '../Post/Post'

const Posts = () => {
    const posts = useLoaderData()
    console.log(posts)
    return (
        <div>
            <h1>All Posts are here</h1>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    )
}

export default Posts