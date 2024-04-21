import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contactsOps";
import {
  selectContacts,
  selectisError,
  selectisLoading,
} from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectisError);
  const loading = useSelector(selectisLoading);
  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {<ContactList />}
    </div>
  );
}

export default App;
