interface IParameters<Item> {
  readonly items: Ref<Item[] | null>
  readonly pageSize: number
}

interface IResult<Item> {
  currentPage: Ref<number>
  numberOfPages: ComputedRef<number>
  paginatedItems: ComputedRef<Item[]>
  setCurrentPage: (newPage: number) => void
}

export const usePagination = <Item>({
  items,
  pageSize,
}: IParameters<Item>): IResult<Item> => {
  const currentPage = ref(1)
  const numberOfPages = computed(() => {
    return items.value ? Math.ceil(items.value.length / pageSize) : 0
  })

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    const end = pageSize * currentPage.value

    return items.value?.slice(start, end) ?? []
  })
  const setCurrentPage = (newPage: number): void => {
    currentPage.value = newPage
  }

  return { currentPage, numberOfPages, setCurrentPage, paginatedItems }
}
