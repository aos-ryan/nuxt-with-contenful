<script setup>
const config = useRuntimeConfig();

const { data } = await useAsyncData('product', async(nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return await $contentfulClient.getEntries({
    content_type:'product'
  })
})

const items = data.value.items;
console.log(items);
</script>

<template>
<main>
  <h1>Ryan's Garage Sale</h1>
  <div v-for="product in items"> 
    <h1>{{product.fields.title}}</h1>
    <p>{{product.fields.price}}</p>
    <p>{{product.fields.description.content[0].content[0].value}}</p>
  </div>
  <p></p>
  <!-- <table border="1 px solid">
    <thead>
      <tr>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
    </thead>
    <tr v-for="currency in data.data" :key="data.data.id">
      <td>{{ currency.name }}</td>
      <td>{{ currency.symbol }}</td>
      <td>{{ currency.price_usd }}</td>
      <td>
        <NuxtLink :to="('/currency/' + currency.id)"> {{ currency.id }}</NuxtLink>
      </td>
    </tr>
  </table> -->
</main>
</template>