import type { IPost } from '~/src/entities/post'
import type { IPagination } from '~/src/features/pagination'
import { usePagination } from '~/src/features/pagination'

interface IResult {
  activePostId: Ref<string | undefined>
  closeActivePost: () => void
  pagination: IPagination<IPost>
  posts: Ref<IPost[] | null>
}

export const usePosts = async (): Promise<IResult> => {
  const { data: posts } = await useFetch<IPost[]>(() => {
    return 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'
  })

  const activePostId = ref<string>()

  const closeActivePost = (): void => {
    activePostId.value = undefined
  }

  const pagination = usePagination({
    items: posts,
    pageSize: 12,
  })

  return { posts, activePostId, closeActivePost, pagination }
}
