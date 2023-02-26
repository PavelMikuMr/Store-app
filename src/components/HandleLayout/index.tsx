/* eslint-disable no-nested-ternary */
import React from 'react'
import Furniture from '@components/Furniture'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Pagination } from 'swiper'
import tw from 'twin.macro'
import $ from '@common/HandleLayout.module.scss'
import IFurniture from '_types/IFurniture'
import { IBasket } from '_types/Filter'
import { flower } from '@assets/images'
import Skeleton from './Skeleton'
import { RootState } from '@/redux/store'
import { setPageCount } from '@/redux/slices/filterSlice'
import { addItems, removeItems } from '@/redux/slices/basketSlice'

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
  furnitureItems,
  isLoading,
  findValue
}: {
  furnitureItems: IFurniture[]
  isLoading: boolean
  findValue: string
}) => {
  const swiperInit = React.useRef(null)
  const dispacth = useDispatch()

  const { pageCount, categoryId } = useSelector((state: RootState) => {
    return state.filter
  })

  const onCLickAdd = (item: IFurniture, actualColor: string, actualSize: string) => {
    const basketItem: IBasket = {
      id: item.id,
      title: item.title,
      price: item.price,
      imgUrl: item.imgUrl,
      color: actualColor,
      size: actualSize
    }
    dispacth(addItems(basketItem))
  }

  const onClickRemove = (item: IFurniture, actualColor: string, actualSize: string) => {
    const basketItem: IBasket = {
      id: item.id,
      title: item.title,
      price: item.price,
      imgUrl: item.imgUrl,
      color: actualColor,
      size: actualSize
    }
    dispacth(removeItems(basketItem))
  }

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
  }, [isLoading, categoryId])

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
            addBasketItem={onCLickAdd}
            removeBasketItem={onClickRemove}
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
      ) : furnitureItems.length > 0 ? (
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
