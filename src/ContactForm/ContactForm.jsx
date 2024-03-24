import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { FORM_INITIAL_VALUES, phoneRegExp } from "../utils/const";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(40, "Too Long!"),
    number: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(2, "Too Short!")
      .max(20, "Too Long!"),
  });
  return (
    <Formik
      initialValues={{ FORM_INITIAL_VALUES }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <label className={css.formItem}>
          <span className={css.inputName}>Name</span>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Bruce Wayne"
          />

          <ErrorMessage className={css.formErr} name="name" component="p" />
        </label>

        <label className={css.formItem}>
          <span className={css.inputName}>Number</span>
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            placeholder="123-45-67"
          />
          <ErrorMessage className={css.formErr} name="number" component="p" />
        </label>
        <button className={css.formBtn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
