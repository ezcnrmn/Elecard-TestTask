import { useState } from 'react';

const useModal = () => {
	const [visible, setVisible] = useState(false);

	const showModal = () => {
		setVisible(true);
	};

	const closeModal = () => {
		setVisible(false);
	};

	return { visible, showModal, closeModal };
};

export default useModal;
