// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-graphql-client'],
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.NUXT_GQL_HOST,
    }
  },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
  }
})
