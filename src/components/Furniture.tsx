import React from 'react'
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
import IFurniture from '_types/IFurniture'
import { IBasket } from '_types/Filter'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

interface FurnitureProps {
  price: number
  title: string
  imgUrl: string[]
  rating: number
  id: number
  item: IFurniture
  addBasketItem: (item: IFurniture, actualColor: string, actualSize: string) => void
  removeBasketItem: (item: IFurniture, actualColor: string, actualSize: string) => void
}

const Furniture = ({
  item,
  price,
  title,
  imgUrl,
  rating,
  addBasketItem,
  removeBasketItem
}: FurnitureProps) => {
  const [like, setLike] = React.useState(false)
  const [count, setCount] = React.useState(0)
  const [heroImg, setHeroImg] = React.useState(0)
  const sizeRef = React.useRef(null)
  const colorRef = React.useRef(null)

  const incrementor = () => {
    if (count >= 0) {
      setCount((p) => p + 1)
    } else setCount(0)
  }
  const decrementor = () => {
    if (count > 0) {
      setCount((p) => p - 1)
    } else setCount(0)
  }

  const getKeyForSideImg = (arr: string[]): number[] => {
    return Array.from(Array(arr.length)).map((_, i) => i + 1)
  }

  const addedItems = useSelector((state: RootState) =>
    state.basket.items.find((val) => val.id === item.id)
  )
  const addedCount = addedItems ? addedItems.count : 0

  const addItemToBasket = () => {
    addBasketItem(
      item,
      (colorRef.current as unknown as HTMLSelectElement).value,
      (sizeRef.current as unknown as HTMLSelectElement).value
    )
  }
  const removeItemToBasket = () => {
    removeBasketItem(
      item,
      (colorRef.current as unknown as HTMLSelectElement).value,
      (sizeRef.current as unknown as HTMLSelectElement).value
    )
  }
  return (
    <div className={$.furnitureContainer}>
      <div className={$.gridCustom}>
        <div className={`${$.flexCenterX} ${$.furnitureListImg}`}>
          <ul className={$.furnitureList}>
            {getKeyForSideImg(imgUrl).map((item, index) => (
              <li
                onClick={() => setHeroImg(index)}
                className={`${$.furnitureItem} ${$.furnitureItemBackground}`}
                key={item}
                role='presentation'
              >
                <div className={index === heroImg ? '' : $.sideBackdrop}> </div>
                <img src={imgUrl[index]} alt={title} />
              </li>
            ))}
          </ul>
        </div>
        <div className={`${$.furnitureHero} flexCenter overflow-hidden `}>
          <img src={imgUrl[heroImg]} alt='lamp' />{' '}
        </div>
        <div className={`${$.flexCol} ${$.furnitureInfoTextAll}`}>
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
              <span className={$.furnitureRateStart}>{rating} of 5 stars</span>
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
                onClick={removeItemToBasket}
              />
              <span className='text-2xl text-white'>{addedCount}</span>
              <FontAwesomeIcon
                className='cursor-pointer'
                icon={faPlus}
                color='#ececec7c'
                size='sm'
                onClick={addItemToBasket}
              />
            </div>
          </div>
          <div className='flexBetweenX'>
            <div className='furnitureColor'>
              <form>
                <label className={$.furnitureLabel} htmlFor='select-color'>
                  Color:
                  <select
                    ref={colorRef}
                    defaultValue='yellow'
                    className={$.labelSelect}
                    name='color'
                    id='select-color'
                  >
                    {item &&
                      item.color.map((s) => (
                        <option key={s} value={s}>
                          {s.replace(/[a-z]/, (v) => v.toUpperCase())}
                        </option>
                      ))}
                  </select>
                </label>
              </form>
            </div>
            <div>
              <form>
                <label className={$.furnitureLabel} htmlFor='select-size'>
                  Size:
                  <select
                    ref={sizeRef}
                    defaultValue='regular'
                    className={`${$.labelSelect} w-20`}
                    name='size'
                    id='select-size'
                  >
                    {item &&
                      item.size.map((s) => (
                        <option key={s} value={s}>
                          {s.replace(/[a-z]/, (v) => v.toUpperCase())}
                        </option>
                      ))}
                  </select>
                </label>
              </form>
            </div>
          </div>
          <div className='mt-6'>
            <button onClick={addItemToBasket} className={$.furnitureButtonAdd}>
              Add to card
            </button>
          </div>
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
