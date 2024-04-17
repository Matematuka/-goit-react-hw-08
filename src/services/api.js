import axios from "axios";

axios.defaults.baseURL = "https://662028153bf790e070af27e5.mockapi.io";

export const getContacts = async () => {
  const response = await axios.get("/contacts");
  return response.data;
};

export const postContact = async (contact) => {
    const response = await axios.post("/contacts", contact);
    return response.data;
}

export const removeContact = async (id) => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
}
