import React from 'react'
import { Link } from 'react-router';

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
        <div className='rounded-2xl my-2 bg-blue-200 p-2'>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link className='btn btn-primary btn-sm px-5 py-0 mt-2' to={`/users/${id}`}>Show Details</Link>
        </div>
    )
}

export default User