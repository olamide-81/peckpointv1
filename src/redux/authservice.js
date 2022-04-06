import axios from 'axios'

const API_URL = 'http://api.peckpoint.com/api/v1/create-account'

// Register user
const register = async (userdata) => {
  const response = await axios.post(API_URL, userdata)

  if (response.data) {
    console.log('created successfully')
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post("http://api.peckpoint.com/api/v1/login", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login
}

export default authService