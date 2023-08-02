<script setup lang="ts">
import { Post } from '~/src/entities/post'
import { Pagination } from '~/src/features/pagination'
import { ActivePost } from '~/src/widgets/activePost'

import { usePosts } from '../model/usePosts'

const {
  posts,
  activePostId,
  closeActivePost,
  pagination: {
    paginatedItems: paginatedPosts,
    currentPage,
    setCurrentPage,
    numberOfPages,
  },
} = await usePosts()
</script>

<template>
  <main>
    <div v-show="posts" class="card-columns">
      <div v-for="post in paginatedPosts" :key="post.id">
        <Post :on-title-click="() => (activePostId = post.id)" :post="post" />
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
