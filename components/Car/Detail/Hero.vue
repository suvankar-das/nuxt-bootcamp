<script setup>
  const props = defineProps({
    carDetails:Object
  });
</script>

<template>
    <div>
        <!-- CAR HERO start-->
        <div class="mt-10">
          <NuxtImg
            :src="carDetails.url"
            class="w-full"
            alt=""
          />
          <h1 class="mt-10 text-4xl">{{ carDetails.name }}</h1>
          <div
            class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between"
          >
            <div class="flex">
              <p class="mr-2">{{ carDetails.seats }} seats</p>
              <p class="mr-2">|</p>
              <p class="mr-2">{{  carDetails.miles}} miles</p>
            </div>
            <div>
              <p class="font-bold text-2xl">${{ carDetails.price }}</p>
            </div>
          </div>
        </div>
        <!-- CAR HERO end-->
    </div>
</template>
