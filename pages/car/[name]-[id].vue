<script setup>
const route = useRoute();

const {capitalizeFirstLetter} = useUtilities();

useHead({
  title: capitalizeFirstLetter(route.params.name),
});

definePageMeta({
  layout:'central-aligned'
})

</script>

<template>
  <div>
    <!-- CAR DETAIL PAGE Start-->
    <!-- <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    > -->
      <CarDetailHero />

      <CarDetailAttribute />

      <CarDetailDescription />

      <CarDetailContact />
    <!-- </div> -->
    <!-- CAR DETAIL PAGE  End -->
  </div>
</template>
