export interface ISort {
  name: string
  sortProperty: string
}

export interface FilterState {
  categoryId: number | string
  pageCount: number | string
  sort: ISort
}
