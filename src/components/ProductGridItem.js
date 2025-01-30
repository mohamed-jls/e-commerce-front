import React, { use } from 'react'
import AddToChart from './AddToChart'
import { useEffect } from 'react'
import { getProduct } from '../api/ProdApi'
import { useState } from 'react'

const ProductGridItem = ({ prod }) => {

    const [product ,setProduct] = useState(prod)

    useEffect(() => {
        async function fetchProd(){
            const res = await getProduct(prod)
            setProduct(res)
        }
        if(typeof prod === 'string'){
            fetchProd()
        }
    }, [])

    return (
        <div style={styles.container}>
            <div style={styles.imgContainer}> 
                <img src={product.imageUrl} alt={product.name} style={styles.img} />
            </div>
            <h3>{product.name}</h3>
            <p style={styles.p}>{product.price}</p>
            <p style={styles.desc}>{product.description}</p>
            <p style={styles.p}>{product.category}</p>
            <p style={product.countInStock?styles.inStock: styles.outOfStock}>{product.countInStock ? 'In Stock' : 'Out of Stock'}</p>
            {product.countInStock ? <AddToChart productId={product._id}/> : <button style={styles.btn}>unavailable</button> }
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
        gap: '3px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
    },
    img: {
        width: '100%',
        height: '200px'
    },
    p: {
        fontSize: '12px',
    },
    imgContainer: {
        width: '100%',
        height: '200px',
        overflow: 'hidden'
    },
    inStock: {
        fontSize: '12px',
        color: 'green'
    },
    outOfStock: {
        fontSize: '12px',
        color: 'red'
    },
    desc: {
        fontSize: '12px',
        color: 'gray'
    },
    btn: {
        backgroundColor: 'gray',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px'
    }
}

export default ProductGridItem