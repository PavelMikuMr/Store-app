export interface ISort {
  name: string
  sortProperty: string
}

export interface FilterState {
  searchValue: string
  categoryId: number | string
  pageCount: number | string
  sort: ISort
}

export interface IBasket {
  id: number
  title: string
  price: number
  imgUrl: string[]
  color: string
  size: string
  count?: number
}
