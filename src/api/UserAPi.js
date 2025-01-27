import axios from 'axios';

export const getUsers = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
  return data;
}

export const updateUser = async (id, user) => {
  const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/users/${id}`, user);
  return data;
}

export const addUser = async (user) => {
  const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/users`, user);
  return data;
}

export const deleteUser = async (id) => {
  const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`);
  return data;
}