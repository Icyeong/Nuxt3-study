<template>
  <div class="Main">
    <h1>Hello Nuxt 3</h1>
    <IconsBell />
  </div>
</template>

<script setup>
useHead({
  title: "profile page",
});
definePageMeta({
  middleware: "auth",
});

const { sayHello } = useUtils();

sayHello();
</script>
