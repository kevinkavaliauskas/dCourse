<script lang="ts">
	import { AlignJustify } from 'lucide-svelte';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const navigation = [
		{
			label: 'Home',
			link: '/'
		},
		{
			label: 'My courses',
			link: '/my-courses'
		}
	];
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<AlignJustify size={30} />
	</Sheet.Trigger>
	<Sheet.Content side="left">
		<Sheet.Header>
			<h2 class="font-sterion text-3xl">dCourse</h2>
		</Sheet.Header>
		<div class="mt-4 flex flex-col space-y-2">
			{#each navigation as nav}
				<Sheet.Close class="flex justify-start">
					<a class="font-sterion transition-all duration-200 hover:text-primary" href={nav.link}
						>{nav.label}</a
					>
				</Sheet.Close>
			{/each}
		</div>
	</Sheet.Content>
</Sheet.Root>
