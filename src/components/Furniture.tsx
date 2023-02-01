import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import styles from '../App.style'

import module from '../App.module.scss'

import { chair, chairWeb } from '../assets'

const {
  furnitureContainer,
  furniture,
  furnitureItem,
  furnitureList,
  furnitureHero,
  furniturePrice,
  furniturePriceTitle,
  furnitureRate,
  furnitureRateStart,
  furnitureCost,
  furnitureCostDigit,
  furnitureProperty,
  furnitureLabel,
  labelSelect,
  furnitureButtonAdd,
  furnitureInfo
} = module

const Furniture = () => {
  const [count, setCount] = useState(1)
  return (
    <div className={furnitureContainer}>
      <div className={`${furniture} grid-custom`}>
        <div className={`${styles.flexCenterX} furnitureSidePanel`}>
          <ul className={furnitureList}>
            <li className={`${furnitureItem} furnitureItemBackground`}>
              <img src='' alt='' />
            </li>
            <li className={`${furnitureItem} furnitureItemBackground`}>
              <img src='' alt='' />
            </li>
            <li className={`${furnitureItem} furnitureItemBackground`}>
              <img src='' alt='' />
            </li>
            <li className={`${furnitureItem} furnitureItemBackground`}>
              <img src='' alt='' />
            </li>
          </ul>
        </div>
        <div className={`${furnitureHero} ${styles.flexCenter}`}>
          <img src={chairWeb} alt='lamp' />{' '}
        </div>
        <div className={`${furniturePrice} ${styles.flexCol}`}>
          <h2 className={furniturePriceTitle}>O Lamp</h2>
          <div className={`${furnitureRate} `}>
            <div className='flex'>
              <FontAwesomeIcon color='#f77d4d' icon={faStar} size='sm' />
              <FontAwesomeIcon color='#f77d4d' icon={faStar} size='sm' />
              <FontAwesomeIcon color='#f77d4d' icon={faStar} size='sm' />
              <FontAwesomeIcon color='#f77d4d' icon={faStar} size='sm' />
              <FontAwesomeIcon color='#f77d4d' icon={faStar} size='sm' />
              <span className={furnitureRateStart}>5 of 12 reviews</span>
            </div>
            <FontAwesomeIcon
              icon={faHeart}
              className='cursor-pointer'
              color='white'
              size='2xl'
            />
          </div>
          <div className={`${furnitureCost} ${styles.flexBetweenX}`}>
            <p className={furnitureCostDigit}>$ 320.00</p>
            <div className='flex items-center gap-x-2'>
              <FontAwesomeIcon
                className='cursor-pointer'
                icon={faMinus}
                color='#ececec7c'
                size='sm'
                onClick={() => setCount(count - 1)}
              />
              <span className='text-2xl text-white'>{count}</span>
              <FontAwesomeIcon
                className='cursor-pointer'
                icon={faPlus}
                color='#ececec7c'
                size='sm'
                onClick={() => setCount(count + 1)}
              />
            </div>
          </div>
          <div className={`${furnitureProperty} ${styles.flexBetweenX}`}>
            <div className='furnitureColor'>
              <form>
                <label className={furnitureLabel} htmlFor='select-color'>
                  Color:
                  <select className={labelSelect} name='color' id='select-color'>
                    <option value='white'>White</option>
                    <option value='yellow'>Yellow</option>
                    <option value='pink'>Pink</option>
                  </select>
                </label>
              </form>
            </div>
            <div className='furnitureSize'>
              <form>
                <label className={furnitureLabel} htmlFor='select-size'>
                  Size:
                  <select className={`${labelSelect} w-20`} name='size' id='select-size'>
                    <option value='light'>Light</option>
                    <option selected value='regular'>
                      Regular
                    </option>
                    <option value='hard'>Hard</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
          <button className={furnitureButtonAdd}>Add to card</button>
          <div className={`${furnitureInfo} ${styles.flexBetweenX}`}>
            <div>
              <p>Info Guide</p>
            </div>
            <div>
              <p>Shipping</p>
            </div>
            <div>
              <p>Returnt Politicy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Furniture
