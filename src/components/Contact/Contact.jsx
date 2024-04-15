import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice.js";
import { useDispatch } from "react-redux";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={css.userBox}>
      <ul className={css.userContact}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button
        onClick={() => {
          onDelete(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
