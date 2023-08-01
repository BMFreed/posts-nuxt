<script setup lang="ts">
import type { IPost } from '../model/IPost'

interface IProps {
  onTitleClick?: () => void
  post: IPost
}

const props = defineProps<IProps>()

const normalizedDate = computed(() => {
  return new Date(props.post.createdAt).toLocaleString()
})
</script>

<template>
  <article class="card">
    <div class="card-link">
      <img alt="" class="img-fluid" src="{{post.image}}}" />
    </div>
    <div class="card-block">
      <h2 class="card-title">
        <div class="card-link" @click="onTitleClick">
          {{ post.title }}
        </div>
      </h2>
      <h4 class="card-text">{{ post.description }}</h4>
      <div class="wrapfooter">
        <span class="author-meta">
          <span class="post-date">{{ normalizedDate }}</span>
        </span>
      </div>
    </div>
  </article>
</template>

<style>
.card {
  border-radius: 4px;
}

h2.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.25;
}

h4.card-text {
  color: rgba(0, 0, 0, 0.44);
  font-size: 0.95rem;
  line-height: 1.4;
  font-weight: 400;
}

.wrapfooter {
  font-size: 12px;
  margin-top: 30px;
}

.author-meta {
  display: flex;
}

.post-date {
  color: rgba(0, 0, 0, 0.44);
}

.card-link {
  cursor: pointer;
}
</style>
