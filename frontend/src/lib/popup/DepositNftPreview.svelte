<script lang="ts">
	import { contractAddress } from '$lib/constants/contractAddress';
	import { tokenIdToPfp } from '$lib/constants/tokenIds';
	import { saveNewLongPosition, saveNewShortPosition } from '$lib/db/positions';

	import {
		address,
		baycStrikeToPremium,
		currentEpoch,
		depositAmount,
		epochExpiry,
		isSellerApproved,
		modalStatus,
		oraclePrice,
		rinkeByBaseUrl,
		selectedNft,
		selectedNftCollection,
		selectedStrikePrice,
		showPopupModal,
		showProcessingForNftDeposit,
		recentTxHash
	} from '$lib/store';
	import { getOptionName, getQuantity } from '$lib/utils/helper';
	import { depositNftInOptionSellerVault } from '$lib/web3/depositNft';

	function cancelConfirmationPopupModal() {
		showPopupModal.set(false);
	}
</script>

<div class=" bg-white rounded-2xl fixed object-center p-10 flex flex-col justify-between gap-3">
	<!-- Deposit preview title -->

	<div class=" flex justify-between items-center">
		<p class=" font-medium text-base text-[#E137FF]">Depositing NFT Preview</p>
		<img class=" cursor-pointer" src="/cross.svg" alt="" on:click={cancelConfirmationPopupModal} />
	</div>

	<!-- border with call in it -->

	<div class=" flex-1 flex flex-col  gap-3 border border-[#E2D8FF] rounded-xl p-6 ">
		<!-- Card -->
		<div class=" h-3/5 rounded-xl bg-[#6129FF] w-full flex flex-row items-center p-6">
			<!-- PFP left-->
			<div class=" h-[140px] w-[140px] bg-[#FBF7FD] rounded-xl p-3">
				<img class=" rounded-xl" src={tokenIdToPfp[$selectedNft]} alt="" />
			</div>

			<!-- content right -->

			<div class=" flex-1 grid grid-cols-1 gap-4 p-2  text-white ml-3">
				<p class=" font-semibold text-lg">
					{getOptionName(
						$currentEpoch.toString(),
						$selectedStrikePrice,
						$epochExpiry,
						$selectedNftCollection
					)}
				</p>

				<div
					class=" bg-[#FFFFFF] rounded-xl text-[#AF83B7] p-2 flex items-center gap-1 justify-center"
				>
					<img class=" h-5" src="/premium.svg" alt="" />
					<p class="">
						Premium: <span class=" font-semibold text-[#E137FF]"
							>{$baycStrikeToPremium[$selectedStrikePrice]} WETH</span
						>
					</p>
				</div>

				<div class=" flex justify-between font-[300] text-sm">
					<p>Strike Price:</p>
					<p class=" text-[#FFDF6B] font-semibold">{$selectedStrikePrice} WETH</p>
				</div>

				<!-- <div class=" flex  justify-between font-[300] text-sm">
					<p>Amount:</p>
					<p class=" text-[#FFDF6B] font-semibold">{$depositAmount} WETH</p>
				</div>
				<div class=" flex  justify-between font-[300] text-sm">
					<p>Quantity:</p>
					<p class=" text-[#FFDF6B] font-semibold">
						{getQuantity($depositAmount, $baycStrikeToPremium[$selectedStrikePrice])}
					</p>
				</div> -->
			</div>
		</div>

		<!-- deposit -->

		{#if $showProcessingForNftDeposit === false}
			<div
				class=" w-full premium-bg p-2 flex justify-center rounded-xl text-white cursor-pointer"
				on:click={async () => {
					const tx = await depositNftInOptionSellerVault();
					showProcessingForNftDeposit.set(true);
					const res = await tx.wait();

					console.log('Response', res);

					const position = {
						user: $address,
						nft: $selectedNftCollection,
						pfpUrl: tokenIdToPfp[$selectedNft],
						tokenId: $selectedNft,
						option: getOptionName(
							$currentEpoch.toString(),
							$selectedStrikePrice,
							$epochExpiry,
							'bayc'
						),
						quantity: 1,
						status: 'ACTIVE',
						epoch: $currentEpoch,
						action: 'Short',
						strike: $selectedStrikePrice,
						oraclePrice: $oraclePrice,
						expiry: $epochExpiry,
						premium: $baycStrikeToPremium[$selectedStrikePrice],
						isEpochExpired: false,
						isClaimable: false,
						txUrl: $rinkeByBaseUrl + res.transactionHash
					};

					recentTxHash.set(res.transactionHash);
					await saveNewShortPosition(position);
					console.log('Saved short position');
					showProcessingForNftDeposit.set(false);
					modalStatus.set(3);
					console.log('Saved new position');
				}}
			>
				<p>Deposit</p>
			</div>
		{:else}
			<button class=" bg-[#3E2681] flex justify-center p-2 rounded-xl cursor-pointer">
				<p class=" text-white">Depositing...</p>
				<img class=" animate-spin h-6 w-6" src="/loader-1.svg" alt="" />
			</button>
		{/if}

		<!-- Gas price -->

		<div class=" w-full p-2 justify-center flex items-center gap-1">
			<p class=" text-[#8779AF]">NFT Contract: <span class=" text-[#333333]">0xas....4fjs</span></p>
			<!-- Question mark -->
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12.0002 20.9998C9.6133 20.9998 7.32411 20.0516 5.63628 18.3638C3.94846 16.676 3.00024 14.3868 3.00024 11.9998C3.00024 9.6129 3.94846 7.32371 5.63628 5.63589C7.32411 3.94806 9.6133 2.99985 12.0002 2.99985C14.3872 2.99985 16.6764 3.94806 18.3642 5.63589C20.052 7.32371 21.0002 9.6129 21.0002 11.9998C21.0002 14.3868 20.052 16.676 18.3642 18.3638C16.6764 20.0516 14.3872 20.9998 12.0002 20.9998V20.9998Z"
					stroke="#8779AF"
					stroke-width="1.55556"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M12.0002 13.2499V12.9999C12.0002 12.1829 12.5052 11.7399 13.0112 11.3999C13.5052 11.0669 14.0002 10.6329 14.0002 9.83286C14.0002 9.30242 13.7895 8.79371 13.4145 8.41864C13.0394 8.04357 12.5307 7.83286 12.0002 7.83286C11.4698 7.83286 10.9611 8.04357 10.586 8.41864C10.211 8.79371 10.0002 9.30242 10.0002 9.83286"
					stroke="#8779AF"
					stroke-width="1.55556"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M11.9994 16C11.8614 16 11.7494 16.112 11.7504 16.25C11.7504 16.388 11.8624 16.5 12.0004 16.5C12.1384 16.5 12.2504 16.388 12.2504 16.25C12.2504 16.112 12.1384 16 11.9994 16"
					stroke="#8779AF"
					stroke-width="1.55556"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	</div>
</div>

<style>
	.premium-bg {
		background: linear-gradient(72.88deg, #aacafb -4.23%, #fe90d9 52.37%, #febd38 97.09%);
	}
</style>
