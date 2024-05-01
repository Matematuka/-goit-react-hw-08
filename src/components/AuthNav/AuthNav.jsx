import { NavLink } from "react-router-dom";

import css from "./AuthNav.module.css";

const AuthNav = ({ getNavLinkClassName }) => {
  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={getNavLinkClassName}>
        Register
      </NavLink>
      <NavLink to="/login" className={getNavLinkClassName}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
