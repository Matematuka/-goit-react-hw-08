import clsx from "clsx";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const AppBar = ({ toggleModal }) => {
  const isSignedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation
        getNavLinkClassName={getNavLinkClassName}
        isSignedIn={isSignedIn}
      />
      {isSignedIn ? (
        <UserMenu toggleModal={toggleModal} />
      ) : (
        <AuthNav getNavLinkClassName={getNavLinkClassName} />
      )}
    </header>
  );
};

export default AppBar;
