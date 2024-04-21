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
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectisError);
  const loading = useSelector(selectisLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <Loader loading={loading} />
      {contacts.length !== 0 ? (
        <ContactList />
      ) : (
        <p>You have no any contacts yet</p>
      )}
      {error && <p>Oooops... something went wrong. Try reloading the page</p>}
    </div>
  );
}

export default App;
