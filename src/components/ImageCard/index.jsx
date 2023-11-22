import crossIcon from '../../assets/icons/cross.svg';
import { bytesToKB, formatTimestamp, getImageName } from '../../utils/formatImageData';
import { useDispatch } from 'react-redux';
import { gallerySlice } from '../../store/reducers/galleryReducer';
import { API_BASE } from '../../utils/consts';
import { addDeleted } from '../../utils/localStorage';
import './ImageCard.scss';

const ImageCard = ({ image }) => {
	const { deleteImage } = gallerySlice.actions;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteImage(image.image));

		addDeleted(image.image);
	};

	return (
		<div className="image-card">
			<img
				className="image-card__image"
				loading="lazy"
				src={`${API_BASE}/${image.image}`}
				alt={getImageName(image.image)}
			/>

			<input
				className="image-card__delete"
				onClick={handleDelete}
				type="image"
				src={crossIcon}
				title="Закрыть"
				alt="Закрыть"
			/>

			<div className="image-card__description">
				<div>
					<strong>Название:</strong> {getImageName(image.image)}
				</div>
				<div>
					<strong>Категория:</strong> {image.category}
				</div>
				<div title="Дата">
					<strong>Дата:</strong> {formatTimestamp(image.timestamp)}
				</div>
				<div title="Размер файла">
					<strong>Размер файла:</strong> {bytesToKB(image.filesize)}
				</div>
			</div>
		</div>
	);
};

export default ImageCard;
