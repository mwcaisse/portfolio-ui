<template>
    <div class="container">
        <h3 class="title">
            Projects
        </h3>
        <div class="columns is-vcentered is-centered is-multiline">
            <div
                v-for="(project, ind) in projects"
                :key="ind"
                class="column is-one-third"
            >
                <div class="card">
                    <div class="card-image">
                        <figure class="image">
                            <img :src="require('~/assets/img/projects/' + project.thumbnail)">
                        </figure>
                    </div>
                    <div class="card-content">
                        <p class="title is-4">
                            {{ project.name }}
                        </p>
                        <p class="project-description">
                            {{ project.description }}
                        </p>
                    </div>
                    <div class="card-footer">
                        <a
                            v-for="(github, gind) in project.github"
                            :key="gind"
                            class="card-footer-item project-github-link"
                            :href="github"
                        >
                            <font-awesome-icon
                                :icon="['fab', 'github']"
                                class="fa-2x"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            projects: {
                type: Array,
                required: true
            }
        }
    }

</script>

<style scped>
    .project-description {
        height: 2rem;
    }

    a.project-github-link {
        color: #4a4a4a;
    }
    a.project-github-link:hover {
        color: #3273dc;
        transform: scale(1.5);
    }

</style>
