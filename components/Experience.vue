<template>
    <div class="card company">
        <header class="card-header">
            <p class="card-header-title">
                {{ company.name }}
            </p>
            <p class="card-header-title" style="justify-content: flex-end">
                {{ company.title }}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <p v-for="(point, ind) in company.points" :key="ind">
                    {{ point }}
                </p>
                <p>
                    <span class="has-text-weight-bold">Related Skills: </span>
                    <span>{{ company.skills.join(", ") }}</span>
                </p>
            </div>
        </div>

        <div class="card-footer">
            <p
                v-for="(date, ind) in company.dates"
                :key="ind"
                class="tenure"
            >
                {{ date.start }}  - {{ date.end }}
            </p>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            company: {
                type: Object,
                required: true
            }
        },
        data() {
            return { };
        }
    }

</script>

<style scoped>
    .company {
        margin-bottom: 1.5rem;
    }

    .tenure {
        padding: 1rem;
    }
</style>
