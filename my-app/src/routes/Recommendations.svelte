<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { Course } from './+page.svelte';
	import CourseCard from './CourseCard.svelte';

	export let courses: Course[];
</script>

<Carousel.Root
	plugins={[
		Autoplay({
			delay: 2000
		})
	]}
	opts={{
		align: 'start'
	}}
	class="w-full"
>
	<Carousel.Content class="h-full">
		{#each courses as course, i (i)}
			<Carousel.Item class="h-full md:basis-1/2 lg:basis-1/4">
				<div class="h-full">
					<Card.Root class="h-full">
						<Card.Content class="flex h-full items-center justify-center p-0">
							<CourseCard {...course} />
						</Card.Content>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<!-- <Carousel.Previous />
	<Carousel.Next /> -->
</Carousel.Root>
