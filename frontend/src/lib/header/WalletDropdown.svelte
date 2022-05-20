<script lang="ts">
	// @ts-ignore
	import CopyToClipboard from 'svelte-copy-to-clipboard';
	import { disconnectWallet } from '$lib/web3/wallet';
	import { address } from '$lib/store';
	import networkConfig from '$lib/constants/networkConfig';

	let COPY_ADDRESS = 'Copy address';

	const handleSuccessfullyCopied = (e) => {
		COPY_ADDRESS = 'Address copied';
		setTimeout(() => {
			COPY_ADDRESS = 'Copy address';
		}, 2000);
	};

	const handleFailedCopy = () => {
		alert('failed to copy :(');
	};
</script>

<nav
	tabindex="0"
	class=" border border-grey-500 bg-white lg:block my-2 w-full p-2 dropdown-content rounded-2xl z-10 invisible absolute right-0 top-full transition-all  group-focus-within:visible group-focus-within:translate-y-1"
>
	<ul class=" flex flex-col text-sm gap-2 w-full">
		<li>
			<CopyToClipboard
				text={$address}
				on:copy={handleSuccessfullyCopied}
				on:fail={handleFailedCopy}
				let:copy
			>
				<div
					class="flex items-center gap-4 hover:border-2 rounded-xl p-1 cursor-pointer "
					on:click={copy}
				>
					<!--Copy svg  -->
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
							stroke="#686868"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
							stroke="#686868"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>

					<div class="font-medium  my-auto">{COPY_ADDRESS}</div>
				</div>
			</CopyToClipboard>
		</li>
		
		<li>
			<div class=" bg-[#E2E5F8] h-[1px] mx-2">
				
			</div>
		</li>
		<li>
			<div
				class="flex items-center  gap-4 hover:border-2 rounded-xl p-1 cursor-pointer"
				on:click={disconnectWallet}
			>
				<!-- Disconnect svg -->
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
						stroke="#686868"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M16 17L21 12L16 7"
						stroke="#686868"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M21 12H9"
						stroke="#686868"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>

				<div class=" font-medium  my-auto">Disconnect</div>
			</div>
		</li>
	</ul>
</nav>
