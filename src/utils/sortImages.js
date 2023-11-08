import { imageSortDirection, imageSortBasis } from './consts';
import { getImageName } from './formatImageData';

export const getSortImageFunction =
	({ direction, basis }) =>
	(imageA, imageB) => {
		switch (basis) {
			case imageSortBasis.filesize:
			case imageSortBasis.category:
			case imageSortBasis.timestamp: {
				if (direction === imageSortDirection.ascend) {
					if (imageA[basis] > imageB[basis]) return 1;
					if (imageA[basis] < imageB[basis]) return -1;
					return 0;
				}

				if (direction === imageSortDirection.descend) {
					if (imageA[basis] < imageB[basis]) return 1;
					if (imageA[basis] > imageB[basis]) return -1;
					return 0;
				}
				return 0;
			}

			case imageSortBasis.name: {
				const imageAName = getImageName(imageA.image);
				const imageBName = getImageName(imageB.image);
				if (direction === imageSortDirection.ascend) {
					if (imageAName > imageBName) return 1;
					if (imageAName < imageBName) return -1;
					return 0;
				}

				if (direction === imageSortDirection.descend) {
					if (imageAName < imageBName) return 1;
					if (imageAName > imageBName) return -1;
					return 0;
				}
				break;
			}

			default:
				return 0;
		}

		return 0;
	};
