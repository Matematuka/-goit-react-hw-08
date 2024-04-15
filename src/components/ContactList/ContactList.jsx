import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const selectContact = useSelector(selectContacts);
  const selectFilterName = useSelector(selectNameFilter);

  const filteredContacts = selectContact.filter((contact) =>
    contact.name.toLowerCase().includes(selectFilterName.toLowerCase())
  );
  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.listItem} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
