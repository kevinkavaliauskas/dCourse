<script context="module" lang="ts">
	export type Course = {
		title: string;
		image: string;
		author: string;
		verified: boolean;
	};
</script>

<script lang="ts">
	import CourseCard from './CourseCard.svelte';
	import Recommendations from './Recommendations.svelte';

	const courses: Course[] = [
		{
			title: 'Introduction to Web Development',
			image: 'images/webdev.jpeg',
			author: 'John Doe',
			verified: true
		},
		{
			title: 'Advanced JavaScript Techniques',
			image: 'images/js.jpg',
			author: 'Jane Smith',
			verified: true
		},
		{
			title: 'Responsive Design Mastery',
			image: 'images/ui.jpg',
			author: 'Alex Johnson',
			verified: false
		},
		{
			title: 'Backend Development with Node.js',
			image: 'images/node.webp',
			author: 'Emily Brown',
			verified: true
		},
		{
			title: 'Data Structures and Algorithms',
			image: 'images/algos.jpg',
			author: 'Michael Lee',
			verified: false
		},
		{
			title: 'Machine Learning Fundamentals',
			image: 'images/ml.webp',
			author: 'Sarah Wilson',
			verified: true
		}
	];
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
