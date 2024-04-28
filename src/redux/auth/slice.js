import { createSlice } from "@reduxjs/toolkit";
import { apiLogOut, apiLogin, apiRefresh, apiRegistration } from "./operations";
// import { addContact, fetchContacts, deleteContact } from "./operations.js";

const initialState = {
  userData: {
    name: null,
    email: null,
  },
  token: null,
  isSignedIn: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(apiRegistration.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRegistration.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLogin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiRefresh.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiRefresh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload;
      })
      .addCase(apiRefresh.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiLogOut.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiLogOut.fulfilled, () => {
        return initialState;
      })
      .addCase(apiLogOut.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export const authReducer = authSlice.reducer;
