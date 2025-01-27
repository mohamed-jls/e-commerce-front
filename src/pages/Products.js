import React,{createContext, useEffect, useState} from 'react'
import Sidebar from '../components/Sidebar'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'

export const productsContext = createContext()

const Products = () => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setFilteredProducts(data)
        })
    }, [])

    return (
        <productsContext.Provider value={{products, setProducts, filteredProducts, setFilteredProducts}}>
            <div style={styles.container} >
                <Sidebar />
                <ProductGrid/>
            </div> 
            <Footer/>
        </productsContext.Provider>
       
        
    )
}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        height: '100%'
    }
}

export default Products