<script setup>


const props = defineProps({
  carObj: Object,
});


const navigateToCarDetails = ()=>{
  const routeUrl = `/car/${props.carObj.name}-${props.carObj.id}`;
  navigateTo(routeUrl);
}

</script>


<template>
  <div>
    <div
      class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
      @click="navigateToCarDetails"
    >
      <div class="flex h-full">
        <img
          :src="carObj.url"
          alt="car image"
          class="w-[300px] h-full"
        />
        <div class="p-4 flex flex-col">
          <div>
            <h1 class="text-2xl text-blue-700">{{ carObj?.name }}</h1>
            <p class="text-green-700">
              {{ carObj?.description }}
            </p>
          </div>
          <div class="mt-auto text-xl">${{ carObj.price }}</div>
        </div>
      </div>
    </div>
    <!-- Individual car card end-->
  </div>
</template>
