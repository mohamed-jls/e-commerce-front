import React, { useEffect, useState, useRef } from 'react';
import { getUsers, addUser } from '../api/UserAPi';
import AdminUser from './AdminUser';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    let name = useRef()
    let email = useRef()
    let password = useRef()
    let role = useRef()

    const submitHandler = (e)=>{
        e.preventDefault()
        const user = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
           // role: role.current.value
        }
        addUser(user)
            .then((data) => {
                setUsers([...users, data]);
            })
            .catch((err) => {
                console.log(err);
            });
   
    }

    return (
        <div style={containerStyle}>
            {users.map((user, index)=>(
                <AdminUser user={user} key={index} />
            ))}
            
            <form style={styles.form}>
                <input style={styles.input} type="text" placeholder="Name" ref={name}/>
                <input style={styles.input} type="email" placeholder="Email" ref={email}/>
                <input style={styles.input} type="password" placeholder="Password" ref={password}/>
                <select style={styles.input} ref={role}>
                    <option value="ADMIN">Admin</option>
                    <option value="USER">User</option>
                </select>
                <button style={styles.button} type="submit" onClick={submitHandler}>Add User</button>
            </form>
        </div>
    );
};
const containerStyle = {
    padding: '16px',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    width: '100%',
};


const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
    },
    input: {
        marginBottom: '10px',
        padding: '8px',
        width: '300px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};


export default AdminUsers;
