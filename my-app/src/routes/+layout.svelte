<script lang="ts">
	import { browser } from '$app/environment';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import '../app.css';
	import Sidebar from './Sidebar.svelte';

	import freighterApi from '@stellar/freighter-api';
	import { walletStore, setAddress } from '$lib/stores/walletStore';
	import { Client, networks } from 'hello_world';

	const contract = new Client({
		...networks.testnet, // for example; check which networks this library exports
		rpcUrl: 'https://soroban-testnet.stellar.org:443' // use your own, or find one for testing at https://soroban.stellar.org/docs/reference/rpc#public-rpc-providers
	});

	let greeting: string;
	async function greet() {
		const { result } = await contract.hello({ to: 'devvy' });
		greeting = result.join(' ');
	}

	if (browser) {
		onMount(async () => {
			const isAppConnected = await freighterApi.isConnected();

			if (isAppConnected.isConnected) {
				const addressObj = await freighterApi.getAddress();
				if (addressObj.error) {
					console.log(addressObj.error);
				} else {
					setAddress(addressObj.address);
				}
			}
		});
	}

	async function connectWallet() {
		const isAppAllowed = await freighterApi.setAllowed();
	}
</script>

<div class="flex flex-row place-content-between p-4">
	<div class="flex w-1/3 items-center justify-start">
		<Sidebar />
	</div>
	<div class="flex w-1/3 items-center justify-center">
		<a href="/" class="card font-sterion text-2xl">dCourse</a>
	</div>
	<div class="flex w-1/3 items-center justify-end">
		{#if $walletStore.address}
			<Button disabled
				>{$walletStore.address.slice(0, 4)}...{$walletStore.address.slice(-5, -1)}</Button
			>
		{:else}
			<Button on:click={connectWallet}>Connect wallet</Button>
		{/if}
	</div>
</div>
<slot></slot>

<style>
	@property --degree {
		syntax: '<angle>';
		inherits: false;
		initial-value: 10deg;
	}
	.card {
		padding: 10px;
		position: relative;
		text-align: center;
		border-radius: 50%;
	}
	.card::before {
		content: '';
		position: absolute;
		width: 102%;
		height: 102%;
		top: -1%;
		left: -1%;
		background: linear-gradient(
			var(--degree),
			hsl(60deg, 100%, 50%) 0%,
			/* Bright Yellow */ hsl(50deg, 100%, 50%) 20%,
			/* Light Yellow */ hsl(40deg, 100%, 10%) 30%,
			/* Darker Yellow */ hsl(40deg, 100%, 10%) 70%,
			/* Darker Yellow */ hsl(60deg, 100%, 50%) 80%,
			/* Light Yellow */ hsl(60deg, 100%, 70%) 100% /* Soft Yellow */
		);
		filter: blur(70px);
		border-radius: inherit;
		z-index: -3;
		animation: spin 3s infinite ease-in-out;
		will-change: contents;
	}
	.card::after {
		content: '';
		position: absolute;
		width: 105%;
		height: 105%;
		top: -1%;
		left: -1%;
		background: linear-gradient(
			var(--degree),
			hsl(60deg, 100%, 50%) 0%,
			/* Bright Yellow */ hsl(50deg, 100%, 50%) 20%,
			/* Light Yellow */ hsl(40deg, 100%, 20%) 30%,
			/* Darker Yellow */ hsl(40deg, 100%, 20%) 70%,
			/* Darker Yellow */ hsl(60deg, 100%, 50%) 80%,
			/* Light Yellow */ hsl(60deg, 100%, 70%) 100% /* Soft Yellow */
		);
		border-radius: inherit;
		filter: blur(20px);
		z-index: -2;
		animation: spin 10s infinite ease-in-out;
		will-change: contents;
	}

	@keyframes spin {
		0% {
			--degree: 1deg;
		}
		100% {
			--degree: 360deg;
		}
	}
</style>
