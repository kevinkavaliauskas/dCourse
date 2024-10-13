<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { CheckCircle } from 'lucide-svelte';
	import { Progress } from '$lib/components/ui/progress';

	export let id: number;
	export let title: string;
	export let image: string;
	export let author: string;
	export let verified: boolean;
	export let description: string;
	export let duration: string;
	export let level: string;
	export let topics: string[];
	export let progress: null | number = null;
</script>

<div
	class="flex h-full flex-col overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all duration-300 hover:scale-[101%] hover:shadow-2xl"
>
	<img src={image} alt={title} class="h-48 w-full object-cover" />
	<div class="flex flex-grow flex-col p-4">
		<h2 class="mb-2 line-clamp-2 font-semibold text-white">{title}</h2>
		<div class="mb-4 flex items-center text-sm text-gray-400">
			{#if progress != null}
				<Progress value={progress} />
			{:else}
				<span class="truncate">by {author}</span>
				{#if verified}
					<CheckCircle class="ml-2 h-4 w-4 flex-shrink-0 text-blue-400" />
				{/if}
			{/if}
		</div>
		<div class="flex-grow"></div>
		<Sheet.Root>
			{#if progress == 0}
				<Button
					href="courses/{id}"
					variant="secondary"
					class="mt-auto w-full bg-yellow-500 font-semibold text-gray-900 hover:bg-yellow-600"
				>
					Start my course
				</Button>
			{:else if progress == null}
				<Sheet.Trigger>
					<Button
						variant="secondary"
						class="mt-auto w-full bg-yellow-500 font-semibold text-gray-900 hover:bg-yellow-600"
					>
						Learn more
					</Button>
				</Sheet.Trigger>
			{:else}
				<Button
					href="courses/{id}"
					variant="secondary"
					class="mt-auto w-full bg-yellow-500 font-semibold text-gray-900 hover:bg-yellow-600"
				>
					Continue
				</Button>
			{/if}
			<Sheet.Content class="overflow-y-scroll sm:max-w-[700px]">
				<Sheet.Header>
					<Sheet.Title>{title}</Sheet.Title>
					<Sheet.Description>by {author}</Sheet.Description>
				</Sheet.Header>
				<div class="mt-6 space-y-4 overflow-y-scroll">
					<img src={image} alt={title} class="w-full rounded-lg object-cover" />
					<p class="text-sm">{description}</p>
					<div class="grid grid-cols-2 gap-4 text-sm">
						<div>
							<strong>Duration:</strong>
							{duration}
						</div>
						<div>
							<strong>Level:</strong>
							{level}
						</div>
					</div>
					<div>
						<strong>Topics covered:</strong>
						<ul class="mt-2 list-inside list-disc">
							{#each topics as topic}
								<li>{topic}</li>
							{/each}
						</ul>
					</div>
					<Button class="mx-auto mt-8 flex w-1/2 justify-center">Enroll now</Button>
				</div>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</div>
