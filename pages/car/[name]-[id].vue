<script setup>
const route = useRoute();

useHead({
  title: route.params.name.toUpperCase(),
});
</script>

<template>
  <div>
    <NavBar />

    <!-- CAR DETAIL PAGE Start-->
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <CarDetailHero />

      <CarDetailAttribute />

      <CarDetailDescription />

      <CarDetailContact />
    </div>
    <!-- CAR DETAIL PAGE  End -->
  </div>
</template>
