<script setup>
import ProductCard from '~/components/ProductCard.vue';

// "3WKEHHPrJWwgNXxwDFruCE" = animals
// "6AaDOGCsuSQvzDbYlJKS0u" = food
// 'fields.category.sys.id': category = query object option to filter by category

const { data } = await useAsyncData('products', async(nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return await $contentfulClient.getEntries({
    content_type:'product',
    'fields.category.sys.id': '6AaDOGCsuSQvzDbYlJKS0u'
  })
});

const items = data.value.items;

</script>

<template>
  <main>
  <header>Food</header>
  <div class="product-container">
    <div class="product-card" v-for="product in items" :key="product.sys.id"> 
      <ProductCard
      :id="product.sys.id" 
      :title="product.fields.title" 
      :price="product.fields.price"
      :description="product.fields.description.content[0].content[0].value"
      :imageUrl="product.fields.image?.fields.file.url"
      ></ProductCard>
    </div>
  </div>
</main>
</template>

<style scoped>

</style>