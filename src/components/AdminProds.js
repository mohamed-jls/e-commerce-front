import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/ProdApi';
import AdminAddProduct from './AdminAddProduct';
import AdminDeleteProduct from './AdminDeleteProduct';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const containerStyle = {
        padding: '16px',
        backgroundColor: '#f3f4f6',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const headerStyle = {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '24px',
    };

    const gridStyle = {
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        listStyle: 'none',
        padding: '0',
        margin: '0',
        width: '100%',
    };

    const cardStyle = {
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        display: 'flex',
        gap: '3px'
    };

    const nameStyle = {
        fontSize: '18px',
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: '8px',
    };

    const detailStyle = {
        fontSize: '14px',
        color: '#4b5563',
        marginBottom: '4px',
    };

    const priceStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#10b981',
        marginBottom: '8px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Admin Products</h1>
            <ul style={gridStyle}>
                {products.map((product) => (
                    <li key={product._id} style={cardStyle}>
                        <img src={product.imageUrl} alt={product.name} style={{ width: '120px', height: '100%', marginBottom: '8px', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }} />
                        <div>
                            <h2 style={nameStyle}>{product.name}</h2>
                            <p style={priceStyle}>Price: ${product.price}</p>
                            <p style={detailStyle}>{product.description}</p>
                            <AdminDeleteProduct prodId={product._id} />
                        </div>


                    </li>
                ))}
            </ul>
            <AdminAddProduct />
        </div>
    );
};

const styles = {
    cardContent: {
        diplay: 'flex',
        flexDirection: 'column',
    }
}

export default AdminProducts;
