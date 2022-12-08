// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-graphql-client'],
  runtimeConfig: {
    public: {
      CTF_SPACE_ID: process.env.NUXT_CTF_SPACE_ID,
      CTF_ACCESS_TOKEN: process.env.NUXT_CTF_CDA_ACCESS_TOKEN,
      GQL_HOST: process.env.NUXT_GQL_HOST,
    }
  },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
  }
})
