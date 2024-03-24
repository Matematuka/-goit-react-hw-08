import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { initialContacts } from "./utils/const";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("saved-contacts");
    if (!stringifiedContacts) return initialContacts;
    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });

  const [values, setValues] = useState("");

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(values.toLowerCase())
  );

  const onSearch = (evt) => {
    setValues(evt.target.value);
  };

  const onAdd = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={onAdd} />
      <SearchBox value={values} onSearch={onSearch} />
      <ContactList onDelete={deleteContact} contacts={filteredContacts} />
    </div>
  );
}

export default App;
