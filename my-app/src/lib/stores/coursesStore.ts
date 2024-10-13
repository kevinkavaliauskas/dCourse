import { writable } from 'svelte/store';

export const courseStore = writable({
	courses: [] as number[] // Changed to initialize as an empty array with type assertion
});

export function addCourse(id: number) {
	courseStore.update((store) => {
		const updatedCourses = [...store.courses, id]; // Ensure only numbers are added
		localStorage.setItem('courseIds', JSON.stringify(updatedCourses)); // Save to localStorage
		console.log('set to local storage');
		return {
			...store,
			courses: updatedCourses
		};
	});
}
