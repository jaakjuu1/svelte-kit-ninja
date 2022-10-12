<script>
    import Footer from "$lib/footer.svelte";
    import Title from "$lib/title.svelte";
    import '../styles/global.css';
</script>

<header>
    <Title/>
</header>
<main>
    <slot></slot>
</main>

<style>
    header {
        display: flex;
        justify-content: center;
    }

    main {
        max-width: 960px;
        margin: 20px auto;
    }
</style>