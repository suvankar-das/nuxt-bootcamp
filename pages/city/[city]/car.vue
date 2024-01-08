<script setup>
const route = useRoute();

const { capitalizeFirstLetter } = useUtilities();

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
      <NuxtErrorBoundary>
        <CarSideBar />
        <NuxtPage></NuxtPage>
        <template #error="{error}" >
          <div class="mx-auto flex text-center flex-col"></div>
          <h3>Something went wrong!</h3>
          <code>{{ error }}</code>
          <button class="text-white mt-4 py-3 px-10 bg-blue-400 rounded" @click="error.value=null">Go back</button>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>
