<template>
  <h1> Ryan's Garage Sale </h1>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/categories/food"> Food</NuxtLink>
    <NuxtLink to="/categories/animals"> Animals</NuxtLink>
  </nav>
  <main>
    <slot />
  </main>
</template>