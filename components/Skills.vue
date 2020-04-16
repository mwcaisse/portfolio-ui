<template>
    <div class="container">
        <h3 class="title">Skills</h3>

        <div
            v-for="(category, ind) in skillCategories"
            :key="ind"
            class="card"
        >
            <div class="card-header">
                <p class="card-header-title">{{ category.name }}</p>
            </div>
            <div class="card-content">
                <div class="columns is-vcentered is-centered is-multiline">
                    <div
                        v-for="(skill, sind) in category.skills"
                        :key="sind"
                        class="column is-one-sixth is-one-fourth-mobile has-text-centered"
                    >
                        <figure>
                            <app-skill-image :image-key="skill.key" />
                            <figcaption>{{ skill.title }}</figcaption>
                        </figure>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import SkillImage from "~/components/SkillImage.vue"

    export default {
        components: {
            "app-skill-image": SkillImage
        },
        props: {
            skillCategories: {
                type: Array,
                required: true
            }
        },
        data() {
            return { };
        }
    }

</script>

<style scoped>
    /** add a 1/6 column width */
    .columns.is-mobile > .column.is-one-sixth {
        flex: none;
        width: 16.6666%;
    }

    @media screen and (max-width: 768px) {
        .column.is-one-sixth-mobile {
        flex: none;
        width: 16.6666%;
        }
    }
    @media screen and (min-width: 769px), print {
        .column.is-one-sixth, .column.is-one-sixth-tablet {
        flex: none;
        width: 16.6666%;
        }
    }

    @media screen and (max-width: 1087px) {
        .column.is-one-sixth-touch {
        flex: none;
        width: 16.6666%;
        }
    }

    @media screen and (min-width: 1088px) {
        .column.is-one-sixth-desktop {
        flex: none;
        width: 16.6666%;
        }
    }

    @media screen and (min-width: 1280px) {
        .column.is-one-sixth-widescreen {
        flex: none;
        width: 16.6666%;
        }
    }

    @media screen and (min-width: 1472px) {
        .column.is-one-sixth-fullhd {
        flex: none;
        width: 16.6666%;
        }
    }
</style>
