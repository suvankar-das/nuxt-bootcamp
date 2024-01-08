<script setup>
const modal = ref({
  location: false,
  make: false,
  price: false,
});

const route = useRoute();

const cityName = ref("");

const toggleModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const updateModal = () => {
  if (!cityName.value) {
    return;
  }

  if(!isNaN(parseInt(cityName.value))){
    throw createError({
      statusCode:404,
      message:'Not a valid city'
    })
  }

  toggleModal("location");
  navigateTo(`/city/${cityName.value}/car/${route.params.maker}`);
  cityName.value = "";
};
</script>

<template>
  <div>
    <!-- Car side bar -->
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
      <div
        class="p-5 flex justify-between relative cursor-pointer custom-border-bottom"
      >
        <h3>Location</h3>
        <h3
          @click="toggleModal('location')"
          class="capitalize text-blue-400 font-bold"
        >
          <!-- {{ cityName }} -->
          kolkata
        </h3>

        <!-- Modal Popup -->
        <div
          v-if="modal.location"
          class="left-56 p-5 absolute border shadow top-1 -m-1 bg-white"
        >
          <input class="border p-1 rounded" type="text" v-model="cityName" />
          <button
            @click="updateModal"
            class="bg-blue-400 mt-2 w-full rounded text-white p-1"
          >
            Apply
          </button>
        </div>
      </div>

      <div
        class="p-5 flex justify-between relative cursor-pointer custom-border-bottom"
      >
        <h3>Make</h3>
        <h3 class="capitalize text-blue-400 font-bold">Hyundai</h3>
      </div>

      <div class="p-5 flex justify-between relative cursor-pointer">
        <h3>Price</h3>
        <h3 class="capitalize text-blue-400 font-bold">Any</h3>
      </div>
    </div>

    <!-- Car side bar end-->
  </div>
</template>
