import React, { useContext } from 'react'
import { addProductToChart } from '../api/ChartApi'
import { userContext } from '../contexts/AuthContext'

const AddToChart = ({ productId }) => {

    const user = useContext(userContext)
    const chartId = user.user?.chart



    const handleAddToCart = async () => {
        if (!user.user) return alert('you must login first')
        if (!chartId) return console.log('no chart id');
        const result = await addProductToChart(chartId, productId, 1)
        console.log(result);
    }

    return (
        <button style={styles.button} onClick={handleAddToCart}>
            Add to Cart
        </button>
    )
}

const styles = {
    button: {
        backgroundColor: '#3afc81',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'background-color 0.3s ease'
    }
}

export default AddToChart