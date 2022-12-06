<script setup>
const config = useRuntimeConfig();

const { data } = await useAsyncData('product', async(nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return await $contentfulClient.getEntries({
    content_type:'product'
  })
})

const items = data.value.items;
// console.log(items);
</script>

<template>
<main>
  <h1>Ryan's Garage Sale</h1>
  <div class="product-container" v-for="product in items"> 
    <h1>{{product.fields.title}}</h1>
    <p>{{product.fields.price}}</p>
    <p>{{product.fields.description.content[0].content[0].value}}</p>
    <img 
    v-if="product.fields.image"
    :src="`${product.fields.image.fields.file.url}`" 
    />
  </div>
</main>
</template>

<style scoped>
.product-container {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  border-radius: 20px;
  margin-bottom: 18px;
}

.product-container:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
img {
  height: 200px;
  width: 250px;
}
</style>