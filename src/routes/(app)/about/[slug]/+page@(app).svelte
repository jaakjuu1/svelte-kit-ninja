<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="slugs">
  <h1>{data.title}</h1>
  <div>{@html data.content}</div>
  <div>{@html data.info}</div>
</div>

<style>
  .slugs {
    padding: 2rem 5rem;
  }
</style>
