import { api } from '$lib/api/_api';
import { currentEpoch } from '$lib/store';
import { get } from 'svelte/store';

export interface Position {
	user: string;
	action: string;
	nft: string;
	premium: string;
	quantity: Number;
	strike: string;
	oraclePrice: string;
	expiry: string;
	isClaimable?: string;
}

export async function getActiveShortsForUser(address: string) {
	const response = await api('get', `positions/seller/${address}`);
	const position = await response.json();
	console.log("Hello shorts");
	
	console.log('Active Shorts : ', position);

	return position;
}

export async function getActiveLongsForUser(address: string) {
	console.log("Hello Longs");
	console.log("Address", address);
	
	
	const response = await api('get', `positions/buyer/${address}`);

	const activeLongs = await response.json();
	console.log('Active Longs : ', activeLongs);
	return activeLongs;
}


export async function getActiveShortsForEpoch(address: string, epoch: string) {
	const response = await api('get', `positions/seller/epoch/${epoch}`)
	const activeShorts = await response.json()

	console.log("Active Shorts For epoch", activeShorts);
	return activeShorts
}


export async function saveNewLongPosition(position) {
	const response = await api('post', 'positions/buyer', position);
	console.log('Long response', response);

	if (response.status === 201) {
		console.log('Successfully saved');
	} else {
		console.log('Failed to save');
	}
}

export async function saveNewShortPosition(position) {
	const response = await api('post', 'positions/seller', position);
	if (response.status === 201) {
		console.log('Successfully saved');
	} else {
		console.log('Failed to save');
	}
}

export async function updateLongPosition(position) {
	const response = await api('post', 'positions/buyer/update', position);
	console.log('Long response', response);

	if (response.status === 201) {
		console.log('Successfully saved');
	} else {
		console.log('Failed to save');
	}
}

export async function updateShortPosition(position) {
	const response = await api('post', 'positions/seller/update', position);
	console.log('Long response', response);

	if (response.status === 201) {
		console.log('Successfully saved');
	} else {
		console.log('Failed to save');
	}
}
