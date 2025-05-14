<!-- +layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '$lib/styles/style.css';
    let { children } = $props();
</script>

<Header />

<main>
    {@render children()}
</main>

<Footer />
