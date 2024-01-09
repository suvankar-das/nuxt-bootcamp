<script setup>
const { cars } = useCars();

const favourite = useLocalStorage("favourite", {});

const handleFavouriteCallfromChild = (id) => {
  if (id in favourite.value) {
    delete favourite.value[id];
  } else {
    favourite.value = {
      ...favourite.value,
      [id]: true,
    };
  }
};
</script>


<template>
  <div>
    <!-- Actual Car cards container  -->
    <div class="w-full">
      <!-- Individual car card start-->
      <ClientOnly>
        <CarCard
          v-for="car in cars"
          :key="car.id"
          :carObj="car"
          @childCaller="handleFavouriteCallfromChild"
          :isFavourite="car.id in favourite"
        />
      </ClientOnly>
      <!-- Actual Car cards container  end-->
    </div>
  </div>
</template>
