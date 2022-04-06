import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import contactService from './contactService'

const initialState = {
  contact: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new goal
export const createContact = createAsyncThunk(
  'contact/create',
  async (contactData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await contactService.createContact(contactData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user goals
export const getContact = createAsyncThunk(
  'contact/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.getContact(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user goal
export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await contactService.deleteContact(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contact.push(action.payload)
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getContact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contact = action.payload
      })
      .addCase(getContact.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contact = state.contact.filter(
          (contact) => contact._id !== action.payload.id
        )
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = contactSlice.actions
export default contactSlice.reducer