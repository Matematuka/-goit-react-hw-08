import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

const ContactList = ({contacts, onDelete}) => {
    return (
        <div><ul className={css.contactList}>{contacts.map((contact) => (<li className={css.listItem} key={contact.id}><Contact onDelete={onDelete} data={contact} /></li>
        ))}</ul></div>
    );
}

export default ContactList