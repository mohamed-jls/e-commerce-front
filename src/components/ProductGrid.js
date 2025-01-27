import React from 'react'
import { useContext } from 'react'
import { productsContext } from '../pages/Products'
import ProductGridItem from './ProductGridItem'

const ProductGrid = () => {

    const { filteredProducts} = useContext(productsContext)

  return (
    <div style={styles.container}>
        {filteredProducts.map((prod, index) => <ProductGridItem prod={prod} key={index}/>)}
    </div>
  )
}

const styles = {
    container: {
        display:'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3px',
        width: '100%',
        height: '100%'
    }
}

export default ProductGrid