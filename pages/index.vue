<template>
  <div class="Main">
    <h1>Hello Nuxt 3</h1>
    <IconsBell />
  </div>
</template>

<script setup>
const { $sayHello } = useNuxtApp();
$sayHello("Yeong!");
console.log(useNuxtApp());
</script>
