<script lang="ts">
	import '$lib/styles/style.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<Header />

<h1>Hi, I'm the header!</h1>

{@render children()}

<footer>Hi, I'm the footer :&gt;</footer>
