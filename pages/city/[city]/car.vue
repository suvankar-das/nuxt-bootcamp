<script setup>
const route = useRoute();

const {capitalizeFirstLetter} = useUtilities();

useHead({
  title: `${
    route.params.maker ? capitalizeFirstLetter(route.params.maker) : "Cars"
  } in ${capitalizeFirstLetter(route.params.city)}`,
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
