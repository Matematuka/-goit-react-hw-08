import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
} from "../../utils/const";
import css from "./RegistrationForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
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

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Enter your full Name" />
            <ErrorMessage className={css.error} name="name" component="p" />
          </label>
          <br />
          <label>
            <span>Email</span>
            <Field type="text" name="email" placeholder="colt@gmail.com" />
            <ErrorMessage className={css.error} name="email" component="p" />
          </label>
          <br />
          <label>
            <span>Password</span>
            <div className={css.passwordField}>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="*******"
              />
              <button
                className={css.showPasswordButton}
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <ErrorMessage className={css.error} name="password" component="p" />
          </label>
          <button className={css.registerBtn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
