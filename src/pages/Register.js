import React, { useRef, useState } from 'react'
import { register } from '../api/AuthApi'
import { Link } from 'react-router-dom'

const Register = () => {

    const [wrongPassword, setWrongPassword] = useState(false)
    const [registerSuccess, setRegisterSuccess] = useState(false)

    const name = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const handelPassChage = () => {
        if (password.current.value !== confirmPassword.current.value) {
            setWrongPassword(true)
        } else {
            setWrongPassword(false)
        }
    }

    const handelRegister = async ()=>{
        if(wrongPassword) return
        console.log('in register')
        const user = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        }
        try{
            const result = await register(user)
            if(result){
                setRegisterSuccess(true)
                console.log(result)
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <from style={styles.from}>
                <input style={styles.input} type="text" placeholder='name' ref={name} />
                <input style={styles.input} type="text" placeholder='email' ref={email} />
                <input style={styles.input} type="password" placeholder='password' ref={password} />
                <div style={{width :'300px'}}>
                    {wrongPassword && <p style={styles.errMsg}>pasword don't match</p>}
                    <input style={styles.input} type="password" placeholder='confirm password' ref={confirmPassword} onChange={handelPassChage}/>
                </div>

                <button style={styles.button} onClick={handelRegister}> Register</button>
            </from>
            {registerSuccess && <p style={styles.successMsg}>Register Success , go back to <Link to='/login'>Login</Link></p>}
        </div>
    )
}

const styles = {
    from: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '300px',
        margin: 'auto',
        marginTop: '100px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px #ccc',
    },
    input: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '93%',
    },
    button: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#ccc',
        cursor: 'pointer',
    },
    errMsg: {
        color: 'red',
        fontSize: '8px',
        margin: 0,
    },
    successMsg: {
        color: 'green',
        fontSize: '12px',
        margin: 0,
        textAlign: 'center',
    }
}

export default Register