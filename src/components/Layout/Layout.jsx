import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useState } from "react";
import Modal from "../Modal/Modal";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onLogOut = () => {
    dispatch(logout());
    setIsModalOpen(false);
  };

  return (
    <div>
      <AppBar toggleModal={toggleModal} />
      <main>{children}</main>
      <Modal isOpen={isModalOpen} onCancel={toggleModal} onConfirm={onLogOut} />
    </div>
  );
};

export default Layout;
