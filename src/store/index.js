import { combineReducers, configureStore } from '@reduxjs/toolkit';
import galleryReducer from './reducers/galleryReducer';

const rootReducer = combineReducers({
	gallery: galleryReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: true,
	});
};
