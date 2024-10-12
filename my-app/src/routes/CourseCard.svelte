<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { CheckCircle } from 'lucide-svelte';

	export let title: string;
	export let image: string;
	export let author: string;
	export let verified: boolean;
</script>

<div
	class="flex h-full flex-col overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all duration-300 hover:scale-[101%] hover:shadow-2xl"
>
	<img src={image} alt={title} class="h-48 w-full object-cover" />
	<div class="flex flex-grow flex-col p-4">
		<h2 class="mb-2 font-semibold text-white">{title}</h2>
		<div class="mb-4 flex items-center text-sm text-gray-400">
			<span>by {author}</span>
			{#if verified}
				<CheckCircle class="ml-2 h-4 w-4 text-blue-400" />
			{/if}
		</div>
		<div class="flex-grow"></div>
		<Button
			variant="secondary"
			class="mt-auto w-full bg-yellow-500 font-semibold text-gray-900 hover:bg-yellow-600"
		>
			Learn more
		</Button>
	</div>
</div>
