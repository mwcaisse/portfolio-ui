<template>
    <div class="container">
        <h3 class="title">
            Contact
        </h3>

        <div class="columns is-centered is-vcentered">
            <div class="column">
                <font-awesome-icon :icon="['fas', 'envelope']" class="fa-5x contact-icon" />
            </div>
            <div class="column">
                <div class="field">
                    <label class="label">
                        Name
                    </label>
                    <div class="control has-icons-left">
                        <input
                            v-model="name"
                            class="input"
                            type="text"
                            placeholder="Enter your name"
                        >
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'user']" />
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">
                        Email
                    </label>
                    <div class="control has-icons-left">
                        <input
                            v-model="email"
                            class="input"
                            type="text"
                            placeholder="Enter your email"
                        >
                        <span class="icon is-small is-left">
                            <font-awesome-icon :icon="['fas', 'envelope']" />
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">
                        Message
                    </label>
                    <div class="control">
                        <textarea
                            v-model="message"
                            class="textarea"
                        />
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button
                            class="button is-link"
                            type="button"
                            @click="send"
                        >
                            Send
                        </button>
                    </div>
                    <div class="control">
                        <button
                            class="button is-link"
                            type="button"
                            @click="clear"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                name: "",
                email: "",
                message: ""
            }
        },
        methods: {
            send() {
                let req = new XMLHttpRequest()
                req.open("POST", "/api/message/");
                req.setRequestHeader("Content-Type", "application/json")
                req.send(JSON.stringify(this.toModel()));
                this.clear();
            },
            clear() {
                this.name = "";
                this.email = "";
                this.message = "";
            },
            toModel() {
                return {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
            }
        }
    }

</script>

<style scoped>
    .contact-icon {
        font-size: 23rem;
    }
</style>
