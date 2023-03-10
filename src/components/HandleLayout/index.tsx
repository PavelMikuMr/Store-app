/* eslint-disable no-nested-ternary */
import React from 'react'
import Furniture from '@components/Furniture'
import { Spinner } from '@components/Spinner'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Pagination } from 'swiper'
import tw from '@common/HandleLayout.module.scss'
import IFurniture from '@type/IFurniture'
import { flower } from '@assets/images'
import Skeleton from './Skeleton'
import { RootState } from '@/redux/store'
import { setPageCount } from '@/redux/slices/filterSlice'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/grid'
import '@styles/swiper/grid.scss'

const HandleLayout = ({
  furnitureItems,
  isLoading,
  findValue,
  isMountedLayout,
  isFetching
}: {
  furnitureItems: IFurniture[]
  isLoading: boolean
  findValue: string
  isMountedLayout: boolean
  isFetching: boolean
}) => {
  const swiperInit = React.useRef(null)
  const dispacth = useDispatch()

  const { pageCount, categoryId } = useSelector((state: RootState) => {
    return state.filter
  })
  React.useEffect(() => {
    if (!swiperInit.current) {
      return
    }
    if (!(swiperInit.current as SwiperRef).swiper) {
      return
    }

    if (categoryId === 0) {
      const currentSwiper = (swiperInit.current as SwiperRef).swiper
      currentSwiper.slideTo((pageCount as number) - 1)
    }
  }, [isMountedLayout])

  const selectOpenPage = (value: number) => {
    dispacth(setPageCount(value))
  }

  const renderSkeleton = (): React.ReactNode => {
    return [...new Array(6).fill(0).map((v, i) => i + 1)].map((item) => {
      return (<Skeleton key={item} />) as React.ReactNode
    })
  }
  const renderItemsBackendSwiper = () => {
    return furnitureItems.map((item: IFurniture): React.ReactNode => {
      return (
        <SwiperSlide key={item.title}>
          <Furniture
            item={item}
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
  const renderSwiperLayout = (): React.ReactNode => {
    return (
      <Swiper
        ref={swiperInit}
        slidesPerView={1}
        grid={{
          rows: 1
        }}
        spaceBetween={50}
        pagination={{
          type: 'bullets',
          clickable: true
        }}
        breakpoints={{
          840: {
            slidesPerView: 2,
            grid: {
              rows: 1
            }
          },
          1350: {
            slidesPerView: 2,
            spaceBetween: 30,
            grid: {
              rows: 2
            }
          }
        }}
        modules={[Grid, Pagination]}
        className='mySwiper'
        onActiveIndexChange={(swiper) => {
          selectOpenPage(swiper.activeIndex + 1)
        }}
      >
        {renderItemsBackendSwiper()}
      </Swiper>
    )
  }

  const renderSpinner = (): React.ReactNode => {
    return <Spinner />
  }
  return (
    <div className={tw.handleLayout}>
      <div className={tw.headingTitleBox}>
        <h1 className='heading text-center text-3xl ss:text-4xl sm:text-5xl md:text-6xl lg:text-left'>
          Get, Buy & Sell
        </h1>
        <img src={flower} alt='flower' />
      </div>

      {isLoading ? (
        <div className={tw.sceletonLayout}>{renderSkeleton()}</div>
      ) : furnitureItems.length > 0 ? (
        isFetching ? (
          renderSpinner()
        ) : (
          renderSwiperLayout()
        )
      ) : (
        <div className=' mt-10 w-full text-center text-4xl'>
          <h1>Nothing found ????</h1>
        </div>
      )}
    </div>
  )
}
export default HandleLayout
