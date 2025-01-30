import React from 'react'
import { deleteProduct } from '../api/ProdApi'

const AdminDeleteProduct = ({ prodId }) => {

    const handleDelete = async () => {
        try {
            await deleteProduct(prodId)
        } catch (err) {
            console.error(err)
        } finally {
            window.location.reload()
        }
}
        return (
            <button style={styles.button} onClick={handleDelete}>Delete</button>
        )
    
}

const styles = {
    button: {
        padding: '8px 16px',
        backgroundColor: '#fa5765',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
}

export default AdminDeleteProduct