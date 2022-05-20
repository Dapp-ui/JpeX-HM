<script lang="ts">
	import { baycStrikePrices, dropdownStatus, selectedStrikePrice } from '$lib/store';
	import { each } from 'svelte/internal';
	let toggle = 'hidden';
	function handleStrikePriceSelection(strikePrice) {
		console.log('SSS', strikePrice);
		selectedStrikePrice.set(strikePrice);
		dropdownStatus.set(0);
	}
</script>

<div class="group h-full inline-block relative bg-[#FFFFFF] font-poppins border rounded-lg">
	<button
		class=" text-gray-700 font-[630] py-2 px-4 inline-flex justify-between w-full items-center"
		on:click={() => {
			console.log('Hello');

			if ($dropdownStatus == 0) {
				dropdownStatus.set(1);
			} else {
				dropdownStatus.set(0);
			}
		}}
	>
		<span class="mr-1">{$selectedStrikePrice} WETH</span>
		<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
		</svg>
	</button>
	<ul
		class={`absolute hidden drop-shadow-2xl mt-2 bg-white transition-all  border rounded-lg w-full p-2 cursor-pointer ${
			$dropdownStatus == 0 ? ' ' : ' group-focus-within:block group-focus-within:translate-y-1'
		}`}
	>
		{#each $baycStrikePrices as strike, index}
			<li class="">
				<button
					class=" w-full font-[550] text-gray-700 hover:bg-gray-100 py-3 cursor-pointer"
					on:click={() => handleStrikePriceSelection($baycStrikePrices[index])}
				>
					<p class=" text-left">{strike} WETH</p>
				</button>

				{#if index != 1}
					<div class=" bg-[#DDDBE0] h-[1px] my-2" />
				{/if}
			</li>
		{/each}
	</ul>
</div>
