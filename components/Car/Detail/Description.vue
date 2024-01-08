<script setup>
const props = defineProps({
  carDesc: Object,
});
</script>

<template>
  <!-- CAR DESCRISPTION start-->
  <div class="mt-5">
    <p class="mb-10">
      {{ carDesc }}
    </p>
  </div>
  <!-- CAR DESCRISPTION End-->
</template>
