import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { axiosClient } from "../../utils/axios";
import { AxiosError } from "axios";
import type { RootState } from "../../app/store";

export interface KnownError {
  msg: string;
}

export interface User {
  user: {
    userId: string;
    name: string;
    email: string;
  };
  token: string;
  refreshToken?: string;
  error?: KnownError;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthState {
  isLoading: boolean;
  user: User | null;
  isError: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  isError: false,
};

export const registerUser = createAsyncThunk<
  User,
  RegisterPayload,
  { rejectValue: KnownError }
>(
  "auth/signup",
  async (registerPayload: RegisterPayload, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/auth/register", registerPayload);
      const { data } = response;
      addUserToLocalStorage(data);
      return data;
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
});

export const loginUser = createAsyncThunk<
  User,
  LoginPayload,
  { rejectValue: KnownError }
>("auth/login", async (loginPayload: LoginPayload, { rejectWithValue }) => {
  try {
    const response = await axiosClient.post("/auth/login", loginPayload);
    const { data } = response;
    addUserToLocalStorage(data);
    return data;
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { logoutUser } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
