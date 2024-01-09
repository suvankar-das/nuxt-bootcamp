<script setup>
const { maker } = useCars();

const modal = ref({
  location: false,
  make: false,
  price: false,
});

const route = useRoute();

// for adding query string
const router = useRouter();

const cityName = ref("");

const toggleModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const updateModal = () => {
  if (!cityName.value) {
    return;
  }

  if (!isNaN(parseInt(cityName.value))) {
    throw createError({
      statusCode: 404,
      message: "Not a valid city",
    });
  }

  toggleModal("location");
  navigateTo(`/city/${cityName.value}/car/${route.params.maker}`);
  cityName.value = "";
};

const onMakerChanged = (make) => {
  toggleModal("make");
  navigateTo(`/city/${cityName.value}/car/${make}`);
};

const priceRange = useState("priceRange", () => {
  return {
    min: null,
    max: null,
  };
});


const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;
  if (!minPrice && !maxPrice) {
    return "Any";
  } else if (!minPrice && maxPrice) {
    return `<$${maxPrice}`;
  } else if (minPrice && !maxPrice) {
    return `>$${minPrice}`;
  } else {
    return `$${minPrice}-$${maxPrice}`;
  }
});

const onChangePrice = () => {
  toggleModal("price");

  if (priceRange.value.min && priceRange.value.max) {
    if (priceRange.value.min > priceRange.value.max) {
      return;
    }
  }
  router.push({
    query: {
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max,
    },
  });
};

onMounted(() => {
  cityName.value = route.params.city || "";
});
</script>

<template>
  <div>
    <!-- Car side bar -->
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
      <!-- Location start -->
      <div
        class="p-5 flex justify-between relative cursor-pointer custom-border-bottom"
      >
        <h3>Location</h3>
        <h3
          @click="toggleModal('location')"
          class="capitalize text-blue-400 font-bold"
        >
          {{ cityName }}
          <!-- Kolkata -->
        </h3>

        <!-- Modal Popup -->
        <div
          v-if="modal.location"
          class="z-50 left-56 p-5 absolute border shadow top-1 -m-1 bg-white"
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

      <!-- Location end -->

      <!-- Make start -->

      <div
        class="p-5 flex justify-between relative cursor-pointer custom-border-bottom"
      >
        <h3>Make</h3>
        <h3
          class="capitalize text-blue-400 font-bold"
          @click="toggleModal('make')"
        >
          {{ route.params.maker || "Any" }}
        </h3>
        <div
          class="z-50 absolute border shadow left-56 p-5 -m-1 top-1 w-[600px] flex justify-between flex-wrap bg-white"
          v-if="modal.make"
        >
          <h4
            v-for="make in maker"
            :key="make"
            class="w-1/3 bg-white"
            @click="onMakerChanged(make)"
          >
            {{ make }}
          </h4>
        </div>
      </div>

      <!-- Make End -->

      <!-- Price Start -->
      <div class="p-5 flex justify-between relative cursor-pointer">
        <h3>Price</h3>
        <h3
          class="capitalize text-blue-400 font-bold"
          @click="toggleModal('price')"
        >
          {{ priceRangeText }}
        </h3>

        <div
          class="z-50 absolute border shadow left-56 p-5 -m-1 top-1 bg-white"
          v-if="modal.price"
        >
          <input
            class="border p-1 rounded"
            type="number"
            v-model="priceRange.min"
            placeholder="minimum price"
          />
          <input
            class="border p-1 rounded"
            type="number"
            v-model="priceRange.max"
            placeholder="maximum price"
          />

          <button
            class="bg-blue-400 w-full mt-2 rounded text-white p-1"
            @click="onChangePrice"
          >
            Apply
          </button>
        </div>
      </div>
      <!-- Price end -->
    </div>

    <!-- Car side bar end-->
  </div>
</template>
