import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { get } from 'svelte/store';
import { getNumBackInUnits } from '$lib/utils/units';

import * as UAuthWeb3Modal from '@uauth/web3modal'
import UAuthSPA from '@uauth/js'

import {
	ethersProvider,
	address,
	ethersSigner,
	web3ModalObj,
	chainId,
	walletUsed,
	ethBalance,
	balance
} from '$lib/store';
import networkConfig from '$lib/constants/networkConfig';
import { getBalances } from './balances';
import { uauthOptions } from './uOathOptions';

async function setAccount(provider) {
	if (!provider.isMetaMask) {
		walletUsed.set(2);
	} else {
		walletUsed.set(1);
	}

	ethersProvider.set(new ethers.providers.Web3Provider(provider));
	ethersSigner.set(get(ethersProvider).getSigner());
	let addressString = await get(ethersSigner).getAddress();
	address.set(addressString);

	console.log("Address", get(address));
	

	try {
		ethersProvider
		const userBalance = await getBalances(get(ethersProvider), get(address))
		
		balance.set(userBalance)

		// console.log("User balance", userBalance);
		
	} catch (error) {
		console.log("Error", error);
		
	}

	// @ts-ignore
	const bal = await get(ethersProvider).getBalance(addressString);

	try {
		const network = await get(ethersProvider).getNetwork();
		chainId.set(network.chainId);
	} catch (err) {
		console.log(err);
	}

	provider.on('chainChanged', () => {
		window.location.reload();
	});

	provider.on('accountsChanged', async () => {
		await setAccount(provider);
	});
}

export async function onStartup() {
	
	
	// @ts-ignore


	if (window && window.WalletConnectProvider) {
		console.log("WalletConnectProvider", WalletConnectProvider);
		const providerOptions = {
			walletlink: {
				package: CoinbaseWalletSDK, // Required
				options: {
				  appName: "Web 3 Modal Demo", // Required
				  infuraId: "eaHOIpmkv7RpL3B9Ujk4Pf9ZzxHlUcQi" // Required unless you provide a JSON RPC url; see `rpc` below
				}
			  },
			  'custom-uauth': {
				// The UI Assets
				display: UAuthWeb3Modal.display,
			
				// The Connector
				connector: UAuthWeb3Modal.connector,
			
				// The SPA libary
				package: UAuthSPA,
			
				// The SPA libary options
				options: uauthOptions,
			  },
			walletconnect: {
				// @ts-ignore
				package: WalletConnectProvider, // required
				options: {
					infuraId: "eaHOIpmkv7RpL3B9Ujk4Pf9ZzxHlUcQi" // Required unless you provide a JSON RPC url; see `rpc` below
				}
			}
		};

		let web3ModalTheme = {
			background: '#171825',
			main: '#D6D8F2',
			secondary: 'rgb(136, 136, 136)',
			border: '#1C1D2D',
			hover: '#232536',
			
		};

		const web3Modal = new Web3Modal({
			network: networkConfig.name,
			cacheProvider: true,
			providerOptions,
			theme: web3ModalTheme
		});

		web3ModalObj.set(web3Modal);

		if (web3Modal.cachedProvider) {
			const provider = await web3Modal.connect();
			await setAccount(provider);
		}
		return true;
	}
	
}

export async function connectWallet() {

	try {
		const provider = await get(web3ModalObj).connect();
		await setAccount(provider);
	} catch (err) {
		console.log('err', err);
		if (window.ethereum && window.ethereum.chainId !== networkConfig.chainHex) {
			try {
				await window.ethereum.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: networkConfig.chainHex }] // chainId must be in hexadecimal numbers
				});
				const provider_ = await get(web3ModalObj).connect();
				await setAccount(provider_);
			} catch (e) {
				console.log('err', e);
			}
		}
	}
}

export function disconnectWallet() {
	ethersProvider.set(undefined);
	ethersSigner.set(undefined);
	address.set('');
	const web3Modal = get(web3ModalObj);
	web3Modal.clearCachedProvider();
	web3ModalObj.set(web3Modal);
}
