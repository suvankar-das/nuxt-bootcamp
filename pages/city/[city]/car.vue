<script setup>
const route = useRoute();

useHead({
  title: `${
    route.params.maker ? route.params.maker.toUpperCase() : "Cars"
  } in ${route.params.city.toUpperCase()}`,
});

definePageMeta({
  layout: "central-aligned",
});
</script>

<template>
  <div>
    <div class="mt-32 flex">
      <CarSideBar />
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>
