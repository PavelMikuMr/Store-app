/* eslint-disable import/extensions */
import Furniture from '@components/Furniture'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper'
import tw from 'twin.macro'
import $ from '@common/HandleLayout.module.scss'
import IFurniture from '_types/IFurniture'
import { flower } from '@assets/images'
import Skeleton from './Skeleton'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/grid'
import '@styles/swiper/grid.scss'

const styles = {
  container: tw`flex justify-center items-center w-full`,
  text: tw`font-poppins text-2xl`
}

const NothingFoundInSearch = () => (
  <div css={styles.container}>
    <div css={styles.text}>Nothing found 😁</div>
  </div>
)

const HandleLayout = ({
  items,
  isLoading,
  findValue
}: {
  items: IFurniture[]
  isLoading: boolean
  findValue: string
}) => {
  const renderSkeleton = (): React.ReactNode => {
    return [...new Array(6).fill(0).map((v, i) => i + 1)].map((item) => {
      return (<Skeleton key={item} />) as React.ReactNode
    })
  }

  const filterBySearch = (finder: string): IFurniture[] | [] => {
    const regExp = new RegExp(finder, 'gi')

    const filteredItems = items.filter((item: IFurniture) => {
      if (!finder) return true
      return regExp.test(item.title)
    })
    return filteredItems
  }

  const renderItemsStatic = (finder: string) => {
    const filteredItems = filterBySearch(finder)

    return filteredItems.length > 0 ? (
      filteredItems.map((item: IFurniture): React.ReactNode => {
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
    ) : (
      <NothingFoundInSearch />
    )
  }
  const renderItemsBackend = () => {
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

  const renderItemsBackendSwiper = () => {
    return items.map((item: IFurniture): React.ReactNode => {
      return (
        <SwiperSlide key={item.title}>
          <Furniture
            price={item.price}
            title={item.title}
            imgUrl={item.imgUrl}
            key={item.title}
            rating={item.rating}
            id={item.id}
          />
        </SwiperSlide>
      )
    })
  }
  return (
    <div className={$.handleLayout}>
      <div className='flex items-baseline justify-start gap-x-4'>
        <h1 className='heading text-center lg:text-left'>Get, Buy & Sell</h1>
        <img src={flower} alt='flower' />
      </div>
      {isLoading ? (
        <div className={$.sceletonLayout}>{renderSkeleton()}</div>
      ) : (
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2
          }}
          spaceBetween={30}
          loop
          pagination={{
            clickable: true
          }}
          modules={[Grid, Pagination]}
          className='mySwiper'
          grabCursor
        >
          {renderItemsBackendSwiper()}
        </Swiper>
      )}
    </div>
  )
}
export default HandleLayout
