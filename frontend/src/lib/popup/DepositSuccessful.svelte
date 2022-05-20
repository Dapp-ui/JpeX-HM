<script lang="ts">
	import { rinkeByBaseUrl, showPopupModal, recentTxHash } from '$lib/store';
	import { getShortAddress } from '$lib/utils/utils';

	function cancelConfirmationPopupModal() {
		showPopupModal.set(false);
	}
</script>


<div
	class=" bg-white w-[550px] rounded-2xl fixed object-center p-10 flex flex-col gap-3 font-poppins"
>
	<!-- Deposit preview title -->

	<div class=" flex justify-between items-center">
		<p class=" font-medium text-base text-[#E137FF]">Deposit Successful!</p>
		<img class=" cursor-pointer" src="/cross.svg" alt="" on:click={cancelConfirmationPopupModal} />
	</div>

	<!-- border with call in it -->

	<div class=" flex-1 flex flex-col justify-between border border-[#E2D8FF] rounded-xl p-6 gap-4 ">
		<!-- Card -->
		<div class=" bg-[#6129FF] flex flex-col p-6 items-center gap-3 rounded-xl">
			<!-- Tick -->
			<img class=" h-7" src="/checkmark.svg" alt="" />

			<!-- Yay -->
			<p class=" font-[700]  yay text-3xl ">Yay!</p>

			<!-- SUccessfully deposited -->
			<p class=" text-[#CAB8FF] font-medium">You’ve successfully deposited 0.5 WETH in</p>

			<!-- option name -->
			<p class=" text-[#FFFFFF] font-bold">Mayc X-150222</p>

			<!-- PFP -->
			<div class=" h-[140px] w-[140px] bg-[#FBF7FD] rounded-3xl p-3">
				<img class=" rounded-3xl" src="/bayc/bayc-2.png" alt="" />
			</div>
		</div>

		<div class=" flex flex-row justify-between p-5 bg-gray-200 rounded-lg">
			<div class="flex flex-col">
				<div>
					<p class="  font-light text-left">Status</p>
				</div>
				<div>
					<p class=" text-left font-medium py-2 text-[#3FBC8F]">Completed</p>
				</div>
			</div>
			<div class="flex flex-col">
				<div>
					<p class=" font-light text-right">Transaction ID</p>
				</div>
				<div>
					<p class=" text-right font-medium text-[#C64DFF] py-2">{getShortAddress($recentTxHash)}</p>
				</div>
			</div>
		</div>

		<!-- divider -->
		<div class=" bg-[#DDDBE0] h-[1px]" />

		<a href={$rinkeByBaseUrl + $recentTxHash} target="_blank" class=" flex justify-center gap-2">
			<!-- View tx -->
			<p class=" text-[#6129FF]">View this transaction</p>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3 6C3 4.34315 4.34315 3 6 3H11C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z"
					fill="#6129FF"
				/>
				<path
					d="M19 9C19 9.55229 19.4477 10 20 10C20.5523 10 21 9.55229 21 9V5C21 3.89543 20.1046 3 19 3H15C14.4477 3 14 3.44772 14 4C14 4.55228 14.4477 5 15 5L17.5858 5L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V9Z"
					fill="#6129FF"
				/>
			</svg>
		</a>
	</div>
</div>

<style>
	.yay {
		background: linear-gradient(86.1deg, #97d7ff -3%, #ff8ce2 50%, #ffc80e 103%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
</style>
