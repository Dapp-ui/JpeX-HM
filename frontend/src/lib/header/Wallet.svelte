<script lang="ts">
	import { walletConnected, shortAddress, walletUsed, address } from '$lib/store';

	import { connectWallet, onStartup } from '$lib/web3/wallet';
	import { onMount } from 'svelte';

	import WalletDropdown from './WalletDropdown.svelte';

	onMount(async () => {
		await onStartup();
	});
</script>

{#if $walletConnected}
	<div class=" group relative">
		<button>
			<div
				class="border border-grey-600 rounded-3xl bg-[#F6F6FE]  group-focus-within:bg-grey-200 group-focus-within:border-blue"
			>
				<div class="text-black font-semibold px-5 py-2 flex gap-3 items-center cursor-pointer">
					{#if $walletUsed === 1}
						<img src="/metamask.svg" alt="" class="w-5 h-5" />
					{:else if $walletUsed === 2}
						<img src="/walletconnect.svg" alt="" class="w-5 h-5" />
					{/if}
					<div class="text-xs drop-shadow-3xl text-gradient-5">
						{$shortAddress}
					</div>
					<div class="py-2">
						<svg
							width="14"
							height="8"
							viewBox="0 0 14 8"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 1L7 7L13 1"
								stroke="#181818"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</button>
		<WalletDropdown />
	</div>
{:else}
	<div class=" rounded-3xl connect-wallet">
		<div
			on:click={connectWallet}
			class=" transition ease-in cursor-pointer text-white font-poppins rounded-lg py-2 px-4 "
		>
			Connect Wallet
		</div>
	</div>
{/if}

<style>
	.connect-wallet {
		background: linear-gradient(86.1deg, #97d7ff -3%, #ff8ce2 50%, #ffc80e 103%);
		border-radius: 28px;
	}
</style>
