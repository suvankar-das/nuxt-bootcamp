<script setup>
  const props = defineProps({
    carFeature:Array
  });
</script>



<template>
    <!-- CAR ATTRIBUTES start-->
      <div  class="mr-10 mt-5 border-b pb-5">
        <div v-for="f in carFeature" class="flex text-lg mt-2" :key="f">
          <p class="rounded text-lime-800 mr-3">✔</p>
          <p>{{ f }}</p>
        </div>
      </div>
      <!-- CAR ATTRIBUTES End-->
</template>
