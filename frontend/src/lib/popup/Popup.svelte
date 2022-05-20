<script>
	import { modalStatus, showPopupModal } from '$lib/store';
import DepositNftPreview from './DepositNftPreview.svelte';
import DepositNftSuccessful from './DepositNftSuccessful.svelte';
	import DepositPreview from './DepositPreview.svelte';
	import DepositSuccessful from './DepositSuccessful.svelte';

	import Pending from './Pending.svelte';

	function cancelConfirmationPopupModal() {
		showPopupModal.set(false);
	}
</script>

{#if $showPopupModal}
	<div
		class=" modal fixed z-40  w-full h-full top-0 left-0 flex items-center justify-center backdrop-filter backdrop-blur-xl "
	>
		<div on:click={cancelConfirmationPopupModal} class="w-full h-full" />

		{#if $modalStatus === 0}
			<DepositPreview />
		{/if}
		{#if $modalStatus === 1}
			<DepositSuccessful />
		{/if}

		{#if $modalStatus === 2}
			<DepositNftPreview />
		{/if}

		{#if $modalStatus === 3}
			<DepositNftSuccessful />
		{/if}
	</div>
{/if}
