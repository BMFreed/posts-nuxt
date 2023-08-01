export interface IPagination {
  currentPage: number
  numberOfPages: number
  onButtonClick: (page: number) => void
}
