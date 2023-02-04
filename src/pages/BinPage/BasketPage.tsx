import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

import SelectedItem from '../../components/SelectedItem'

import module from '../../App.module.scss'

const { basketContainer, basket, cleanBasketTitle, cleanBasket, basketHeader } = module

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
    </div>
  )
}

export default BasketPage
