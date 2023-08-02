export interface IPagination<Item = unknown> {
  currentPage: Ref<number>
  numberOfPages: ComputedRef<number>
  paginatedItems: ComputedRef<Item[]>
  setCurrentPage: (newPage: number) => void
}
