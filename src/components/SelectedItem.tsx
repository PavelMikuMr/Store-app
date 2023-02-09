import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faXmark } from '@fortawesome/free-solid-svg-icons'

import module from '../App.module.scss'
import { pint } from '../assets'

const {
  selectedItem,
  itemImg,
  itemInfo,
  additionItem,
  totalCost,
  cancelSell,
  closeMarker,
  itemInfoTittle,
  itemInfoSubTittle,
  additionItemBtn
} = module

const SelectedItem = () => {
  const [count, setCount] = useState(0)

  const increaseSelect = () => {}
  return (
    <div className='selectedContainer mb-10'>
      <div className={`${selectedItem} px-2`}>
        <div className='itemIcon'>
          <img className={itemImg} src={pint} alt='selected-furniture' />
        </div>
        <div className={itemInfo}>
          <h2 className={itemInfoTittle}>Kosta Lacosta</h2>
          <p className={itemInfoSubTittle}>Addition info, and more</p>
        </div>
        <div className={`${additionItem} flexCenter`}>
          <div className={additionItemBtn}>
            <span
              onClick={() => setCount(count >= 0 ? count + 1 : 0)}
              role='presentation'
            >
              +
            </span>
          </div>
          <div className='additionItemAmount w-[20px]'>{count}</div>
          <div className={additionItemBtn}>
            <span
              onClick={() => setCount(count === 0 ? 0 : count - 1)}
              role='presentation'
            >
              -
            </span>
          </div>
        </div>
        <div className={`${totalCost} flexCenter`}>770 $</div>
        <div className={`${cancelSell} flexCenter`}>
          <div className={closeMarker}>
            <FontAwesomeIcon color='white' icon={faXmark} size='lg' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectedItem
