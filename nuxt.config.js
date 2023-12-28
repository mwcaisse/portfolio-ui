/* eslint-disable */

const path = require("path")
const multiLoader = require("multi-loader")

export default defineNuxtConfig({
    target: "static",

    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: "en"
        },
        title: "Mitchell Caisse - Software Engineer",
        meta: [
            {
                charset: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            }
        ],
        script: [
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: "#fff"
    },

    /*
     ** Global CSS
     */
    css: [
        "bulma",
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        {
            src: "~/plugins/font-awesome"
        }
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        "@nuxtjs/eslint-module",
        "@nuxt/image",
    ],

    /*
     ** Build configuration
     */
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },

        /*
         ** You can extend webpack config here
         */
        extend (config, ctx) {

        }
    },
    image: {

    }
});
