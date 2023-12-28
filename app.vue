<template>
    <div>
        <nav class="navbar is-dark is-fixed-top" role="navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    Mitchell Caisse
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item" href="#about">
                        About
                    </a>
                    <a class="navbar-item" href="#experience">
                        Experience
                    </a>
                    <a class="navbar-item" href="#skills">
                        Technical Skills
                    </a>
                    <a class="navbar-item" href="#projects">
                        Projects
                    </a>
                    <a class="navbar-item" href="#contact">
                        Contact
                    </a>
                    <a class="navbar-item" href="https://codeuntamed.com/">
                        Blog
                    </a>
                </div>
            </div>
        </nav>

        <app-name />

        <a id="about" class="anchor" />
        <section class="section">
            <app-about />
        </section>

        <a id="experience" class="anchor" />
        <section class="section">
            <div class="container">
                <h2 class="title">
                    Experience
                </h2>

                <div v-for="(company, ind) in companies" :key="ind">
                    <app-experience :company="company" />
                </div>
            </div>
        </section>

        <a id="skills" class="anchor" />
        <section class="section">
            <app-skills :skill-categories="skillCategories" />
        </section>

        <a id="projects" class="anchor" />
        <section class="section">
            <app-projects :projects="projects" />
        </section>

        <a id="contact" class="anchor" />
        <section class="section">
            <app-contact />
        </section>

        <footer class="footer is-vcentered">
            <span>&copy; 2023 Mitchell Caisse</span>
            <span class="is-pulled-right">
                <a
                    href="https://github.com/mwcaisse"
                    target="_blank"
                    rel="noopener"
                >
                    <font-awesome-icon :icon="['fab', 'github']" class="fa-2x action-icon" />
                </a>
            </span>
        </footer>
    </div>
</template>

<script>

    import data from "~/data/index.json"

    import Name from "~/components/Name.vue"
    import About from "~/components/About.vue"
    import Experience from "~/components/Experience.vue"
    import Skills from "~/components/Skills.vue"
    import Projects from "~/components/Projects.vue"
    import Contact from "~/components/Contact.vue"

    export default {
        components: {
            "app-name": Name,
            "app-about": About,
            "app-experience": Experience,
            "app-skills": Skills,
            "app-projects": Projects,
            "app-contact": Contact
        },
        data() {
            return data;
        }
    }
</script>

<style scoped>
.action-icon {
    color: #4a4a4a;
}

.action-icon:hover {
    color: #3273dc;
    transform: scale(1.5);
    cursor: pointer;
}
</style>
