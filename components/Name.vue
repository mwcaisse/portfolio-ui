
<template>
    <div class="name">
        <div class="name-content">
            <h1>Mitchell Caisse</h1>
            <h2>Software Engineer</h2>
            <a
                class="button"
                href="/res/resume.pdf"
                target="_blank"
            >
                Download Resume
            </a>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .name {
        position: relative;
        background-image: url("/img/background.jpg");
        height: 100vh;
        min-height: 500px;
        max-height: 1080px;
        overflow: hidden;
        background-size: cover;
        margin-bottom: 0;
        border-radius: 0;
    }

    .name h1 {
        text-transform: uppercase;
        font-size: 5em;
        font-weight: 900;
    }

    .name h2 {
        font-weight: 500;
        font-size: 2.25em;
        margin-bottom: 30px;
    }

    .name .name-content {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }
</style>
