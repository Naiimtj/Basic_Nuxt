// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // routeRules:{
  //   '/': {prerender: true},
  //   '/about': { ssr: true},
  //   '/services': { ssr: false}
  //   }
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  runtimeConfig:{
    mongodbUri: process.env.MONGODB_URI
  }
});
