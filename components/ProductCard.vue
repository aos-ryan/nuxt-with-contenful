<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
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
      <NuxtLink :to="(/item/ + props.id)" class="product-link">
        <h1>{{props.title}}</h1>
        <img 
        v-if="props.imageUrl"
        :src="`${props.imageUrl}`" 
        />
        <p>{{props.price}}</p>
        <p>{{props.description}}</p>
      </NuxtLink>
</template>
<style scoped>
img {
  height: 200px;
  width: 250px;
}
.product-link {
  text-decoration: none;
  color:black;
}
</style>