import { AxiosError } from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'
import { loginApi, registerApi } from '@/services/user'
import { getUserFromLocalStorage, addUserToLocalStorage, removeUserFromLocalStorage } from '@/utils/localStorage'
import { User, RegisterPayload, LoginPayload, AuthState } from '@/interfaces/auth'

const initialState: AuthState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  isError: false,
}

export const registerUser = createAsyncThunk<User, RegisterPayload, { rejectValue: AxiosError }>(
  'auth/signup',
  async (registerPayload: RegisterPayload, { rejectWithValue }) => {
    try {
      const { data } = await registerApi(registerPayload)
      addUserToLocalStorage(data)
      return data
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err)
      }
      throw err
    }
  }
)

export const loginUser = createAsyncThunk<User, LoginPayload, { rejectValue: AxiosError }>(
  'auth/login',
  async (loginPayload: LoginPayload, { rejectWithValue }) => {
    try {
      const { data } = await loginApi(loginPayload)
      addUserToLocalStorage(data)
      return data
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err)
      }
      throw err
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      removeUserFromLocalStorage()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export const { logout } = authSlice.actions

export const selectAuth = (state: RootState): AuthState => state.auth

export default authSlice.reducer
