import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faStar,
  faPlus,
  faMinus,
  faHeart as faHeartSol
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'

import $ from '@common/Furniture.module.scss'

interface FurnitureProps {
  price: number
  title: string
  imgUrl: string[]
  rating: number
  id: number
}

const Furniture = ({ price, title, imgUrl, rating }: FurnitureProps) => {
  const [like, setLike] = useState(false)
  const [count, setCount] = useState(0)
  const [heroImg, setHeroImg] = useState(0)
  const getKeyForSideImg = (arr: string[]): number[] => {
    return Array.from(Array(arr.length)).map((v, i) => i + 1)
  }

  return (
    <div className={$.furnitureContainer}>
      <div className={$.gridCustom}>
        <div className={$.flexCenterX}>
          <ul className={$.furnitureList}>
            {getKeyForSideImg(imgUrl).map((item, index) => (
              <li
                onClick={() => setHeroImg(index)}
                className={`${$.furnitureItem} ${$.furnitureItemBackground}`}
                key={item}
                role='presentation'
              >
                <div className={$.sideBackdrop}> </div>
                <img src={imgUrl[index]} alt={title} />
              </li>
            ))}
          </ul>
        </div>
        <div className={`${$.furnitureHero} flexCenter overflow-hidden `}>
          <img src={imgUrl[heroImg]} alt='lamp' />{' '}
        </div>
        <div className='flexCol'>
          <h2 className={$.furniturePriceTitle}>{title}</h2>
          <div className={$.furnitureRate}>
            <div className='flex'>
              {Array.from(Array(rating))
                .map((e, i) => +i + 10)
                .map((item) => {
                  return (
                    <FontAwesomeIcon color='#f77d4d' icon={faStar} size='sm' key={item} />
                  )
                })}
              <span className={$.furnitureRateStart}>{rating} of 12 reviews</span>
            </div>
            <FontAwesomeIcon
              onClick={() => setLike((like) => !like)}
              icon={like ? faHeartSol : faHeartReg}
              className='cursor-pointer transition-all'
              color={like ? 'indigo' : 'white'}
              size='2xl'
            />
          </div>
          <div className={`${$.furnitureCost} flexBetweenX`}>
            <p className={$.furnitureCostDigit}>$ {price}.00</p>
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
          <div className={`${$.furnitureProperty} flexBetweenX`}>
            <div className='furnitureColor'>
              <form>
                <label className={$.furnitureLabel} htmlFor='select-color'>
                  Color:
                  <select
                    defaultValue='yellow'
                    className={$.labelSelect}
                    name='color'
                    id='select-color'
                  >
                    <option value='white'>White</option>
                    <option value='yellow'>Yellow</option>
                    <option value='pink'>Pink</option>
                  </select>
                </label>
              </form>
            </div>
            <div>
              <form>
                <label className={$.furnitureLabel} htmlFor='select-size'>
                  Size:
                  <select
                    defaultValue='regular'
                    className={`${$.labelSelect} w-20`}
                    name='size'
                    id='select-size'
                  >
                    <option value='light'>Light</option>
                    <option value='regular'>Regular</option>
                    <option value='hard'>Hard</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
          <Link to='/basket'>
            <button className={$.furnitureButtonAdd}>Add to card</button>
          </Link>
          <div className={`${$.furnitureInfo} flexBetweenX`}>
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
