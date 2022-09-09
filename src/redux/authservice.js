import axios from 'axios'
import APIURL from '../../src/APIURL'


// Register user
const register = async (userdata) => {
  const response = await axios.post(APIURL.API_URLREG, userdata)
  if (response.data) {
  }
}

// Login user
const login = async (userData) => {
  const response = await axios.post(APIURL.API_URLLOG, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.clear()
}

const authService = {
  register,
  logout,
  login
}

export default authService