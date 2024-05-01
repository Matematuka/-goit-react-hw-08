import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = ({ getNavLinkClassName, isSignedIn }) => {
  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/">
        Home
      </NavLink>
      {isSignedIn && (
        <NavLink className={getNavLinkClassName} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
