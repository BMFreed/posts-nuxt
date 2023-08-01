<script setup lang="ts">
import type { IPost } from '~/src/entities/post'
import { Post } from '~/src/entities/post'
import { Pagination, usePagination } from '~/src/features/pagination'
import { ActivePost } from '~/src/widgets/activePost'

const { data: posts } = await useFetch<IPost[]>(() => {
  return 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'
})

const activePostId = ref<string>()
const setActivePostId = (id: string | undefined): void => {
  activePostId.value = id
}

const closeActivePost = (): void => {
  setActivePostId(undefined)
}

const {
  currentPage,
  numberOfPages,
  setCurrentPage,
  paginatedItems: paginatedPosts,
} = usePagination({
  items: posts,
  pageSize: 12,
})
</script>

<template>
  <main>
    <div v-show="posts" class="card-columns">
      <div v-for="post in paginatedPosts" :key="post.id">
        <Post :on-title-click="() => setActivePostId(post.id)" :post="post" />
      </div>
    </div>
    <ActivePost
      v-if="activePostId"
      :post-id="activePostId"
      @close="closeActivePost"
    />
    <Pagination
      :current-page="currentPage"
      :number-of-pages="numberOfPages"
      :on-button-click="setCurrentPage"
    />
  </main>
</template>

<style>
.card-columns {
  padding: 60px;
}
</style>
