import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";
import { selectIsSignedIn, selectUserName } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { apiLogOut } from "../../redux/auth/operations";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(apiLogOut());
  };

  const isSignedIn = useSelector(selectIsSignedIn);
  const userName = useSelector(selectUserName);
  return (
    <div>
      <header>
        <nav className={css.nav}>
          {isSignedIn ? (
            <>
              <NavLink className={getNavLinkClassName} to="/">
                Home
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/contacts">
                Contacts
              </NavLink>
              <div>
                <span>Hello, {userName}</span>
                <br />
                <button type="button" onClick={onLogOut}>
                  LogOut
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink className={getNavLinkClassName} to="/">
                Home
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/login">
                Login
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/register">
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
