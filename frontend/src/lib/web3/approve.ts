import abi from '$lib/constants/abi';
import { ethersSigner } from '$lib/store';
import { getNumInUnits } from '$lib/utils/units';
import { ethers } from 'ethers';
import { get } from 'svelte/store';

export async function approveERC20(tokenAddress: string, addressToApprove: string) {

	const amtBig = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
	const erc20 = new ethers.Contract(tokenAddress, abi.erc20, get(ethersSigner));

	let gasLimit = await erc20.estimateGas.approve(addressToApprove, amtBig);
	gasLimit = gasLimit.mul(3).div(2);
	console.log('Approve gas limit', gasLimit);

	const tx = await erc20.approve(addressToApprove, amtBig, { gasLimit });
	return tx;
}

export async function approveERC721(
	nftContractAddress: string,
	addressToApprove: string,
	tokenId: string
) {
	const erc721 = new ethers.Contract(nftContractAddress, abi.erc721, get(ethersSigner));

	let gasLimit = await erc721.estimateGas.approve(addressToApprove, tokenId);

	gasLimit = gasLimit.mul(3).div(2);
	const tx = await erc721.approve(addressToApprove, tokenId, { gasLimit });
	return tx;
}

