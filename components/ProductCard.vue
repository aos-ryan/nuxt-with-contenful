<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
})
</script>

<template>
      <h1>{{props.title}}</h1>
      <p>{{props.price}}</p>
      <p>{{props.description}}</p>
      <img 
      v-if="props.imageUrl"
      :src="`${props.imageUrl}`" 
      />
</template>
<style scoped>

img {
  height: 200px;
  width: 250px;
}
</style>