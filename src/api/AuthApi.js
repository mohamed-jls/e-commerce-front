import axios from 'axios'

export const auth = async (userToLog) => {
    try {
        const user = await axios.get(`${process.env.REACT_APP_API_URL}/users?email=${userToLog.email}&password=${userToLog.password}`)
        if (user) {
            return user
        } else {
            return false
        }
    } catch (err) {
        console.log(err)
    }
}

export const register = async (userToReg) => {
    try {
        const user = await axios.post(`${process.env.REACT_APP_API_URL}/users`, userToReg)
        if (user) {
            return user
        } else {
            return false
        }
    } catch (err) {
        console.log(err)
    }
}