<script>
    import { page } from '$app/stores';
    import Footer from '$lib/footer.svelte';
</script>

<div class="error">
    <h1>Oho..</h1>
    
    <h2>{$page.status}: {$page.error.message}</h2>
    
    <Footer/>
</div>

<style>
    .error {
        display: grid;
        place-content: center;
    }
    h1 {
        text-align: center;
    }
</style>