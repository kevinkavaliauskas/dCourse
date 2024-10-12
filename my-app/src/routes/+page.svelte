<script context="module" lang="ts">
	export type Course = {
		title: string;
		image: string;
		author: string;
		verified: boolean;
		description: string;
		duration: string;
		level: string;
		topics: string[];
		progress?: null | number;
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
			verified: true,
			description:
				"Embark on an exciting journey into the world of web development and take the first steps towards building your own websites from scratch! 'Introduction to Web Development' is the perfect beginner-friendly course that will guide you through the fundamentals of creating stunning, functional websites. Whether you're someone who's always wanted to understand how websites work or an aspiring developer aiming for a career in tech, this course offers a comprehensive foundation in HTML, CSS, and JavaScript—the building blocks of the web.  In just six weeks, you'll learn how to structure your web pages with HTML, style them beautifully using CSS, and bring them to life with the power of JavaScript. You'll also get hands-on experience in designing responsive websites that look great on any device. This course provides not only the technical skills you need but also insights into best practices for web development and a community of fellow learners. Join us and create something incredible on the web!",
			duration: '6 weeks',
			level: 'Beginner',
			topics: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
		},
		{
			title: 'Advanced JavaScript Techniques',
			image: 'images/js.jpg',
			author: 'Jane Smith',
			verified: true,
			description:
				"Are you comfortable with the basics of JavaScript and ready to elevate your coding skills to the next level? 'Advanced JavaScript Techniques' is a course designed for developers who want to master the intricacies of JavaScript and push their abilities beyond the fundamentals. In this intensive four-week program, you will explore advanced topics such as ES6 features, asynchronous programming, closures, and prototypes—all the skills needed to write more efficient, modern, and scalable code.  With hands-on projects and real-world examples, this course is ideal for those looking to deepen their JavaScript expertise and gain a competitive edge in the ever-evolving world of software development. Instructor Jane Smith, an experienced JavaScript developer, will guide you through the nuances of JavaScript, ensuring that you gain the confidence and proficiency to tackle complex coding challenges. Enroll now to become a true JavaScript pro!",
			duration: '4 weeks',
			level: 'Intermediate',
			topics: ['ES6', 'Asynchronous Programming', 'Closures', 'Prototypes']
		},
		{
			title: 'Responsive Design Mastery',
			image: 'images/ui.jpg',
			author: 'Alex Johnson',
			verified: false,
			description:
				"In today's digital age, users expect websites that are visually stunning, adaptable, and easy to use—no matter the device they are on. 'Responsive Design Mastery' is a specialized course that will empower you with the skills to create dynamic websites that look great on every screen size, from mobile phones to desktops. This intermediate-level course dives deep into responsive web design concepts, using cutting-edge tools and techniques like Flexbox, CSS Grid, and media queries to ensure your designs are fluid and engaging.\n \n  Throughout the five-week journey, you'll work on hands-on projects that will solidify your understanding of mobile-first principles and responsive frameworks, making sure your creations shine no matter where they're viewed. This course is perfect for those who already have a good grasp of HTML and CSS and want to specialize in responsive design to build websites that keep users coming back for more.",
			duration: '5 weeks',
			level: 'Intermediate',
			topics: ['Flexbox', 'Grid', 'Media Queries', 'Mobile First']
		},
		{
			title: 'Backend Development with Node.js',
			image: 'images/node.webp',
			author: 'Emily Brown',
			verified: true,
			description:
				"Do you want to build powerful, scalable backend systems that power dynamic web applications? 'Backend Development with Node.js' is an eight-week intensive course that teaches you how to develop sophisticated backend solutions using Node.js, one of the most popular server-side JavaScript environments. In this course, you will learn how to create robust APIs, manage data with databases, and develop secure, fast, and scalable server-side applications.  Instructor Emily Brown will take you through everything you need to know—from understanding the architecture of backend systems to building your own API from scratch using Express.js and integrating it with databases. This course is designed for those who want to work on backend systems and already have some programming experience. Get ready to take a deep dive into backend development and learn how to create the technology that powers the web!",
			duration: '8 weeks',
			level: 'Advanced',
			topics: ['Node.js', 'Express', 'APIs', 'Databases']
		},
		{
			title: 'Data Structures and Algorithms',
			image: 'images/algos.jpg',
			author: 'Michael Lee',
			verified: false,
			description:
				"If you're aiming for a career in software engineering, understanding data structures and algorithms is an absolute must. 'Data Structures and Algorithms' is a comprehensive seven-week course designed to give you the knowledge and skills necessary to solve problems efficiently and optimize your code. Through interactive lessons and practical exercises, you will explore crucial concepts like arrays, linked lists, trees, and sorting algorithms, and understand how to choose the best data structure for your problem.  Instructor Michael Lee will guide you through practical coding challenges that demonstrate the real-world applications of these concepts, equipping you with a toolkit to tackle technical interviews and create efficient solutions to complex problems. Mastering data structures and algorithms will give you the confidence you need to succeed in the tech industry—sign up today to take the next step in your journey!",
			duration: '7 weeks',
			level: 'Intermediate',
			topics: ['Arrays', 'Linked Lists', 'Trees', 'Sorting Algorithms']
		},
		{
			title: 'Machine Learning Fundamentals',
			image: 'images/ml.webp',
			author: 'Sarah Wilson',
			verified: true,
			description:
				"Have you ever wondered how Netflix recommends shows, how Amazon knows what you want to buy, or how cars can drive themselves? The answer lies in machine learning! 'Machine Learning Fundamentals' is an introductory ten-week course designed for those who want to dive into the exciting world of artificial intelligence and data science. You will explore core machine learning concepts, including supervised and unsupervised learning, neural networks, and basic techniques that data scientists use to solve real-world problems.  Instructor Sarah Wilson brings years of experience in AI and machine learning to help you understand these concepts through a hands-on, easy-to-follow approach—no advanced math or programming background required! By the end of this course, you'll have a solid foundation in machine learning, be able to implement simple models, and be ready to continue your journey into one of the most in-demand fields today. Join us to unlock the power of machine learning!",
			duration: '10 weeks',
			level: 'Beginner',
			topics: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks']
		},
		{
			title: 'Creative Writing for Beginners',
			image: 'images/creative.jpg',
			author: 'Lisa Carter',
			verified: false,
			description:
				"Do you have a story inside you waiting to be told? 'Creative Writing for Beginners' is the perfect course for aspiring writers who want to explore their creativity and develop their storytelling skills. Over the course of six weeks, you'll learn the fundamentals of creative writing, including character development, narrative structure, dialogue, and descriptive language. This course will help you unleash your imagination and find your unique voice as a writer. Instructor Lisa Carter, an experienced writer and author, will guide you through writing exercises and provide personalized feedback to help you grow. Whether you're interested in fiction, poetry, or creative nonfiction, this course is designed to inspire you and help you craft compelling stories. Join us to begin your creative writing journey!",
			duration: '6 weeks',
			level: 'Beginner',
			topics: ['Character Development', 'Narrative Structure', 'Dialogue', 'Descriptive Language']
		},
		{
			title: 'Mindfulness and Meditation',
			image: 'images/meditation.png',
			author: 'Dr. James Patel',
			verified: true,
			description:
				"In our fast-paced world, finding moments of peace and clarity is more important than ever. 'Introduction to Mindfulness and Meditation' is a four-week course designed to help you cultivate mindfulness, reduce stress, and improve your overall well-being. Through guided meditations, breathing exercises, and practical mindfulness techniques, you'll learn how to bring more balance and tranquility into your life. Instructor Dr. James Patel, a mindfulness expert, will lead you through each step of your journey, offering insights and techniques to help you develop a sustainable meditation practice. Whether you're new to meditation or looking to deepen your understanding of mindfulness, this course will provide you with the tools to live more fully in the present moment. Enroll today to start your path to inner peace!",
			duration: '4 weeks',
			level: 'Beginner',
			topics: [
				'Meditation Techniques',
				'Mindfulness Practices',
				'Stress Reduction',
				'Breathing Exercises'
			]
		},
		{
			title: 'Renaissance Art History',
			image: 'images/art.jpg',
			author: 'Dr. Sophia Reynolds',
			verified: false,
			description:
				"Discover the rich history of art and the movements that have shaped our world in 'Art History: From Renaissance to Modern.' This eight-week course takes you on a journey through the evolution of art, exploring iconic works from the Renaissance, Baroque, Impressionist, and Modern periods. You'll gain an understanding of the cultural, political, and social contexts that influenced artists and their creations. Instructor Dr. Sophia Reynolds, an art historian, will guide you through an exploration of the masterpieces of Da Vinci, Michelangelo, Van Gogh, Picasso, and many others. By the end of the course, you'll have a deeper appreciation for the power of art and its ability to reflect and shape human experience. This course is ideal for anyone with an interest in art, culture, or history—join us to explore the fascinating world of art!",
			duration: '8 weeks',
			level: 'Intermediate',
			topics: ['Renaissance Art', 'Baroque', 'Impressionism', 'Modern Art']
		},
		{
			title: 'Nutrition and Healthy Eating',
			image: 'images/food.jpg',
			author: 'Rachel Green',
			verified: true,
			description:
				"Take control of your health and well-being with 'Nutrition and Healthy Eating.' This five-week course provides a comprehensive introduction to nutrition, helping you understand the basics of healthy eating, meal planning, and the impact of nutrition on overall health. You'll learn how to make informed choices about the foods you eat, how to read nutrition labels, and how to create balanced meals that nourish your body. Instructor Rachel Green, a certified nutritionist, will guide you through practical lessons and provide actionable advice to help you make healthier choices. Whether you're looking to improve your diet, manage your weight, or simply learn more about nutrition, this course will give you the knowledge and confidence to lead a healthier lifestyle. Enroll today to start your journey towards better health!",
			duration: '5 weeks',
			level: 'Beginner',
			topics: [
				'Nutrition Basics',
				'Meal Planning',
				'Healthy Eating Habits',
				'Reading Nutrition Labels'
			]
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
