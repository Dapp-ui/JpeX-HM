import abi from '$lib/constants/abi';
import { contractAddress } from '$lib/constants/contractAddress';
import { getBySymbol } from '$lib/constants/token';
import { depositAmount, ethersProvider, ethersSigner, selectedStrikePrice } from '$lib/store';
import { getNumInUnits } from '$lib/utils/units';
import { ethers } from 'ethers';
import { get } from 'svelte/store';

export async function depositInOptionBuyersVault(amount, strike) {
	console.log('Amount', amount);
	console.log('Strike', strike);

	const optionBuyersContract = new ethers.Contract(
		contractAddress.NftOptionBuyersVault,
		abi.nftOptionBuyerVault,
		get(ethersSigner)
	);
	let gasLimit = await optionBuyersContract.estimateGas.depositInOptionBuyersVault(
		getNumInUnits(amount, 18),
		getNumInUnits(strike, 18)
	);
	gasLimit = gasLimit.mul(3).div(2);
	console.log('Gaslimit', gasLimit);

	const tx = await optionBuyersContract.depositInOptionBuyersVault(
		getNumInUnits(amount, 18),
		getNumInUnits(strike, 18),
		{
			gasLimit
		}
	);

	console.log('TX', tx);

	return tx;
}

// export async function depositNftInOptionSellerVault() {
//     const optionBuyersContract = new ethers.Contract(
//         contractAddress.NftOptionBuyersVault,
//         abi.nftOptionBuyerVault,
//         get(ethersSigner)
//     )
//     let gasLimit = await optionBuyersContract.estimateGas.depositInOptionBuyersVault(
//         getNumInUnits(amount, 18),
//         getNumInUnits(strike, 18)
//     )
// }

export async function depositWethForSettlement(amount) {
	const optionSellerVaultContract = new ethers.Contract(
		contractAddress.NftOptionSellersVault,
		abi.nftOptionSellerVault,
		get(ethersSigner)
	);
	let gasLimit = await optionSellerVaultContract.estimateGas.depositWethForStrikeToReclaimNFT(
		amount
	);
	const tx = optionSellerVaultContract.depositWethForStrikeToReclaimNFT(amount, { gasLimit });
	return tx;
}

export async function withdrawAllClaimableNFTs() {
	const optionSellerVaultContract = new ethers.Contract(
		contractAddress.NftOptionSellersVault,
		abi.nftOptionSellerVault,
		get(ethersSigner)
	);

	let gasLimit = await optionSellerVaultContract.estimateGas.withdrawAllClaimableNFTs();

	const tx = await optionSellerVaultContract.withdrawAllClaimableNFTs({ gasLimit });

	return tx;
}

export async function claimEarningsForStrike(strike) {
    console.log("Strike", strike);
    
	const optionBuyersVaultContract = new ethers.Contract(
		contractAddress.NftOptionBuyersVault,
		abi.nftOptionBuyerVault,
		get(ethersSigner)
	);

	const gasLimit = await optionBuyersVaultContract.estimateGas.claimEarningsForStrike(strike);

	const tx = await optionBuyersVaultContract.claimEarningsForStrike(strike, { gasLimit });

	return tx;
}
