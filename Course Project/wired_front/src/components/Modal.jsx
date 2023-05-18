import "./Modal.css";
export const Modal = ({ setIsModalOpen, children }) => {
  return (
    <div className="modal-bg">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setIsModalOpen(false)}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
