// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['nuxt3-breakpoints'],
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            Lato: true,
        }
    }
})
