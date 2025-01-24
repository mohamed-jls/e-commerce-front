import React from 'react'

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
        <h1 style={styles.sidebarTitle}>Categories</h1>
        <p style={styles.sidebarItem}>Shirts</p>
        <p style={styles.sidebarItem}>Jeans</p>
        <p style={styles.sidebarItem}>Shoes</p>
        <p style={styles.sidebarItem}>Accessories</p>
    </div>
  )
}

const styles = {
    sidebar:{
        height:'100vh',
        width:'20%',
        backgroundColor:'#f0f0f0',
        position:'fixed',
        top:'50px',
        left:0,
        padding:'20px',
        boxSizing:'border-box'
    },
    sidebarTitle:{
        fontSize:'20px',
        fontWeight:'bold',
        marginBottom:'20px'
    },
    sidebarItem:{
        fontSize:'16px',
        margin:'10px'
    },
    sidebarItemActive:{
        fontSize:'16px',
        margin:'10px',
        fontWeight:'bold'
    }
}

export default Sidebar