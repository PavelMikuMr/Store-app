/* eslint-disable no-nested-ternary */
/* eslint-disable import/extensions */
import React from 'react'
import Furniture from '@components/Furniture'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Pagination } from 'swiper'
import tw from 'twin.macro'
import $ from '@common/HandleLayout.module.scss'
import IFurniture from '_types/IFurniture'
import { flower } from '@assets/images'
import Skeleton from './Skeleton'
import { setPageCount } from '@/redux/slices/filterSlice'
import { RootState } from '@/redux/store'
// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/grid'
import '@styles/swiper/grid.scss'

const styles = {
  container: tw`flex justify-center items-center w-full`,
  text: tw`font-poppins text-2xl`
}

const HandleLayout = ({
  items,
  isLoading,
  findValue
}: {
  items: IFurniture[]
  isLoading: boolean
  findValue: string
}) => {
  const swiperInit = React.useRef(null)
  const dispacth = useDispatch()

  const { pageCount } = useSelector((state: RootState) => {
    return state.filter
  })

  React.useEffect(() => {
    if (!swiperInit.current) {
      return
    }

    const currentSwiper = (swiperInit.current as SwiperRef).swiper

    if (items.length > 10 && pageCount !== null) {
      currentSwiper.slideTo((pageCount as number) - 1)
    }
  }, [isLoading])

  const selectOpenPage = (value: number) => {
    dispacth(setPageCount(value))
  }

  const renderSkeleton = (): React.ReactNode => {
    return [...new Array(6).fill(0).map((v, i) => i + 1)].map((item) => {
      return (<Skeleton key={item} />) as React.ReactNode
    })
  }

  const renderItemsBackendSwiper = () => {
    return items.map((item: IFurniture, index): React.ReactNode => {
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
      ) : items.length > 0 ? (
        <Swiper
          ref={swiperInit}
          slidesPerView={2}
          grid={{
            rows: 2
          }}
          spaceBetween={30}
          // loop
          pagination={{
            type: 'bullets',
            clickable: true
          }}
          modules={[Grid, Pagination]}
          className='mySwiper'
          onActiveIndexChange={(swiper) => {
            selectOpenPage(swiper.activeIndex + 1)
          }}
          grabCursor
        >
          {renderItemsBackendSwiper()}
        </Swiper>
      ) : (
        <div className=' mt-10 w-full text-center text-4xl'>
          <h1>Nothing found 😸</h1>
        </div>
      )}
    </div>
  )
}
export default HandleLayout
