<script lang="ts">
	import type { Course } from '../courses';
	import CourseCard from '../CourseCard.svelte';

	const courses: Course[] = [
		{
			id: 9,
			title: 'Renaissance Art History',
			image: 'images/art.jpg',
			author: 'Dr. Sophia Reynolds',
			verified: false,
			description:
				"Discover the rich history of art and the movements that have shaped our world in 'Art History: From Renaissance to Modern.' This eight-week course takes you on a journey through the evolution of art, exploring iconic works from the Renaissance, Baroque, Impressionist, and Modern periods. You'll gain an understanding of the cultural, political, and social contexts that influenced artists and their creations. Instructor Dr. Sophia Reynolds, an art historian, will guide you through an exploration of the masterpieces of Da Vinci, Michelangelo, Van Gogh, Picasso, and many others. By the end of the course, you'll have a deeper appreciation for the power of art and its ability to reflect and shape human experience. This course is ideal for anyone with an interest in art, culture, or history—join us to explore the fascinating world of art!",
			duration: '8 weeks',
			level: 'Intermediate',
			topics: ['Renaissance Art', 'Baroque', 'Impressionism', 'Modern Art'],
			progress: 75
		},
		{
			id: 2,
			title: 'Advanced JavaScript Techniques',
			image: 'images/js.jpg',
			author: 'Jane Smith',
			verified: true,
			description:
				"Are you comfortable with the basics of JavaScript and ready to elevate your coding skills to the next level? 'Advanced JavaScript Techniques' is a course designed for developers who want to master the intricacies of JavaScript and push their abilities beyond the fundamentals. In this intensive four-week program, you will explore advanced topics such as ES6 features, asynchronous programming, closures, and prototypes—all the skills needed to write more efficient, modern, and scalable code.  With hands-on projects and real-world examples, this course is ideal for those looking to deepen their JavaScript expertise and gain a competitive edge in the ever-evolving world of software development. Instructor Jane Smith, an experienced JavaScript developer, will guide you through the nuances of JavaScript, ensuring that you gain the confidence and proficiency to tackle complex coding challenges. Enroll now to become a true JavaScript pro!",
			duration: '4 weeks',
			level: 'Intermediate',
			topics: ['ES6', 'Asynchronous Programming', 'Closures', 'Prototypes'],
			progress: 0
		}
	];
</script>

<div class="container mx-auto px-16 py-8">
	<h1 class="mb-4 mt-8 text-3xl font-bold text-white">My courses</h1>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
		{#each courses as course}
			<CourseCard {...course} progress={course.progress} />
		{/each}
	</div>
</div>
