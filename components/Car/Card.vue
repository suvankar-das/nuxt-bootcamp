<script setup>
import heartFilled from "@/assets/images/002-heartFilled.png";
import heartOutlined from "@/assets/images/002-heartOutline.png";

const props = defineProps({
  carObj: Object,
});

const navigateToCarDetails = () => {
  const routeUrl = `/car/${props.carObj.name}-${props.carObj.id}`;
  navigateTo(routeUrl);
};

// useState compasable is recommended than ref()
// it take 2 param , uique key and function that will return initial value
const favourite = useState(`favourite-${props.carObj.id}`, () => {
  return false;
});
</script>


<template>
  <div>
    <div
      class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
    >
      <img
        class="absolute w-7 right-5 top-3 z-50"
        :src="favourite ? heartFilled : heartOutlined"
        @click="favourite = !favourite"
      />
      <div class="flex h-full" @click="navigateToCarDetails">
        <NuxtImg :src="carObj.url" alt="car image" class="w-[300px] h-full" />
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
