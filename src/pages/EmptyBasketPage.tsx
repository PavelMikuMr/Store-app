import { BtnXL } from '@fields_i'
import { emptyCart } from '@assets/images'
import tw from '@views/EmptyBasketPage.module.scss'

const EmptyBasketPage = () => {
  return (
    <div className={tw.basketContainer}>
      <div className={tw.emptyBasket}>
        <div className='emptyBasketText'>
          <h1 className={tw.emptyBasketTitle}>
            Basket is empty <span>🙁</span>
          </h1>
          <p>You probably haven`t ordered anything yet.</p>
          <p className='mb-10'>To order go to the home page.</p>
        </div>
        <img className={tw.emptyCartImg} src={emptyCart} alt='empty-basket' />
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
