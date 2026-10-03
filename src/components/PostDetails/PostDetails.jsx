import React from 'react'
import { useLoaderData } from 'react-router'

const PostDetails = () => {
    const post = useLoaderData()
    const { title, body } = post
    return (
        <div className='card bg-fuchsia-300 my-3 p-3'>
            <h2 className='bg-green-200 rounded-2xl p-2 text-2xl text-gray-900'>Post details are here</h2>
            <p className='bg-red-200 my-2 p-2 rounded-2xl'>Title: {title}</p>
            <p>{body}</p>
        </div>
    )
}

export default PostDetails