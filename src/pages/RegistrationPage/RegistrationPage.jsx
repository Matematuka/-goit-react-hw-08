import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
} from "../../utils/const";
import { apiRegistration } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiRegistration(values));
    actions.resetForm();
  };

  const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required!")
      .max(
        MAX_CHAR_NAME_VALIDATION,
        `Your user name must be less than ${MAX_CHAR_NAME_VALIDATION} characters!`
      ),
    email: Yup.string()
      .required("Email address is required!")
      .email("You must enter valid email address!"),
    password: Yup.string()
      .required("Password is required!")
      .min(
        MIN_CHAR_PASSWORD_VALIDATION,
        `The password must contain at least ${MIN_CHAR_PASSWORD_VALIDATION} characters!`
      ),
  });

  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Enter your full Name" />
            <ErrorMessage name="name" component="p" />
          </label>
          <br />
          <label>
            <span>Email</span>
            <Field type="text" name="email" placeholder="colt@gmail.com" />
            <ErrorMessage name="email" component="p" />
          </label>
          <br />
          <label>
            <span>Password</span>
            <Field type="password" name="password" placeholder="*******" />
            <ErrorMessage name="password" component="p" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
