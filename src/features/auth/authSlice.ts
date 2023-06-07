import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AxiosError } from "axios";
import { loginApi, registerApi } from "../../services/user";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import {
  KnownError,
  User,
  RegisterPayload,
  LoginPayload,
  AuthState,
} from "../../interfaces/auth";

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
      const response = await registerApi(registerPayload);
      const { data } = response;
      addUserToLocalStorage(data);
      return data;
    } catch (err: unknown) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }

      const error: AxiosError<KnownError> = err;
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
    const response = await loginApi(loginPayload);
    const { data } = response;
    addUserToLocalStorage(data);
    return data;
  } catch (err: unknown) {
    if (!(err instanceof AxiosError)) {
      throw err;
    }

    const error: AxiosError<KnownError> = err;
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
