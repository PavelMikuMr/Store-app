import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import SelectedItem from '@components/SelectedItem'
import $ from '@views/BasketPage.module.scss'
import { BtnXL } from '@fields'
import { clearAllItems, basketSelector } from '@/redux/slices/basketSlice'

const BasketPage = () => {
  const { items, totalPrice } = useSelector(basketSelector)
  const dispatch = useDispatch()

  const clearAllItemFromBasket = () => {
    if (window.confirm('Are you sure want to remove?')) {
      dispatch(clearAllItems())
    }
  }
  return (
    <div className={$.basketContainer}>
      <header className={`${$.basketHeader} flexBetweenX`}>
        <div className={`${$.basket} flexBetweenX`}>
          <FontAwesomeIcon
            color='white'
            className='mr-2'
            icon={faBasketShopping}
            size='lg'
          />
          <h2 className='title'>Basket</h2>
        </div>
        <div className={`${$.cleanBasket} flexBetweenX`}>
          <FontAwesomeIcon
            color='white'
            className='mr-2 cursor-pointer'
            icon={faTrashCan}
            size='lg'
          />
          <button onClick={clearAllItemFromBasket} className={$.cleanBasketTitle}>
            Clean basket
          </button>
        </div>
      </header>
      {items.length > 0 ? (
        items.map((item) => <SelectedItem key={item.id} item={item} />)
      ) : (
        <div />
      )}
      <div className={$.order}>
        <div className={$.orderAll}>
          <h2 className={$.orderTitle}>
            Total selected: <strong>{items.length} products</strong>
          </h2>
          <div className={$.orderComeBack}>
            <FontAwesomeIcon
              color='white'
              className='absolute top-[4px] left-0 mr-2 cursor-pointer'
              icon={faCaretLeft}
              size='lg'
            />
            <Link to='/'>
              <button className={$.orderComeBackBtn}>Go back</button>
            </Link>
          </div>
        </div>
        <div className={$.buyNow}>
          <h2 className={$.buyNowTitle}>
            Order amount:
            <strong className='block text-center'>{totalPrice} $</strong>
          </h2>
          <BtnXL text='Buy now' link='/' />
        </div>
      </div>
    </div>
  )
}

export default BasketPage
