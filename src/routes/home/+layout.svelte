<script>
import '../../app.css';
	import Navbar from '$lib/components/home/Navbar.svelte';
	import Sidebar from '$lib/components/home/Sidebar.svelte';

	let { children } = $props();
</script>

<div class="app-layout">
	<Navbar />

	<div class="body">
		<Sidebar />

		<main class="content">
			{@render children()}
		</main>
	</div>
</div>

<style>
	.app-layout {
		width: 100%;
		height: 100vh;

		display: flex;
		flex-direction: column;
	}

	.body {
		flex: 1;
		min-height: 0;

		display: flex;
	}

	.content {
		flex: 1;
		min-width: 0;
		min-height: 0;

		padding: 24px;

		overflow-y: auto;
	}
</style>