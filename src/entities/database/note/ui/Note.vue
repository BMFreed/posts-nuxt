<script setup lang="ts">
import { someFunction } from './someFunction'

const count = ref(1)

count.value = someFunction(count.value)
</script>

<template>
  <div>Я запись в базе данных №{{ count }}!</div>
</template>
