import React from 'react'

const ProductGridItem = ({ prod }) => {
    return (
        <div style={styles.container}>
            <div style={styles.imgContainer}> 
                <img src={prod.imageUrl} alt={prod.name} style={styles.img} />
            </div>
            <h3>{prod.name}</h3>
            <p style={styles.p}>{prod.price}</p>
            <p style={styles.desc}>{prod.description}</p>
            <p style={styles.p}>{prod.category}</p>
            <p style={prod.countInStock?styles.inStock: styles.outOfStock}>{prod.countInStock ? 'In Stock' : 'Out of Stock'}</p>
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
    }
}

export default ProductGridItem