import { API_BASE } from '../../utils/consts';
import { bytesToKB, formatTimestamp, getImageName } from '../../utils/formatImageData';
import Modal from '../Modal';
import useModal from '../Modal/useModal';
import './ImagePreview.scss';

const ImagePreview = ({ image }) => {
	const { visible, showModal, closeModal } = useModal();

	return (
		<div>
			<div className="image-preview">
				<img
					className="image-preview__thumbnail"
					loading="lazy"
					src={`${API_BASE}/${image.image}`}
					alt={getImageName(image.image)}
					onClick={showModal}
				/>

				<div className="image-preview__date" title="Дата">
					<strong>Дата: </strong>
					{formatTimestamp(image.timestamp)}
				</div>
				<div className="image-preview__size" title="Размер файла">
					<strong>Размер файла: </strong>
					{bytesToKB(image.filesize)}
				</div>
			</div>

			<Modal visible={visible} closeModal={closeModal}>
				<img className="image-preview__image" src={`${API_BASE}/${image.image}`} alt={image.image} />
			</Modal>
		</div>
	);
};

export default ImagePreview;
