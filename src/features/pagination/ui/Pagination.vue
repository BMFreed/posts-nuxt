<script setup lang="ts">
import { range } from 'remeda'

import type { IPagination } from '../model/IPagination'

defineProps<IPagination>()
</script>

<template>
  <ul class="pagination">
    <li v-for="pageNumber in range(1, numberOfPages)" :key="pageNumber">
      <button
        class="btn"
        :class="{ 'btn-primary': pageNumber === currentPage }"
        @click="() => onButtonClick(pageNumber)"
      >
        {{ pageNumber }}
      </button>
    </li>
  </ul>
</template>

<style>
.pagination {
  width: 100%;
  justify-content: center;
  gap: 10px;
}
</style>
