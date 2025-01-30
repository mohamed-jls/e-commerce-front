import React,{ useRef, useState} from 'react'
import { addProduct } from '../api/ProdApi'
import {useNavigate} from 'react-router-dom'

const AdminAddProduct = () => {

    const nav = useNavigate()

    const name = useRef()
    const description = useRef()
    const price = useRef()
    const category = useRef()
    const stock = useRef()
    const image = useRef()

    const [showForm , setShowForm] = useState(false)


    const handleSubmit = async () => {
        const product = {
            name: name.current.value,
            description: description.current.value,
            price: price.current.value,
            category: category.current.value,
            imageUrl: image.current.value,
            countInStock: stock.current.value
        }
        try{
            await addProduct(product)
        }catch(err){
            console.error(err)
        }finally{
            nav('/admin/products')
        }
    }

    return (
        <div>
            {!showForm ?
            <button style={styles.button} onClick={() => setShowForm(true)}>Add a product</button>
            :
            <form style={styles.form}>
                <button style={styles.closeBtn} onClick={()=> setShowForm(false)}>x</button>
                <input style={styles.input} type="text" placeholder='Name' ref={name}/>
                <input style={styles.input} type="text" placeholder='Description' ref={description}/>
                <input style={styles.input} type="number" placeholder='Price' ref={price}/>
                <select style={styles.input} ref={category}>
                    <option value="" selected>Select a category</option>
                    {[
                        'Electronics',
                        'Furniture',
                        'Sports',
                        'Accessories',
                        'Sportswear',
                    ].map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <input style={styles.input} type="number" placeholder='Stock' ref={stock}/>
                <input style={styles.input} type="text" placeholder='Image' ref={image}/>
                <button style={styles.button} onClick={handleSubmit}>Add Product</button>
            </form>}
        </div>
    )
}


const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 0 4px #ccc'
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
    closeBtn: {
        backgroundColor:'red',
        color: 'white',
        padding:'5px',
        border: 'none',
        borderRadius: '30px',
        position: 'absolute',
        top: '7px',
        right: '7px',
        width: '25px'
    }
};




export default AdminAddProduct