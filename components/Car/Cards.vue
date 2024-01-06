<script setup>

const {cars} = useCars();

</script>


<template>
  <div>
    <!-- Actual Car cards container  -->
    <div class="w-full">
      <!-- Individual car card start-->
      <CarCard v-for="car in cars" :key="car.id" :carObj="car"/>
      <!-- Actual Car cards container  end-->
    </div>
  </div>
</template>
