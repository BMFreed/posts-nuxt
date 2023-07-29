<script setup lang="ts">
const count = ref(0);
const increaseCount = () => {
  count.value += 1;
};
</script>

<template>
  {{ count }}
  <button @click="increaseCount">Count</button>
</template>
