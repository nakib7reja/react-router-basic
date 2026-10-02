import React from 'react'
import { useLoaderData } from 'react-router'

const Users = () => {
    const users  = useLoaderData()
    console.log(users)
    return (
        <div>
            This is Users page
        </div>
    )
}

export default Users