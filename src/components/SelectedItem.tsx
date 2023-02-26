import React from 'react'
import { useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import $ from '@common/SelectedItems.module.scss'
import { IBasket } from '_types/Filter'
import {
  addItems,
  removeItems,
  clearItems,
  clearAllItems
} from '@/redux/slices/basketSlice'

const SelectedItem = ({ item }: { item: IBasket }) => {
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addItems(item))
  }

  const removeItemToBasket = () => {
    dispatch(removeItems(item))
  }

  const clearItemFromBasket = () => {
    dispatch(clearItems(item))
  }
  const clearAllItemFromBasket = () => {
    dispatch(clearAllItems())
  }

  return (
    <div className='mb-10'>
      <div className={`${$.selectedItem} px-2`}>
        <div className='itemIcon'>
          <img className={$.itemImg} src={item.imgUrl[0]} alt='selected-furniture' />
        </div>
        <div>
          <h2 className={$.itemInfoTittle}>{item.title}</h2>
          <p className={$.itemInfoSubTittle}>
            Color: {item.color} , Size: {item.size}
          </p>
        </div>
        <div className={`${$.additionItem} flexCenter`}>
          <div className={$.additionItemBtn}>
            <span onClick={addItemToBasket} role='presentation'>
              +
            </span>
          </div>
          <div className='w-[20px] text-center'>{item.count}</div>
          <div className={$.additionItemBtn}>
            <span onClick={removeItemToBasket} role='presentation'>
              -
            </span>
          </div>
        </div>
        <div className={`${$.totalCost} flexCenter`}>
          {item.count ? item.count * item.price : item.price} $
        </div>
        <div className={`${$.cancelSell} flexCenter`}>
          <div className={$.closeMarker}>
            <FontAwesomeIcon
              onClick={clearItemFromBasket}
              color='white'
              icon={faXmark}
              size='lg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectedItem
