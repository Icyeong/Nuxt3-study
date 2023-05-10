<template>
  <div class="Main">
    <ContentDoc />
    <div>
      {{ products.data }}
    </div>
    <IconsBell />
  </div>
</template>

<script setup>
import { useCounterStore } from "~/stores/myStore";

const { $sayHello } = useNuxtApp();
const store = useCounterStore();

const response = await $fetch("/api/hello");
const { data: products } = await $fetch("/api/products", {});
console.log(products.data);
console.log(response);

$sayHello("Yeong!");
console.log(useNuxtApp());

console.log(store);
</script>
