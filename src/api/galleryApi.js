import Api from './Api';
import { gallerySlice } from '../store/reducers/galleryReducer';
import { API_BASE } from '../utils/consts';

export const loadImages = () => async (dispatch) => {
	const { loadingImages, imagesLoadedWithSuccess, imagesLoadedWithError } = gallerySlice.actions;

	try {
		dispatch(loadingImages());

		const images = await Api.get(`${API_BASE}/catalog.json`);

		dispatch(imagesLoadedWithSuccess(images));
	} catch (error) {
		dispatch(imagesLoadedWithError(error.message));
	}
};
