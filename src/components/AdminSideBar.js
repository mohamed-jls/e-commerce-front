import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = ({active}) => {
  return (
    <div style={styles.container}>
        {['users', 'products', 'charts'].map((link, index) => (
            <Link key={index} to={`/admin/${link}`} style={{...styles.link, ...(active === link ? styles.activeLink : {})}}>
                {link}
            </Link>
        ))}
    </div>
  )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '10px',
        width: '200px',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        borderRight: '1px solid #ccc'
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        padding: '10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease'
    },
    activeLink: {
        backgroundColor: '#007bff',
        color: '#fff'
    }
}

export default AdminSideBar