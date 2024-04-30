import { useState } from "react";
import css from "./Modal.module.css";

const Modal = ({ isOpen, onCancel, onConfirm }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleCancel = () => {
    onCancel();
    setIsConfirmed(false);
  };

  const handleConfirm = () => {
    onConfirm();
    setIsConfirmed(true);
  };

  return (
    <>
      {isOpen && (
        <div className={css.modalOverlay}>
          <div className={css.modalContent}>
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <div className={css.modalButtons}>
              <button className={css.cancelBtn} onClick={handleCancel}>
                Cancel
              </button>
              <button
                className={css.confirmBtn}
                onClick={handleConfirm}
                disabled={isConfirmed}
              >
                {isConfirmed ? "Logging out..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
