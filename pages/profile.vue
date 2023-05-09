<template>
  <div class="Main">
    <h1>Hello Nuxt 3</h1>
    <IconsBell />
  </div>
</template>

<script setup>
const { sayHello } = useUtils();

sayHello();
</script>
