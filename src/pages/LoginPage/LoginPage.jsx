import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MIN_CHAR_PASSWORD_VALIDATION } from "../../utils/const";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";
// import { useDispatch } from "react-redux";

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
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
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        <Form>
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
