import Furniture from '@components/Furniture'
import IFurniture from '_types/IFurniture'
import $ from '@common/HandleLayout.module.scss'
import Skeleton from './Skeleton'

const HandleLayout = ({
  items,
  isLoading
}: {
  items: IFurniture[]
  isLoading: boolean
}) => {
  const renderSkeleton = (): React.ReactNode => {
    return [...new Array(6).fill(0).map((v, i) => i + 1)].map((item) => {
      return (<Skeleton key={item} />) as React.ReactNode
    })
  }
  const renderItems = () => {
    return items.map((item: IFurniture): React.ReactNode => {
      return (
        <Furniture
          price={item.price}
          title={item.title}
          imgUrl={item.imgUrl}
          key={item.title}
          rating={item.rating}
          id={item.id}
        />
      )
    })
  }
  return (
    <>
      <h1 className='heading text-center lg:text-left'>Get, Buy & Sell</h1>
      <div className={$.handleLayout}>{isLoading ? renderSkeleton() : renderItems()}</div>
    </>
  )
}
export default HandleLayout
