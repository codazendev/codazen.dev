<!-- +layout.svelte -->
<script>
    let { children } = $props();
</script>

<header>Hi, I'm a header</header>

<main>
    {@render children()}
</main>

<footer>Hello, I'm the footer.</footer>
