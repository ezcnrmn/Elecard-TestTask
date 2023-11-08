import { LOCAL_STORAGE_KEY } from './consts';

export const getDeleted = () => {
	let deleted;
	try {
		deleted = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
	} catch (error) {
		deleted = [];
	}

	if (Array.isArray(deleted)) return deleted;

	return [];
};

export const addDeleted = (image) => {
	let deleted;
	try {
		deleted = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
	} catch (error) {
		deleted = [];
	}

	if (Array.isArray(deleted)) deleted.push(image);
	else deleted = [image];

	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(deleted));
};

export const resetDeleted = () => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
};
