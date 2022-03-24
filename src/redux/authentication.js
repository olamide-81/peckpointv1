// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import authService from './authservice'

// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'

const config = useJwt.jwtConfig

const initialUser = () => {
  const item = window.localStorage.getItem('userData')
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : {}
}

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
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

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: initialUser(),
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
    handleLogin: (state, action) => {
      state.userData = action.payload
      state[config.storageTokenKeyName] = action.payload[config.storageTokenKeyName]
      state[config.storageRefreshTokenKeyName] = action.payload[config.storageRefreshTokenKeyName]
      localStorage.setItem('userData', JSON.stringify(action.payload))
      localStorage.setItem(config.storageTokenKeyName, JSON.stringify(action.payload.accessToken))
      localStorage.setItem(config.storageRefreshTokenKeyName, JSON.stringify(action.payload.refreshToken))
    },
    handleLogout: state => {
      state.userData = {}
      state[config.storageTokenKeyName] = null
      state[config.storageRefreshTokenKeyName] = null
      // ** Remove user, accessToken & refreshToken from localStorage
      localStorage.removeItem('userData')
      localStorage.removeItem(config.storageTokenKeyName)
      localStorage.removeItem(config.storageRefreshTokenKeyName)
    },
    extraReducers: (builder) => {
      builder
        .addCase(register.pending, (state) => {
          state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.userData = action.payload
          state[config.storageTokenKeyName] = action.payload[config.storageTokenKeyName]
          state[config.storageRefreshTokenKeyName] = action.payload[config.storageRefreshTokenKeyName]
          localStorage.setItem('userData', JSON.stringify(action.payload))
          localStorage.setItem(config.storageTokenKeyName, JSON.stringify(action.payload.accessToken))
          localStorage.setItem(config.storageRefreshTokenKeyName, JSON.stringify(action.payload.refreshToken))
        })
        .addCase(register.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
        .addCase(login.pending, (state) => {
          state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
        .addCase(logout.fulfilled, (state) => {
          state.user = null
        })
    }
  }
})

export const { handleLogin, handleLogout, reset } = authSlice.actions

export default authSlice.reducer
