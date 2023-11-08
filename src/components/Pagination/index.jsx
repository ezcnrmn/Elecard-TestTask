import { useMemo, useState } from 'react';
import './Pagination.scss';

const getButtonArray = (current, amount, max = 7) => {
	if (current >= amount) return [];

	const array = [];

	const maxRight = Math.floor((max - 1) / 2);
	const maxLeft = Math.ceil((max - 1) / 2);

	let rightSide = Math.min(amount - current - 1, maxRight);
	let leftSide = Math.min(amount - (amount - current - 1) - 1, maxLeft);

	rightSide += leftSide < maxLeft ? maxLeft - leftSide : 0;
	leftSide += rightSide < maxRight ? maxRight - rightSide : 0;

	for (let i = 0; i < leftSide; i++) {
		const value = current - leftSide + i;
		if (i === 0) array.push({ value: 0, first: 0 !== value });
		else array.push({ value });
	}

	array.push({ value: current, current: true });

	for (let i = 0; i < rightSide; i++) {
		const value = current + i + 1;
		if (i === rightSide - 1) array.push({ value: amount - 1, last: amount - 1 !== value });
		else array.push({ value });
	}

	return array;
};

const Pagination = ({ children, pageSize = 10 }) => {
	const [current, setCurrent] = useState(0);
	const maxPage = Math.ceil(children.length / pageSize);

	const buttonArray = useMemo(
		() =>
			getButtonArray(current, maxPage).map((btn) => {
				let className = 'pagination-bar__button';

				if (btn.current) className += ' pagination-bar__button--current';
				if (btn.first) className += ' pagination-bar__button--first';
				if (btn.last) className += ' pagination-bar__button--last';

				return (
					<button className={className} key={btn.value} onClick={() => setCurrent(btn.value)}>
						{btn.value + 1}
					</button>
				);
			}),
		[current, maxPage],
	);

	if (!Array.isArray(children)) return <>{children}</>;

	return (
		<>
			{children.slice(current * pageSize, (current + 1) * pageSize)}
			{
				<div className="pagination-bar">
					<button
						className="pagination-bar__button pagination-bar__button--first"
						onClick={() => setCurrent((state) => state - 1)}
						disabled={current - 1 < 0}
					>
						{'<'}
					</button>
					{buttonArray}
					<button
						className="pagination-bar__button pagination-bar__button--last"
						onClick={() => setCurrent((state) => state + 1)}
						disabled={current + 1 > maxPage - 1}
					>
						{'>'}
					</button>
				</div>
			}
		</>
	);
};

export default Pagination;
