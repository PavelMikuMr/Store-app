import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { SelectedItem, Modal } from '@components_i'
import tw from '@views/BasketPage.module.scss'
import { clearAllItems, basketSelector } from '@/redux/slices/basketSlice'

const BasketPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { items, totalPrice } = useSelector(basketSelector)
  const dispatch = useDispatch()

  const clearAllItemFromBasket = () => {
    if (window.confirm('Are you sure want to remove?')) {
      dispatch(clearAllItems())
    }
  }
  return (
    <>
      {' '}
      <div className={tw.basketContainer}>
        <header className={`${tw.basketHeader} flexBetweenX`}>
          <div className={`${tw.basket} flexBetweenX`}>
            <FontAwesomeIcon
              color='white'
              className='mr-2'
              icon={faBasketShopping}
              size='lg'
            />
            <h2 className='title'>Basket</h2>
          </div>
          <div className={`${tw.cleanBasket} flexBetweenX`}>
            <FontAwesomeIcon
              color='white'
              className='mr-2 cursor-pointer'
              icon={faTrashCan}
              size='lg'
            />
            <button onClick={clearAllItemFromBasket} className={tw.cleanBasketTitle}>
              Clean basket
            </button>
          </div>
        </header>
        {items.length > 0 ? (
          items.map((item) => <SelectedItem key={item.id} item={item} />)
        ) : (
          <div />
        )}
        <div className={tw.order}>
          <div className={tw.orderAll}>
            <h2 className={tw.orderTitle}>
              Total selected: <strong>{items.length} products</strong>
            </h2>
            <div className={tw.orderComeBack}>
              <FontAwesomeIcon
                color='white'
                className='absolute top-[4px] left-0 mr-2 cursor-pointer'
                icon={faCaretLeft}
                size='lg'
              />
              <Link to='/'>
                <button className={tw.orderComeBackBtn}>Go back</button>
              </Link>
            </div>
          </div>
          <div className={tw.buyNow}>
            <h2 className={tw.buyNowTitle}>
              Order amount:
              <strong className='block text-center'>{totalPrice} $</strong>
            </h2>
            <div className='btnField'>
              <button onClick={() => setIsOpen((p) => !p)} className='btnXl'>
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isTrue={isOpen} setIsTrue={() => setIsOpen((p) => !p)} />
    </>
  )
}

export default BasketPage
