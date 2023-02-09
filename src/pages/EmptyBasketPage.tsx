import { BtnXL } from '@fields'

import module from '@/App.module.scss'

import { emptyCart } from '@/assets'

const { basketContainer, emptyBasket, emptyCartImg, emptyBasketTitle } = module

const EmptyBasketPage = () => {
  return (
    <div className={basketContainer}>
      <div className={emptyBasket}>
        <div className='emptyBasketText'>
          <h1 className={emptyBasketTitle}>
            Basket is empty <span>🙁</span>
          </h1>
          <p>You probably haven`t ordered anything yet.</p>
          <p className='mb-10'>To order go to the home page.</p>
        </div>
        <img className={emptyCartImg} src={emptyCart} alt='empty-basket' />
        <BtnXL
          link='/'
          text='Go back'
          bg='bg-[#2b2b2b]'
          width='w-[300px]'
          center='text-center'
        />
      </div>
    </div>
  )
}

export default EmptyBasketPage
