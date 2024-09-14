import React from 'react'
import { useUser } from '../context/UserContext'

export default function Profile() {
    const { user } = useUser();

    if (!user) {
        return <div>Loading user data...</div>;
    }

  return (
    <div>
        <h1>Profile</h1>
        <h2>Name: {user.name}</h2>
        <h2>Email: {user.email}</h2>
    </div>
  )
}
