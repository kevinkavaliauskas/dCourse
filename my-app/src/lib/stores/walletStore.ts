import { writable } from 'svelte/store';

// Create a wallet store
export const walletStore = writable({
	address: null as string | null,
	balance: 0,
	transactions: [] as Array<{ amount: number; date: string; description: string }>
});

export function setAddress(address: string) {
	walletStore.update((current) => ({
		...current,
		address: address
	}));
}

// Function to reset the wallet
export const resetWallet = () => {
	walletStore.set({
		address: null,
		balance: 0,
		transactions: []
	});
};
