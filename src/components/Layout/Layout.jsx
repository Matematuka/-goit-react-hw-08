import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";
import { selectIsSignedIn, selectUserName } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { apiLogOut } from "../../redux/auth/operations";
import { useState } from "react";
import Modal from "../Modal/Modal";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onLogOut = () => {
    dispatch(apiLogOut());
    setIsModalOpen(false);
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
              <div className={css.logOutBox}>
                <span>Hello, {userName}</span>
                <button
                  className={css.logOutBtn}
                  type="button"
                  onClick={toggleModal}
                >
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
      <Modal
        isOpen={isModalOpen} // Передаємо стан відкриття модального вікна як пропс
        onCancel={toggleModal} // Передаємо функцію закриття модального вікна як пропс
        onConfirm={onLogOut} // Передаємо функцію виходу користувача як пропс
      />
    </div>
  );
};

export default Layout;
