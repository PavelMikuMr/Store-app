import Furniture from '@components/Furniture'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import tw from 'twin.macro'
import IFurniture from '_types/IFurniture'
import Skeleton from './Skeleton'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/scss/grid'
import { chair } from '@/assets/images'

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
  const renderSwiper = () => {
    return items.map((item: IFurniture): React.ReactNode => {
      return (
        <SwiperSlide key={item.title}>
          <div className='max-h-[400px] max-w-[400px] bg-slate-500 font-poppins text-lg'>
            text!
          </div>
        </SwiperSlide>
      )
    })
  }

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        className='mySwiper'
        spaceBetween={100}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='grid max-h-[400px] max-w-[400px] place-items-center rounded-2xl bg-red-500 font-poppins text-lg'>
            text! 1 house work week
            <img src={chair} alt='logo' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid max-h-[400px] max-w-[400px] place-items-center rounded-2xl bg-blue-500 font-poppins text-lg'>
            text! 2
            <img src={chair} alt='logo' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid max-h-[400px] max-w-[400px] place-items-center rounded-2xl bg-green-500 font-poppins text-lg'>
            text! 3
            <img src={chair} alt='logo' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid max-h-[400px] max-w-[400px] place-items-center rounded-2xl bg-indigo-700 font-poppins text-lg'>
            text! 4
            <img src={chair} alt='logo' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid max-h-[400px] max-w-[400px] place-items-center rounded-2xl bg-pink-500 font-poppins text-lg'>
            text! 5
            <img src={chair} alt='logo' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid max-h-[400px] max-w-[400px] place-items-center rounded-2xl bg-cyan-500 font-poppins text-lg'>
            text! 6
            <img src={chair} alt='logo' />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <h1 className='heading text-center lg:text-left'>Get, Buy & Sell</h1>
      <div className={$.handleLayout}>
        {isLoading ? renderSkeleton() : renderItemsBackend()}
      </div> */}
    </>
  )
}
export default HandleLayout
