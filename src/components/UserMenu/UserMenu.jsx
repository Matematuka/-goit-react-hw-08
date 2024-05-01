import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css"

const UserMenu = ({ toggleModal }) => {
     const userName = useSelector(selectUserName);
  return (
    <div className={css.userNav}>

      <div className={css.logOutBox}>
        <span>Hello, {userName}</span>
        <button className={css.logOutBtn} type="button" onClick={toggleModal}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
