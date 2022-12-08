<script setup>
import ProductCard from '~/components/ProductCard.vue';
const { data } = await useAsyncGql('allProducts');

</script>

<template>
  <main>
  <header>All Products </header>
  <div class="product-container">
    <div class="product-card" v-for="product in data?.productCollection.items" :key="product.sys.id"> 
      <ProductCard
      :id="product.sys.id" 
      :title="product.title" 
      :price="product.price"
      :description="product.description.json.content[0].content[0].value"
      :imageUrl="product.image?.url"
      ></ProductCard>   
      </div>
  </div>
  </main>
</template>

<style scoped>


</style>