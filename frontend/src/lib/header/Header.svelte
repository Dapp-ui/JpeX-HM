<script lang="ts">
	import { selectedPage } from '$lib/store';

	import Wallet from './Wallet.svelte';
</script>

<div
	class="flex flex-row justify-between items-center px-5 h-20 left-0 right-0 bg-white backdrop-blur-md border-b font-poppins"
>
	<div class="flex items-center gap-5">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<a href="/">
			<div
				class="flex w-max items-center "
				on:click={() => {
					if ($selectedPage !== 'vault') {
						selectedPage.set('vault');
					}
				}}
			>
				<img src="/jpex-logo.svg" alt="" />
				<div class=" text-xl font-light">Jpe<span class=" font-extrabold">X.</span></div>
			</div>
		</a>

		<div class=" w-[2px] h-[40px] bg-[#E8E9EE]" />

		<div class="flex gap-6 ">
			<a href="/">
				<div
					class={`text-center ${
						$selectedPage === 'vault' ? ' font-semibold text-[#5A40FF] ' : ' text-[#8387B0] '
					}`}
					on:click={() => {
						if ($selectedPage !== 'vault') {
							selectedPage.set('vault');
						}
					}}
				>
					Vault
				</div></a
			>

			<a href="/portfolio">
				<div
					class={`text-center ${
						$selectedPage === 'portfolio' ? ' font-semibold text-[#5A40FF] ' : ' text-[#8387B0] '
					} `}
					on:click={() => {
						if ($selectedPage !== 'portfolio') {
							selectedPage.set('portfolio');
						}
					}}
				>
					Portfolio
				</div>
			</a>

			<a href="/airdrop">
				<div
					class={`text-center ${
						$selectedPage === 'airdrop' ? ' font-semibold text-[#5A40FF] ' : ' text-[#8387B0] '
					} `}
					on:click={() => {
						if ($selectedPage !== 'airdrop') {
							selectedPage.set('airdrop');
						}
					}}
				>
					Airdrop
				</div>
			</a>

			
		</div>
	</div>

	<div class="w-max right-2">
		<Wallet />
	</div>
</div>
