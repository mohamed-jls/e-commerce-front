import React,{createContext, useEffect, useState} from 'react'
import Sidebar from '../components/Sidebar'
import ProductGrid from '../components/ProductGrid'

export const productsContext = createContext()

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <productsContext.Provider value={{products, setProducts}}>
            <div>
                <Sidebar />
                <ProductGrid/>
            </div>
        </productsContext.Provider>
        
    )
}

export default Products