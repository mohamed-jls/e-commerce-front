import React from 'react'

const ProductGridItem = ({prod}) => {
  return (
    <div style={styles.container}>
        <img src={prod.imageUrl} alt={prod.name} style={styles.img}/>
        <h3>{prod.name}</h3>
        <p>{prod.price}</p>
        <p>{prod.description}</p>
        <p>{prod.category}</p>
        <p>{prod.countInStock? 'In Stock': 'Out of Stock'}</p>
    </div>
  )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        gap: '3px'
    },
    img: {
        width: '100px',
        height: 'auto'
    }
}

export default ProductGridItem