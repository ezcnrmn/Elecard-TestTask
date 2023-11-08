import Details from '../components/Details';
import ImagePreview from '../components/ImagePreview';
import Pagination from '../components/Pagination';

export const imageToTreeReducer = (acc, image) => {
	if (!(image.category in acc)) acc[image.category] = [];
	acc[image.category].push(image);

	return acc;
};

export const imageTreeRender = (images) => {
	if (Array.isArray(images))
		return (
			<div className="vertical-container">
				<Pagination pageSize={50}>
					{images.map((image) => (
						<ImagePreview key={image.image} image={image} />
					))}
				</Pagination>
			</div>
		);

	return (
		<div className="vertical-container">
			{Object.entries(images).map(([category, value]) => (
				<Details key={category} title={category}>
					{imageTreeRender(value)}
				</Details>
			))}
		</div>
	);
};
