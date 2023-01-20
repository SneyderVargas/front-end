// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ... other options
    modules: [
        // ...
        '@pinia/nuxt',
    ],
    css: ['vuetify/styles'],
    build: {
        transpile: ['vuetify']
    },
    runtimeConfig: {
        secretKey: process.env.API_ROUTE_SECRET,
        public: {
            SUPABASE_KEY: process.env.SUPABASE_KEY || 'https://openexchangerates.org/api/',
            SUPABASE_URL: process.env.SUPABASE_URL || '0fd90e4b7e9b459db409f8506aa39566'
        }
    },
})
