import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.container}>
        {Array.isArray(contacts) &&
          contacts.map(({ id, name, number }) => (
            <li className={css.listItem} key={id}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
