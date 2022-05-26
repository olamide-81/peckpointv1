import axios from 'axios'

const API_URL = '/api/goals/'

// Create new goal
const createContact = async (contactData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, contactData, config)

  return response.data
}

// Get user goals
const getContact = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteContact = async (contactId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + contactId, config)

  return response.data
}

const contactService = {
  createContact,
  getContact,
  deleteContact
}

export default contactService