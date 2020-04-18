/* eslint-disable */

const path = require("path")
const multiLoader = require("multi-loader")

export default {
    mode: "universal",

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
    css: ["bulma"],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        {
            src: "~/plugins/font-awesome"
        }
    ],

    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
    //Doc: https://github.com/nuxt-community/eslint-module
        "@nuxtjs/eslint-module",
        "@aceforth/nuxt-optimized-images"
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [],

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

    /*
     ** @aceforth/nuxt-optimized-images configuration
     */
    optimizedImages: {
        optimizeImages: true,
        inlineImageLimit: -1 // inlining webp images isn't working, its rendering as [object module] instead of a url
    }
}
