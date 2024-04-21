export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;
export const selectisLoading = (state) => state.contacts.loading;
export const selectisError = (state) => state.contacts.error;