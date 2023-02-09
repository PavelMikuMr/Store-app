import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBasketShopping, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

import SelectedItem from '../components/SelectedItem'
// import BtnXl from '../components/Fields/Btns/BtnXL/BtnXL'

import { BtnXL } from '../components/Fields'

import module from '../App.module.scss'

const {
  basketContainer,
  basket,
  cleanBasketTitle,
  cleanBasket,
  basketHeader,
  order,
  buyNow,
  orderAll,
  orderTitle,
  orderComeBackBtn,
  buyNowTitle,
  orderComeBack
} = module

const BasketPage = () => {
  return (
    <div className={basketContainer}>
      <header className={`${basketHeader} flexBetweenX`}>
        <div className={`${basket} flexBetweenX`}>
          <FontAwesomeIcon
            color='white'
            className='mr-2'
            icon={faBasketShopping}
            size='lg'
          />
          <h2 className='title'>Basket</h2>
        </div>
        <div className={`${cleanBasket} flexBetweenX`}>
          <FontAwesomeIcon
            color='white'
            className='mr-2 cursor-pointer'
            icon={faTrashCan}
            size='lg'
          />
          <p className={cleanBasketTitle}>Clean basket</p>
        </div>
      </header>
      <SelectedItem />
      <SelectedItem />
      <SelectedItem />
      <SelectedItem />
      <SelectedItem />
      <div className={order}>
        <div className={orderAll}>
          <h2 className={orderTitle}>
            Total selected: <strong>3 pieces</strong>
          </h2>
          <div className={orderComeBack}>
            <FontAwesomeIcon
              color='white'
              className='absolute top-[4px] left-0 mr-2 cursor-pointer'
              icon={faCaretLeft}
              size='lg'
            />
            <Link to='/'>
              <button className={orderComeBackBtn}>Go back</button>
            </Link>
          </div>
        </div>
        <div className={buyNow}>
          <h2 className={buyNowTitle}>
            Order amount: <strong>900 $</strong>
          </h2>
          <BtnXL text='Buy now' link='/' />
        </div>
      </div>
    </div>
  )
}

export default BasketPage
