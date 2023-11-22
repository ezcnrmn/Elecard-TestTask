import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { getButtonArray } from '../../utils/getButtonArray';
import './Pagination.scss';

const usePagination = (array, pageSize = 10) => {
	const [current, setCurrent] = useState(0);
	const maxPage = Math.ceil(array.length / pageSize);

	useEffect(() => {
		if (maxPage <= current) setCurrent(Math.max(maxPage - 1, 0));
	}, [current, maxPage]);

	const Portion = () => <>{array.slice(current * pageSize, (current + 1) * pageSize)}</>;

	const PaginationBar = useCallback(() => {
		const buttonArray = getButtonArray(current, maxPage).map((btn) => {
			const buttonsClass = classNames('pagination-bar__button', {
				'pagination-bar__button--current': btn.current,
				'pagination-bar__button--first': btn.first,
				'pagination-bar__button--last': btn.last,
			});

			return (
				<button className={buttonsClass} key={btn.value} onClick={() => setCurrent(btn.value)}>
					{btn.value + 1}
				</button>
			);
		});

		return (
			<div className="pagination-bar">
				<button
					className={classNames('pagination-bar__button', 'pagination-bar__button--first')}
					onClick={() => setCurrent((state) => state - 1)}
					disabled={current - 1 < 0}
				>
					{'<'}
				</button>
				{buttonArray}
				<button
					className={classNames('pagination-bar__button', ' pagination-bar__button--last')}
					onClick={() => setCurrent((state) => state + 1)}
					disabled={current + 1 > maxPage - 1}
				>
					{'>'}
				</button>
			</div>
		);
	}, [current, maxPage]);

	return {
		Portion,
		PaginationBar,
	};
};

export default usePagination;
