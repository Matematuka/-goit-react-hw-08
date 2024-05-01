import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const isSignedIn = useSelector(selectIsLoggedIn);
  return isSignedIn ? <Navigate to="/contacts" replace /> : children;
};

export default RestrictedRoute;
