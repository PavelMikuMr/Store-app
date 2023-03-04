import IFurniture from './IFurniture'

export default interface IOutletContext {
  onChangeCategory: (id: number) => void
  orderSetting: (term: string) => void
  valueForSearch: string
  furnitureItems: IFurniture[]
  isLoading: boolean
  isMountedLayout: boolean
  isFetching: boolean
}
