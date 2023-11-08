import { createSlice } from '@reduxjs/toolkit';
import { imageViewType, imageSortDirection, imageSortBasis } from '../../utils/consts';

const initialState = {
	loading: false,
	images: [],
	viewType: imageViewType.cards,
	sort: { direction: imageSortDirection.ascend, basis: imageSortBasis.category },
	deleted: [],
	errors: [],
};

export const gallerySlice = createSlice({
	name: 'gallery',
	initialState,
	reducers: {
		// Загрузка
		loadingImages(state) {
			state.loading = true;
		},
		imagesLoadedWithSuccess(state, action) {
			state.loading = false;
			state.images = action.payload;
		},
		imagesLoadedWithError(state, action) {
			state.loading = false;
			state.errors.push(action.payload);
		},

		// Смена вида
		setViewType(state, action) {
			state.viewType = action.payload;
		},

		// Фильтрация
		setDeletedImages(state, action) {
			state.deleted = action.payload;
		},
		deleteImage(state, action) {
			state.deleted.push(action.payload);
		},
		resetDeleted(state) {
			state.deleted = [];
		},

		// Сортировка
		setSortDirection(state, action) {
			state.sort.direction = action.payload;
		},
		setSortBasis(state, action) {
			state.sort.basis = action.payload;
		},
	},
});

export default gallerySlice.reducer;
