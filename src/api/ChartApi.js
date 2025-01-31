import axios from 'axios'

export const getChart = async (chartId) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/charts/${chartId}`)
    return data
}

export const addProductToChart = async (chartId, productId, qte) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/charts/${chartId}/product/${productId}`, { quantity: qte })
    return data
}

export const deleteProductFromChart = async (chartId, productId) => {
    try {
        const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/charts/${chartId}/product/${productId}`)
        return data
    }catch (error) {
        console.error(error)
    }
    
}