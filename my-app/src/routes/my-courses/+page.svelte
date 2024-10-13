<script lang="ts">
	import type { Course } from '../courses';
	import CourseCard from '../CourseCard.svelte';
	import { courses } from '../courses';

	import { courseStore } from '$lib/stores/coursesStore';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import JSConfetti from 'js-confetti';
	import { page } from '$app/stores';

	const isNew = $page.url.searchParams.has('new');

	const courseIds: number[] = get(courseStore).courses;
	let matchingCourses: Course[];

	onMount(() => {
		if (browser) {
			const storedCourseIds = localStorage.getItem('courseIds');
			console.log(storedCourseIds);
			if (storedCourseIds) {
				const ids = JSON.parse(storedCourseIds);
				// Update courseIds with the fetched ids from localStorage
				courseIds.push(...ids);
				matchingCourses = courses.filter((course) => courseIds.includes(course.id));
			}

			if (isNew) {
				const jsConfetti = new JSConfetti();
				jsConfetti.addConfetti();
			}
		}
	});
</script>

<div class="container mx-auto px-16 py-8">
	<h1 class="mb-4 mt-8 text-3xl font-bold text-white">My courses</h1>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
		{#if matchingCourses}
			{#each matchingCourses as course}
				<CourseCard {...course} progress={0} />
			{/each}
		{/if}
	</div>
</div>
