import React, { useEffect, useState } from 'react'
import { getProduct } from '../api/ProdApi'
import { addProductToChart } from '../api/ChartApi'
import { deleteProductFromChart } from '../api/ChartApi'

const ChartProduct = ({ chartId, productId, quantity }) => {

    const [product, setProduct] = useState({})
    const [qte, setQte] = useState(quantity)

    useEffect(() => {
        async function fetchProd() {
            const res = await getProduct(productId)
            setProduct(res)
        }
        fetchProd()
    }, [productId])

    const handleIncrementQuantity = async () => {
        await addProductToChart(chartId, productId, qte + 1)
        setQte(qte + 1)
    }

    const handleDecrementQuantity = async () => {
        if (qte === 1) return
        await addProductToChart(chartId, productId, qte - 1)
        setQte(qte - 1)
    }

    const handleDeleteItem = async ()=>{
        await deleteProductFromChart(chartId, productId)
        window.location.reload()
    }

    return (
        <div style={styles.container}>
            <img style={styles.img} src={product.imageUrl} alt="" />
            <div style={styles.info}>
                <p style={styles.name}>{product.name}</p>
                <p style={styles.price}>{product.price}</p>
                <p style={styles.category}>{product.category}</p>
                <p style={styles.description}>{product.description}</p>
            </div>
            <div style={styles.quantity}>
                <button style={styles.btn} onClick={handleDecrementQuantity}>-</button>
                <p style={styles.quantity}>{qte}</p>
                <button style={styles.btn} onClick={handleIncrementQuantity}>+</button>
            </div>
            <button style={styles.delItem} onClick={handleDeleteItem}>Remove Item From Cart</button>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        border: '1px solid gray',
        borderRadius: '5px',
    },
    img: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
    },
    name: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: '8px',
    },
    price: {
        fontSize: '14px',
        color: '#77fc03',
        marginBottom: '4px',
    },
    category: {
        fontSize: '14px',
        color: '#4b5563',
        marginBottom: '4px',
    },
    description: {
        fontSize: '14px',
        color: '#4b5563',
        marginBottom: '4px',
    },
    quantity: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
    },
    btn: {
        fontSize: '14px',
        backgroundColor: '#d4c28a',
        color: 'white',
        marginBottom: '4px',
        border: '1px solid gray',
        borderRadius: '5px',
        width: '20px',
        height: '20px',
        cursor: 'pointer',
    },
    delItem: {
        fontSize: '14px',
        backgroundColor: 'red',
        color: 'white',
        marginBottom: '4px',
        cursor: 'pointer',
        border: 'none',
        margin: '10px',
        borderRadius: '5px',
        padding: '5px'
    },
    info:{
        padding: '5px'
    }
}

export default ChartProduct