import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = async () => {
  const response = await axios.get(BASE_URL)
  return response.data
}

export const createUser = async user => {
  const response = await axios.post(BASE_URL, user)
  return {...user, id: response.data.id}
}

export const updateUser = async user => {
  const response = await axios.put(`${BASE_URL}/${user.id}`, user)
  return response.data
}

export const deleteUser = async id => {
  await axios.delete(`${BASE_URL}/${id}`)
}
