<script>
	import { Button } from '$lib/components/ui/button';
	import '../app.css';
</script>

<div class="flex flex-row place-content-between p-4">
	<div class="w-1/3"></div>
	<div class="flex w-1/3 items-center justify-center">
		<h2 class="font-sterion text-3xl">dCourse</h2>
	</div>
	<div class="flex w-1/3 items-center justify-end">
		<Button>Connect wallet</Button>
	</div>
</div>
<slot></slot>
