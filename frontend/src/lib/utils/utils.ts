export function getShortAddress(address: string) {
	return address.substr(0, 6) + '..' + address.substr(address.length - 3);
}

export function num(x: any) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatExpiry(expiry: string) {
	let temp: string = '';
	for (let index = 0; index < expiry.length; index++) {
		const element = expiry[index];

		if (index !== 0 && (index & 1) === 0) {
			temp += '-';
		}
		temp += expiry[index];
	}

	return temp;
}

export function getPNL(
	oraclePrice: string,
	strikePrice: string,
	quantity: Number = 1
) : string{
	return ((Number(oraclePrice) - Number(strikePrice)) *  Number(quantity)).toFixed(2) 
}
