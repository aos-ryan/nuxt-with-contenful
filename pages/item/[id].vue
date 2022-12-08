<script setup>
const route = useRoute();

const { data } = await useAsyncGql('productEntryQuery')
// const product = data.value;

</script>

<template>
<main>
  <div>
    <p>Data: {{data}}</p>
    <!-- <h1>{{product.fields.title}}</h1>
    <img
    v-if="product.fields.image" 
    :src="`${product.fields.image?.fields.file.url}`"
    />
    <p>Price: {{product.fields.price}}</p>
    <p>Description: {{product.fields.description.content[0].content[0].value}}</p> -->
  </div>
</main>
</template>

<style scoped>
img {
  height: 200px;
  width: 250px;
}
</style>