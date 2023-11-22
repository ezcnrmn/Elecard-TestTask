export const getButtonArray = (current, amount, max = 7) => {
	if (current >= amount) return [];

	const array = [];

	const maxRight = Math.floor((max - 1) / 2);
	const maxLeft = Math.ceil((max - 1) / 2);

	const realRight = amount - current - 1;
	const realLeft = amount - realRight - 1;

	let rightSide = Math.min(realRight, maxRight);
	let leftSide = Math.min(realLeft, maxLeft);

	if (leftSide < maxLeft && realRight - rightSide > 0) {
		rightSide += Math.min(maxLeft - leftSide, realRight - rightSide);
	}

	if (rightSide < maxRight && realLeft - leftSide > 0) {
		leftSide += Math.min(maxRight - rightSide, realLeft - leftSide);
	}

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
