<template>
    <div>
        <nav class="navbar is-dark" role="navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    Mitchell Caisse
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item">
                        About
                    </a>
                    <a class="navbar-item">
                        Experience
                    </a>
                    <a class="navbar-item">
                        Technical Skills
                    </a>
                    <a class="navbar-item">
                        Projects
                    </a>
                    <a class="navbar-item">
                        Contact
                    </a>
                    <a class="navbar-item" href="https://codeuntamed.com/">
                        Blog
                    </a>
                </div>
            </div>
        </nav>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Mitchell Caisse
                    </h1>
                    <h2 class="subtitle">
                        Software Engineer
                    </h2>
                </div>
            </div>
        </section>
        <section class="section">
            <app-about />
        </section>
        <section class="section">
            <div class="container">
                <h2 class="title">Experience</h2>

                <div v-for="(company, ind) in companies" :key="ind">
                    <app-experience :company="company" />
                </div>

            </div>
        </section>

        <section class="section">
            <app-skills :skill-categories="skillCategories" />
        </section>

        <section class="section">
            <app-projects :projects="projects" />
        </section>
    </div>
</template>

<script>

    import data from "~/data/index.json"

    import About from "~/components/About.vue"
    import Experience from "~/components/Experience.vue"
    import Skills from "~/components/Skills.vue"
    import Projects from "~/components/Projects.vue"

    export default {
        components: {
            "app-about": About,
            "app-experience": Experience,
            "app-skills": Skills,
            "app-projects": Projects
        },
        data() {
            return data;
        }
    }
</script>
