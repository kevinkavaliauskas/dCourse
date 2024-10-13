<script lang="ts">
	import CourseCard from './CourseCard.svelte';
	import Recommendations from './Recommendations.svelte';

	import { courses } from './courses';
</script>

<div class="container mx-auto px-16 py-8">
	<h1 class="mb-4 text-3xl font-bold text-white">Our recommendations</h1>
	<Recommendations {courses} />
	<h1 class="mb-4 mt-8 text-3xl font-bold text-white">All available courses</h1>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
		{#each courses as course}
			<CourseCard {...course} />
		{/each}
	</div>
</div>
