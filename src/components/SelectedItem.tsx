import React from 'react'
import { useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import tw from '@common/SelectedItems.module.scss'
import { IBasket } from '@type/Filter'
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
      <div className={`${tw.selectedItem} px-2`}>
        <div className='itemIcon'>
          <img className={tw.itemImg} src={item.imgUrl[0]} alt='selected-furniture' />
        </div>
        <div className={tw.infoTextContainer}>
          <h2 className={tw.itemInfoTittle}>{item.title}</h2>
          <p className={tw.itemInfoSubTittle}>
            Color: {item.color} , Size: {item.size}
          </p>
        </div>
        <div className={`${tw.additionItem}`}>
          <div className={tw.additionItemBtn}>
            <span onClick={addItemToBasket} role='presentation'>
              +
            </span>
          </div>
          <div className='w-[20px] text-center'>{item.count}</div>
          <div className={tw.additionItemBtn}>
            <span onClick={removeItemToBasket} role='presentation'>
              -
            </span>
          </div>
        </div>
        <div className={`${tw.totalCost} flexCenter`}>
          {item.count ? item.count * item.price : item.price} $
        </div>
        <div className={`${tw.cancelSell} flexCenter`}>
          <div className={tw.closeMarker}>
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
