import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faXmark } from '@fortawesome/free-solid-svg-icons'

import $ from '@common/SelectedItems.module.scss'

import { pint } from '@assets/images'

const SelectedItem = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='mb-10'>
      <div className={`${$.selectedItem} px-2`}>
        <div className='itemIcon'>
          <img className={$.itemImg} src={pint} alt='selected-furniture' />
        </div>
        <div>
          <h2 className={$.itemInfoTittle}>Kosta Lacosta</h2>
          <p className={$.itemInfoSubTittle}>Addition info, and more</p>
        </div>
        <div className={`${$.additionItem} flexCenter`}>
          <div className={$.additionItemBtn}>
            <span
              onClick={() => setCount(count >= 0 ? count + 1 : 0)}
              role='presentation'
            >
              +
            </span>
          </div>
          <div className='w-[20px]'>{count}</div>
          <div className={$.additionItemBtn}>
            <span
              onClick={() => setCount(count === 0 ? 0 : count - 1)}
              role='presentation'
            >
              -
            </span>
          </div>
        </div>
        <div className={`${$.totalCost} flexCenter`}>770 $</div>
        <div className={`${$.cancelSell} flexCenter`}>
          <div className={$.closeMarker}>
            <FontAwesomeIcon color='white' icon={faXmark} size='lg' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectedItem
