import React, { useContext, useRef, useState } from 'react'
import { userContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {

    const nav = useNavigate()

    const email = useRef();
    const password = useRef();

    const [error, setError] = useState(false)

    const {login} = useContext(userContext)

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userToLog = {
            email: email.current.value,
            password: password.current.value
        }
        const res = await login(userToLog)
        if(!res){
            setError(true)
            return
        }
        nav('/')

    }
    
    return (

    <div style={styles.page}>
        <h1>Login</h1>
        <form action="" style={styles.form}>
            <input type="email" placeholder='email' style={styles.input} ref={email}/>
            <input type="password" placeholder='password' style={styles.input} ref={password}/>
            <button style={styles.button} onClick={handleSubmit}>Login</button>
            {error && <p style={{color: 'red'}}>Invalid email or password</p>}
        </form>
        <p>Don't have an account? <a style={styles.link} href="/register">Register</a></p>
    </div>
  )
}

const styles = {
    page:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '80%',
        backgroundColor: '#ccc',
        padding: '20px',
        boxSizing: 'border-box',
        margin: '0',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '400px',
        height: '300px',
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
        padding: '20px',
        boxSizing: 'border-box',
        margin: '20px',
    },
    input: {
        width: '100%',
        height: '40px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        padding: '10px',
        boxSizing: 'border-box',
        margin: '10px',
    },
    button: {
        width: '100%',
        height: '40px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        padding: '10px',
        boxSizing: 'border-box',
        margin: '10px',
        backgroundColor: '#ccc',
        color: 'white',
        cursor: 'pointer',
    },
    link: {
        color: 'blue',
        textDecoration: 'none',
    }
}

export default Login