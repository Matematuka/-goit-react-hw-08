import { createSlice } from "@reduxjs/toolkit";
import {
  apiAddContact,
  apiGetContacts,
  apiDeleteContact,
} from "./operations.js";
import { logout } from "../auth/operations.js";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  extraReducers: (builder) =>
    builder
      // GET Contacts
      .addCase(apiGetContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(apiGetContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      // ADD  Contact
      .addCase(apiAddContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(apiAddContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      // DELETE Contact
      .addCase(apiDeleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
