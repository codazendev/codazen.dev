<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<h1>Hi, I'm the header!</h1>

{@render children()}

<footer>Hi, I'm the footer :&gt;</footer>