import React from 'react'
import { useLoaderData } from 'react-router'

const UserDetails = () => {
    const userData = useLoaderData()
    const { name, username, email, address, phone, website, company } = userData
    console.log(userData)
    return (
        <div className='card my-5 p-5 bg-cyan-200'>
            <h1 className='bg-green-400 rounded text-white p-2'>User details here</h1>
            <h1 className='text-xl'>Name: {name}</h1>
            <p>User Name: {username}</p>
            <p>Email: {email}</p>
            <p>Celll: {phone}</p>
            <p>website: {website}</p>
        </div>
    )
}

export default UserDetails