import { IBasketinitialState } from '@/redux/slices/types'
// import { IBasket } from './../../types/Filter'

export default function getItemsFromLS() {
  const key = 'basket'
  const data = localStorage.getItem(key)

  return data ? (JSON.parse(data) as IBasketinitialState) : { totalPrice: 0, items: [] }
}
