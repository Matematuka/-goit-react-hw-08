import { createSelector } from "@reduxjs/toolkit";

export const selectIsSignedIn = (state) => state.auth.isSignedIn;
export const selectUserName = (state) => state.auth.userData.name;
export const selectUserEmail = (state) => state.auth.userData.email;
export const selectToken = (state) => state.auth.token;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.isError;

export const selectUserData = createSelector(
  [selectUserName, selectUserEmail],
  (selectUserName, selectUserEmail) => {
    return {
      name: selectUserName,
      email: selectUserEmail,
    };
  }
);
