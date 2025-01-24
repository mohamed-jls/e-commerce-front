import React, { useContext } from 'react';
import { userContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = useContext(userContext);
    
    return (
        <div style={styles.container}>
            <img style={styles.logo}
                src="https://t3.ftcdn.net/jpg/02/98/18/60/360_F_298186090_Rimyxol4jsYvYbQg1i6sttQ5N3oebXgt.jpg"
                alt="logo"
            />
            <Link style={styles.link} to="/">Home</Link>
            <Link style={styles.link} to="/products">Products</Link>
            {user.user && <Link style={styles.link} to="/charts">Charts</Link>}
            {!user.user && <Link style={styles.link} to="/login">Login</Link>}
            {!user.user && <Link style={styles.link} to="/register">Register</Link>}
            {user.user && <Link style={styles.link}>Logout</Link>}
            {user.user?.role === 'ADMIN' && <Link style={styles.link} to="/admin">Admin Panel</Link>}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px',
        backgroundColor: '#f0f0f0',
    },
    logo: {
        width: '50px',
        height: '50px',
        marginRight: '10px',
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        marginRight: '10px',
    },
};


export default Navbar;
