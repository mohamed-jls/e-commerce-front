import React, { useContext } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { userContext } from '../contexts/AuthContext'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import AdminProds from '../components/AdminProds'
import AdminUsers from '../components/AdminUsers'

const Admin = () => {
    const { user } = useContext(userContext)

    if (user?.role === 'USERS') return <h1>you have no admin access</h1>

    return (
        <div style={styles.container}>
            <AdminSideBar />
            <Routes>
                <Route path='/products' element={<AdminProds />} />
                <Route path='/users' element={<AdminUsers />} />
            </Routes>
        </div>

    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh'
    }
}

export default Admin