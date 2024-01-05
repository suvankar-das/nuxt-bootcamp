<script setup>
const cityName = ref("");
const isEmptySearch = ref(false);

// construct route /city/city_name/car
const handleSearch = () => {
  if (!cityName.value) {
    return (isEmptySearch.value = true);
  }
  navigateTo(`/city/${cityName.value}/car`);
};
</script>

<template>
  <div>
    <!-- Search Bar Starts -->
    <div
      class="font-serif w-[1000px] text-2xl rounded-full flex justify-between overflow-hidden drop-shadow-2xl mx-auto bg-white"
    >
      <input
        type="text"
        class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
        placeholder="Search car.."
        v-model="cityName"
        :class="isEmptySearch ? 'border border-red-900' : ''"
      />
      <button class="bg-sky-500 px-10 text-white" @click="handleSearch">
        Search
      </button>
    </div>

    <!-- Search bar ends -->
  </div>
</template>
