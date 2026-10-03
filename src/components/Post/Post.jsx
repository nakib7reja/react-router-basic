import React from 'react'
import { Link } from 'react-router'

const Post = ({ post }) => {
    const { id, title } = post
    return (
        <div className='card bg-cyan-200 my-3 p-3'>
            <p>Title:{title}</p>
            <Link className='btn btn-secondary btn-sm mt-3' to={`/posts/${id}`}>
                <button>Details</button>
            </Link>
        </div>
    )
}

export default Post