export interface ISort {
  name: string
  sortProperty: string
}

export interface FilterState {
  categoryId: number
  sort: {
    name: string
    sortProperty: string
  }
}
