import { useDispatch } from "react-redux";
import css from "./LoginPage.module.css";
import { login } from "../../redux/auth/operations";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <LoginForm login={handleSubmit} />
    </div>
  );
};

export default LoginPage;
