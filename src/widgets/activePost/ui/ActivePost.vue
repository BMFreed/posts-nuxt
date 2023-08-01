<script setup lang="ts">
import type { IPost } from '~/src/entities/post'
import { Post } from '~/src/entities/post'

const props = defineProps<{ postId: string }>()

const emit = defineEmits<(event: 'close') => void>()

const dialog = ref<HTMLDialogElement>()

const { data: post, pending } = await useFetch<IPost>(() => {
  dialog.value?.showModal()
  return `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${props.postId}`
})

const closePost = (): void => {
  emit('close')
}
</script>

<template>
  <dialog ref="dialog" @click="closePost">
    <div v-if="pending">Loading...</div>
    <Post v-else :post="post as IPost" @click.stop />
  </dialog>
</template>

<style>
.card {
  max-width: 800px;
}
</style>
