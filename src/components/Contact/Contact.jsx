import css from "./Contact.module.css";

const Contact = ({ data, onDelete }) => {
  return (
    <div className={css.userBox}>
      <ul className={css.userContact}>
        <li>{data.name}</li>
        <li>{data.number}</li>
      </ul>
      <button
        onClick={() => {
          onDelete(data.id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
