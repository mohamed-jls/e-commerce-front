import React, { useState, useEffect } from 'react'
import { getProduct } from '../api/ProdApi'
import { getChart } from '../api/ChartApi'

const AdminUser = ({ user }) => {

    const [prods, setProds] = useState([])
    const [chart, setChart] = useState([])

    useEffect(()=>{
        async function getUserProds(){
            const chartData = await getChart(user.chart)
            setChart(chartData)
            const prodsPromises = chartData.products.map((prod) => getProduct(prod.product))

            const prodsData = await Promise.all(prodsPromises)
            setProds(prodsData)
        }

        getUserProds()
    },[])


    return (
        <div key={user._id} style={cardStyle}>
            <h2 style={nameStyle}>{user.name}</h2>
            <p style={detailStyle}>Email: {user.email}</p>
            <p style={detailStyle}>Role: {user.role}</p>
            <div style={styles.prods}>
                {prods.map((prod,index) => (
                    <div key={prod._id} style={styles.prod}>
                        <p style={detailStyle}>Product: {prod.name}</p>
                        <p style={detailStyle}>Quantity: {chart.products[index].quantity}</p>
                        <p style={detailStyle}>Price: ${prod.price}</p>
                    </div>
                ))}
            </div>
            <p style={detailStyle}>{`Total: ${prods.reduce((acc, pr, i)=> acc + pr.price * chart.products[i].quantity, 0)}`}</p>
        </div>
    )
}


const cardStyle = {
    padding: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
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


const styles = {
    prods: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    prod: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2px',
        padding: '2px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '180px',
        backgroundColor: '#f9fafb',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        fontSize: '10px'
    }
}

export default AdminUser