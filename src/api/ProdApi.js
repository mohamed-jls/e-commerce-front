import axios from 'axios'


export const getProducts = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/products`)
    return data
}

export const addProduct = async (product) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/products`, product)
    return data
}

export const updateProduct = async (id, product) => {
    const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/products/${id}`, product)
    return data
}

export const deleteProduct = async (id) => {
    const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`)
    return data
}