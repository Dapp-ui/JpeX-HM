export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/airdrop/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/portfolio/index.svelte"),
	() => import("../../src/routes/vaults/[nft].svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"airdrop": [[0, 2], [1]],
	"portfolio": [[0, 4], [1]],
	"vaults/[nft]": [[0, 5], [1]]
};