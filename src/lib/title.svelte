<script>
    export let title = 'Ninja Gaming'
</script>

<div class="title">
    <img src="/controller.svg" alt="controller">
    <h1>{title}</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/guides">Guides</a>
    </nav>
</div>

<style>
    .title {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .title img {
        display: inline-block;
        filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
        max-height: 100px;
    }

    .title h1 {
        text-align: center;
        margin-bottom: 1rem;
    }
    nav {
        display: flex;
        width: 500px;
        justify-content: space-around;
    }
</style>