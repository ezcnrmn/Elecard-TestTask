import crossIcon from '../../assets/icons/cross.svg';
import { bytesToKB, formatTimestamp, getImageName } from '../../utils/formatImageData';
import { useDispatch } from 'react-redux';
import { gallerySlice } from '../../store/reducers/galleryReducer';
import { API_BASE } from '../../utils/consts';
import './ImageCard.scss';
import { addDeleted } from '../../utils/localStorage';

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
				<div>{getImageName(image.image)}</div>
				<div>Категория: {image.category}</div>
				<div title="Дата создания">{formatTimestamp(image.timestamp)}</div>
				<div title="Размер файла">{bytesToKB(image.filesize)}</div>
			</div>
		</div>
	);
};

export default ImageCard;
