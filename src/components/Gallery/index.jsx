import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadImages } from '../../api/galleryApi';
import ImageCard from '../ImageCard';
import Loading from '../Loading';
import { getSortImageFunction } from '../../utils/sortImages';
import { imageSortBasis, imageViewType } from '../../utils/consts';
import Details from '../Details';
import { imageToTreeReducer, imageTreeRender } from '../../utils/imageTree';
import Pagination from '../Pagination';
import './Gallery.scss';

const Gallery = () => {
	const { images, deleted, sort, loading, viewType } = useSelector((state) => state.gallery);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadImages());
	}, []);

	const imagesFiltered = useMemo(() => {
		const filtered = deleted.length > 0 ? images.filter((image) => !deleted.includes(image.image)) : [...images];
		sort.basis !== imageSortBasis.none ? filtered.sort(getSortImageFunction(sort)) : filtered;

		return filtered;
	}, [images, deleted, sort]);

	const imageTree = useMemo(() => {
		const tree = images.reduce(imageToTreeReducer, {});

		return tree;
	}, [images]);

	if (loading) return <Loading />;

	return viewType === imageViewType.tree ? (
		<div className="gallery-tree">
			<Details title="Root">{imageTreeRender(imageTree)}</Details>
		</div>
	) : (
		<div className="gallery-cards">
			<Pagination pageSize={24}>
				{imagesFiltered.map((image) => (
					<ImageCard image={image} key={image.image} />
				))}
			</Pagination>
		</div>
	);
};

export default Gallery;
