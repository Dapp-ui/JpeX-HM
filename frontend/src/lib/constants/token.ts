export interface Token {
	address?: string;
	name: string;
	symbol: string;
	decimals: number;
	isStableCoin: boolean;
	id: string;
	coingecko_id: string;
}

const tokens: Array<Token> = [
	{
		address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
		name: 'Wrapped ETH',
		symbol: 'WETH',
		decimals: 18,
		isStableCoin: true,
		id: 'weth',
		coingecko_id: 'weth',
	}
];

export function getBySymbol(sym: string) {
	return tokens.find((a) => a.symbol.toLowerCase() === sym.toLowerCase());
}

export function getById(id: string) {
	return tokens.find((a) => a.id.toLowerCase() === id.toLowerCase());
}

export function getByCoingeckoId(id: string) {
	return tokens.find((a) => a.coingecko_id.toLowerCase() === id.toLowerCase());
}

export const allTokens = tokens.map((token) => token.symbol);
export default tokens;
