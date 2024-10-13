<script lang="ts">
	import type { Course } from '../courses';
	import CourseCard from '../CourseCard.svelte';

	const courses: Course[] = [
		{
			id: 1,
			title: 'Introduction to Web Development',
			image: 'images/webdev.jpeg',
			author: 'John Doe',
			verified: true,
			description:
				"Embark on an exciting journey into the world of web development and take the first steps towards building your own websites from scratch! 'Introduction to Web Development' is the perfect beginner-friendly course that will guide you through the fundamentals of creating stunning, functional websites. Whether you're someone who's always wanted to understand how websites work or an aspiring developer aiming for a career in tech, this course offers a comprehensive foundation in HTML, CSS, and JavaScript—the building blocks of the web.  In just six weeks, you'll learn how to structure your web pages with HTML, style them beautifully using CSS, and bring them to life with the power of JavaScript. You'll also get hands-on experience in designing responsive websites that look great on any device. This course provides not only the technical skills you need but also insights into best practices for web development and a community of fellow learners. Join us and create something incredible on the web!",
			duration: '6 weeks',
			level: 'Beginner',
			topics: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
			progress: 80
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
