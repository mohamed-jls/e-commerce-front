import React, { useContext } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { userContext } from '../contexts/AuthContext'

const Admin = () => {
    const {user} = useContext(userContext)
    console.log(user)
  return (
    <div>
        {user.role === 'ADMIN'?<AdminSideBar/>:<h1>you have no admin access</h1>}
    </div>
  )
}

export default Admin