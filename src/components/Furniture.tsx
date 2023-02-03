import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faStar,
  faPlus,
  faMinus,
  faHeart as faHeartSol
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'

import styles from '../App.style'

import module from '../App.module.scss'

import { chairWeb } from '../assets'

export interface FurnitureProps {
  price: string
  title: string
  color: string
  subColor: string
  id?: string
}

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

const Furniture = ({ price, title, color, subColor }: FurnitureProps) => {
  const Ryan = '#ef6043'
  const [count, setCount] = useState(1)
  const [like, setLike] = useState(false)

  return (
    <div className={furnitureContainer}>
      <div className={`${furniture} grid-custom`}>
        <div className='flexCenterX furnitureSidePanel'>
          <ul className={furnitureList}>
            <li className={`${furnitureItem} ${subColor}  furnitureItemBackground`}>
              <img src={chairWeb} alt='' />
            </li>
            <li className={`${furnitureItem} ${subColor} furnitureItemBackground`}>
              <img src='' alt='' />
            </li>
            <li className={`${furnitureItem} ${subColor} furnitureItemBackground `}>
              <img src='' alt='' />
            </li>
            <li className={`${furnitureItem} ${subColor} furnitureItemBackground `}>
              <img src='' alt='' />
            </li>
          </ul>
        </div>
        <div className={`${furnitureHero} flexCenter ${color} `}>
          <img src={chairWeb} alt='lamp' />{' '}
        </div>
        <div className={`${furniturePrice} ${styles.flexCol}`}>
          <h2 className={furniturePriceTitle}>{title}</h2>
          <div className={`${furnitureRate} `}>
            <div className='flex'>
              {[...(new Array(5).fill(1) as number[])].map((item) => {
                return (
                  <FontAwesomeIcon color='#f77d4d' icon={faStar} size='sm' key='faStar' />
                )
              })}
              <span className={furnitureRateStart}>5 of 12 reviews</span>
            </div>
            <FontAwesomeIcon
              onClick={() => setLike((like) => !like)}
              icon={like ? faHeartSol : faHeartReg}
              className='cursor-pointer transition-all'
              color={like ? 'indigo' : 'white'}
              size='2xl'
            />
          </div>
          <div className={`${furnitureCost} ${styles.flexBetweenX}`}>
            <p className={furnitureCostDigit}>$ {price}</p>
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
