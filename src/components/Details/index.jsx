import './Details.scss';

const Details = ({ title, children, defaultOpen }) => {
	return (
		<details className="details" open={defaultOpen}>
			<summary className="details__title">{title}</summary>
			<div className="details__content">{children}</div>
		</details>
	);
};

export default Details;
