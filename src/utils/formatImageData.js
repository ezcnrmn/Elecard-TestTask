export const bytesToKB = (bytes) => {
	const bytesNumber = Number(bytes);

	if (Number.isNaN(bytesNumber)) return bytesToKB;

	return `${(bytesNumber / 1024).toFixed(1)} KB`;
};

export const formatTimestamp = (timestamp) => {
	const date = new Date(timestamp);

	return date.toLocaleString();
};

export const getImageName = (path) => {
	const split = path.split('/');

	return split[split.length - 1];
};
