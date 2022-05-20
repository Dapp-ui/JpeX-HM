<script lang="ts">
	import Cards from '$lib/Cards.svelte';
	import { collections } from '$lib/constants/content';
	import Header from '$lib/header/Header.svelte';
	import Intro from '$lib/Intro.svelte';
	import { onStartup } from '$lib/web3/wallet';

	import { fly } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
import CardsD from '$lib/CardsD.svelte';
</script>

<div>
	<Header />
	<div
		class=" flex flex-col px-24 py-12 gap-4 "
		in:fly={{
			duration: 300,
			x: 0,
			y: 10,
			opacity: 0.1,
			easing: quadIn
		}}
	>
		<Intro />
		<div class="w-full h-[1px] bg-[#E0E1F4]" />
		<div class=" flex flex-row justify-between">
			{#each collections as collection, index}
				<a class="  hover:drop-shadow-2xl " href="/vaults/punks">
					<Cards content={collection} i={index} />
				</a>
			{/each}
		</div>
	</div>
</div>
