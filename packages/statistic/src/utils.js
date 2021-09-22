export function formatter(value, groupSeparator, decimalSeparator, precision) {
	const val = String(value);
	const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);

	if (!cells || val === '-') {
		return val;
	}

	const negative = cells[1];
	let int = cells[2] || '0';
	let decimal = cells[4] || '';

	int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);

	const num = typeof precision === 'number' ? precision : decimal.length;

	decimal = decimal.padEnd(num, '0').slice(0, num);

	if (decimal) {
		decimal = `${decimalSeparator}${decimal}`;
	}

	return decimal ? `${negative}${int}${decimal}` : `${negative}${int}`;
}
