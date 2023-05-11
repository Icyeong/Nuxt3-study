<template>
  <div class="Main">
    <ContentDoc />
    <div>
      {{ pending ? "Loading" : products.data }}
    </div>
    <IconsBell />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "This is my homepage for Nuxt course",
  meta: [
    { name: "description", content: "My amazing site." },
    {
      name: "keywords",
      content: "Nuxt.js, Vue.js, JavaScript, web development",
    },
    {
      name: "og:title",
      content: "https://example.com/images/nuxt-course-og-image.jpg",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ children: "console.log('Hello world')" }],
});

import { useCounterStore } from "~/stores/myStore";

const { $sayHello } = useNuxtApp();
const store = useCounterStore();

const response = await $fetch("/api/hello");
const { data: products, pending } = await useLazyFetch("/api/products", {});
// console.log(products.data);
console.log(response);

$sayHello("Yeong!");
console.log(useNuxtApp());

console.log(store);
</script>
