<script setup>
import ProductCard from './ProductCard.vue';

const { data } = await useAsyncData('products', async(nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return await $contentfulClient.getEntries({
    content_type:'product'
  })
});

const items = data.value.items;
</script>

<template>
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
</template>

<style scoped>
.product-container {
  display: flex;
}
.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  border-radius: 20px;
  margin-bottom: 18px;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

</style>