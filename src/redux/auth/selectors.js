import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectToken = (state) => state.auth.token;
export const selectIsLoading = (state) => state.auth.loading;
export const selectIsError = (state) => state.auth.error;
export const selectRefreshing = (state) => state.auth.isRefreshing;

export const selectUserData = createSelector(
  [selectUserName, selectUserEmail],
  (selectUserName, selectUserEmail) => {
    return {
      name: selectUserName,
      email: selectUserEmail,
    };
  }
);
