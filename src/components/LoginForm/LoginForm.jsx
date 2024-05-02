import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MIN_CHAR_PASSWORD_VALIDATION } from "../../utils/const";
import css from "./LoginForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    console.log(values);
    actions.resetForm();
  };

  const RegistrationSchema = Yup.object().shape({
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
    <>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        <Form>
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
          <button className={css.loginBtn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
