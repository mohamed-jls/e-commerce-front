import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div style={styles.container}>
            <div style={styles.heroContent}>
                <div>
                    <h3 style={styles.title}>Welcome to our store</h3>
                    <p style={styles.subtitle}>Discover our latest products</p>
                </div>
                <div>
                    <Link to="/products" style={styles.button}>Shop Now</Link>
                    <Link to="/about" style={styles.button}>Learn More</Link>
                </div>
            </div>

        </div>
    )
}

const styles = {
    container: {
        backgroundImage: 'url("https://segwitz.com/wp-content/uploads/2021/09/why-ecommerce-need-mobile-apps.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        color: '#fff',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    heroContent: {
        display:'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '0 20px',
        width: '50%'

    },
    title: {
        fontSize: '30px',
        margin: '0'
    },
    subtitle: {
        fontSize: '20px'
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'background-color 0.3s ease'
    }

}

export default Hero