<script lang="ts">
	import {address, ethersProvider, userNFTs } from './store';
</script>

<div class="grid grid-cols-1 gap-3 font-poppins">
	<div class="flex flex-row justify-between">
		<!-- Page description -->
		<div class=" font-[400] text-[36px] tracking-[.01em] bg-gradient">NFT Vaults</div>
		<!-- Type of vaults : Popular -->
		<div
			class=" font-poppins text-[#9C74F2] border rounded-xl border-black"
		>
			<div class=" flex flex-row items-center rounded-xl h-full bg-white cursor-pointer">
				<img class=" w-[20px] h-[20px] mx-1" src="star.png" alt="" />
				<span class=" mr-4">Popular</span>
				<svg
					class="mx-2 w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>
		</div>
	</div>
	<div>
		<p class=" font-poppins w-4/5 text-[14px]">
			Earn passive income by speculating on NFTs by providing liquidity to NFT option vaults which
			is equivalent of purchasing the NFT itself.
		</p>
	</div>
</div>

<style>
	
	.bg-gradient {

		background: linear-gradient(265.41deg, #ff45dc -1.68%, #ffd421 45.36%, #9a36ff 94.39%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
</style>
