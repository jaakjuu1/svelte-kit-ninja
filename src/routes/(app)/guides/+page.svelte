<script>
    export let data
</script>

<div class="guides">
    {#each data.guides as guide}
        <li><a data-sveltekit-prefetch href={`guides/${guide.id}`}>{guide.title}</a></li>
    {/each}
</div>
<style>
    .guides {
        margin: 9rem; 
    }
</style>