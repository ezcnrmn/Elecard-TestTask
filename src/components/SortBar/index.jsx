import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { gallerySlice } from '../../store/reducers/galleryReducer';
import { getDeleted, resetDeleted as resetDeletedInLS } from '../../utils/localStorage';
import { imageViewType, imageSortBasis, imageSortDirection } from '../../utils/consts';
import classNames from 'classnames';
import './SortBar.scss';

const SortBar = () => {
	const [sortBasis, setSortBasisState] = useState(imageSortBasis.category);
	const [sortDirection, setSortDirectionState] = useState(imageSortDirection.ascend);
	const [viewType, setViewTypeState] = useState(imageViewType.cards);

	const { setDeletedImages, resetDeleted, setSortBasis, setSortDirection, setViewType } = gallerySlice.actions;
	const dispatch = useDispatch();

	useEffect(() => {
		const deleted = getDeleted();

		dispatch(setDeletedImages(deleted));
	}, []);

	const handleReset = () => {
		dispatch(resetDeleted());

		resetDeletedInLS();
	};

	const handleSortBasis = (event) => {
		dispatch(setSortBasis(event.target.value));
		setSortBasisState(event.target.value);
	};

	const handleSortDirection = (event) => {
		dispatch(setSortDirection(event.target.value));
		setSortDirectionState(event.target.value);
	};

	const handleViewType = (event) => {
		dispatch(setViewType(event.target.value));
		setViewTypeState(event.target.value);
	};

	return (
		<div className="sort-bar">
			<label className={classNames('sort-bar__item', { 'sort-bar__item--hidden': viewType === imageViewType.tree })}>
				<span>Сортировка</span>
				<select name="sortBasis" onChange={handleSortBasis} value={sortBasis}>
					<option value={imageSortBasis.category}>По категории</option>
					<option value={imageSortBasis.timestamp}>По дате</option>
					<option value={imageSortBasis.name}>По названию файла</option>
					<option value={imageSortBasis.filesize}>По размеру файла </option>
				</select>
			</label>

			<div className={classNames('sort-bar__item', { 'sort-bar__item--hidden': viewType === imageViewType.tree })}>
				<label>
					<input
						type="radio"
						name="sortDirection"
						value={imageSortDirection.ascend}
						onChange={handleSortDirection}
						checked={sortDirection === imageSortDirection.ascend}
					/>
					По возрастанию
				</label>
				<label>
					<input
						type="radio"
						name="sortDirection"
						value={imageSortDirection.descend}
						onChange={handleSortDirection}
						checked={sortDirection === imageSortDirection.descend}
					/>
					По убыванию
				</label>
			</div>

			<button
				className={classNames({ 'sort-bar__item--hidden': viewType === imageViewType.tree })}
				onClick={handleReset}
			>
				Вернуть
			</button>

			<div className={classNames('sort-bar__item', 'sort-bar__item--right')}>
				<label>
					Карточки
					<input
						type="radio"
						name="viewType"
						value={imageViewType.cards}
						onChange={handleViewType}
						checked={viewType === imageViewType.cards}
					/>
				</label>
				<label>
					Древовидный список
					<input
						type="radio"
						name="viewType"
						value={imageViewType.tree}
						onChange={handleViewType}
						checked={viewType === imageViewType.tree}
					/>
				</label>
			</div>
		</div>
	);
};

export default SortBar;
