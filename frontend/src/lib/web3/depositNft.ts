import abi from '$lib/constants/abi';
import { contractAddress } from '$lib/constants/contractAddress';
import { ethersSigner, selectedNft, selectedStrikePrice } from '$lib/store';
import { getNumInUnits } from '$lib/utils/units';
import { ethers } from 'ethers';
import { get } from 'svelte/store';

export async function depositNftInOptionSellerVault() {
	const optionSellerContract = new ethers.Contract(
		contractAddress.NftOptionSellersVault,
		abi.nftOptionSellerVault,
		get(ethersSigner)
	);
	console.log("Hello");
	console.log(get(selectedNft));
	console.log(get(selectedStrikePrice));
	
	
	
	let gasLimit = await optionSellerContract.estimateGas.depositNftAndMintOption(
		get(selectedNft),
		getNumInUnits(get(selectedStrikePrice), 18)
	);
	gasLimit = gasLimit.mul(3).div(2);

	const tx = await optionSellerContract.depositNftAndMintOption(
		get(selectedNft),
		getNumInUnits(get(selectedStrikePrice), 18)
	);

    console.log("Tx deposit nft", tx);
    return tx;
    
    
}
