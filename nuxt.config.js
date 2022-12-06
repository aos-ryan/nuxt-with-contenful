// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      CTF_SPACE_ID: process.env.NUXT_CTF_SPACE_ID,
      CTF_ACCESS_TOKEN: process.env.NUXT_CTF_CDA_ACCESS_TOKEN
    }
  }
})
