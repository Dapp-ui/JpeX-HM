import { Contract, Provider } from 'ethers-multicall';
import BigNumber from 'bignumber.js';
import { setMulticallAddress } from 'ethers-multicall';

import { getBySymbol } from '$lib/constants/token';

import abi from '$lib/constants/abi';
import { address, balance, ethersProvider } from '$lib/store';

export async function getBalances(ethersProvider, address) {
	const provider = new Provider(ethersProvider);
	await provider.init();

	const _tokens = ['weth'];
	const calls = [];
    

	_tokens.forEach((token) => {
		const tokenObj = getBySymbol(token);
		const tokenContract = new Contract(tokenObj.address, abi.erc20);
		calls.push(tokenContract.balanceOf(address));
	});

    
    
	const results = await provider.all(calls);

	const data = {};

	_tokens.forEach((token) => {
		const tokenObj = getBySymbol(token);
		let tokenBalance = results.shift();
		tokenBalance = new BigNumber(tokenBalance.toString()).div(10 ** tokenObj.decimals).toString();
		data[tokenObj.symbol] = tokenBalance;
	});

    
	balance.set(data);

	return data;
}