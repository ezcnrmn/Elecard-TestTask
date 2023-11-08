import './Modal.scss';

const Modal = ({ visible, closeModal, children }) => {
	if (!visible) return null;

	return (
		<div className="modal" onClick={closeModal}>
			<div
				className="modal__content"
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
