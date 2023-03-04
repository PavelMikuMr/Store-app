import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fancybox } from '@fancyapps/ui'
import '@styles/fancybox/fancybox.scss'

import {
  faStar,
  faPlus,
  faMinus,
  faHeart as faHeartSol
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'
import tw from '@common/Furniture.module.scss'
import IFurniture from '@type/IFurniture'
import { IBasket } from '@type/Filter'
import { useSelector, useDispatch } from 'react-redux'
import { itemSelectorById, addItems, removeItems } from '@/redux/slices/basketSlice'

interface FurnitureProps {
  price: number
  title: string
  imgUrl: string[]
  rating: number
  id: number
  item: IFurniture
}

const Furniture = ({ item, price, title, imgUrl, rating }: FurnitureProps) => {
  const [like, setLike] = React.useState(false)
  const [heroImg, setHeroImg] = React.useState(0)
  const sizeRef = React.useRef(null)
  const colorRef = React.useRef(null)
  const dispacth = useDispatch()
  const getKeyForSideImg = (arr: string[]): number[] => {
    return Array.from(Array(arr.length)).map((_, i) => i + 1)
  }

  const addedItems = useSelector(itemSelectorById(item.id))

  const addedCount = addedItems ? addedItems.count : 0

  const getItemForManipulate = () => {
    const basketItem: IBasket = {
      id: item.id,
      title: item.title,
      price: item.price,
      imgUrl: item.imgUrl,
      color: (colorRef.current as unknown as HTMLSelectElement).value,
      size: (sizeRef.current as unknown as HTMLSelectElement).value
    }
    return basketItem
  }

  const addItemToBasket = () => {
    dispacth(addItems(getItemForManipulate()))
  }
  const removeItemToBasket = () => {
    dispacth(removeItems(getItemForManipulate()))
  }
  const showGallery = () => {
    type Gallery = {
      src: string
      thumb: string
    }
    const galleryItems: Gallery[] = []

    const galleryOptions = {
      slug: 'gallery',
      startIndex: 0
    }

    imgUrl.forEach((img: string) => galleryItems.push({ src: img, thumb: img }))
    return { galleryItems, galleryOptions }
  }

  return (
    <div className={tw.furnitureContainer}>
      <div className={tw.gridCustom}>
        <div
          className={`${tw.flexCenterX} ${tw.furnitureListImg} `}
          id={`gallery-wrap-${title}`}
        >
          <ul className={tw.furnitureList}>
            {getKeyForSideImg(imgUrl).map((item, index) => (
              <li
                onClick={() => setHeroImg(index)}
                className={`${tw.furnitureItem} ${tw.furnitureItemBackground}`}
                key={item}
                role='presentation'
              >
                <div className={index === heroImg ? '' : tw.sideBackdrop}> </div>
                <img src={imgUrl[index]} alt={title} />
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => {
            const { galleryItems, galleryOptions } = showGallery()
            Fancybox.show(galleryItems, galleryOptions)
          }}
          className={`${tw.furnitureHero}`}
          id={`${title.replace(/\s/g, '')}`}
          style={{ backgroundImage: `url(${imgUrl[heroImg]})` }}
          role='presentation'
        />
        <div className={`${tw.flexCol} ${tw.furnitureInfoTextAll}`}>
          <h2 className={tw.furniturePriceTitle}>{title}</h2>
          <div className={tw.furnitureRate}>
            <div className='flex'>
              {Array.from(Array(rating))
                .map((e, i) => +i + 10)
                .map((item) => {
                  return (
                    <FontAwesomeIcon color='#f77d4d' icon={faStar} size='sm' key={item} />
                  )
                })}
              <span className={tw.furnitureRateStart}>{rating} of 5 stars</span>
            </div>
            <FontAwesomeIcon
              onClick={() => setLike((like) => !like)}
              icon={like ? faHeartSol : faHeartReg}
              className='cursor-pointer transition-all'
              color={like ? 'indigo' : 'white'}
              size='2xl'
            />
          </div>
          <div className={`${tw.furnitureCost} flexBetweenX`}>
            <p className={tw.furnitureCostDigit}>$ {price}.00</p>
            <div className='flex items-center gap-x-2'>
              <FontAwesomeIcon
                className='text-base xs:text-base ss:text-lg sm:text-xl sw840:text-base'
                icon={faMinus}
                color='#ececec7c'
                size='sm'
                onClick={removeItemToBasket}
              />
              <span className='text-xl text-white xs:text-2xl ss:text-3xl sm:text-4xl sw840:text-2xl'>
                {addedCount}
              </span>
              <FontAwesomeIcon
                className='cursor-pointer text-base xs:text-base ss:text-lg sm:text-xl sw840:text-base'
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
                <label className={tw.furnitureLabel} htmlFor='select-color'>
                  Color:
                  <select
                    ref={colorRef}
                    defaultValue='yellow'
                    className={tw.labelSelect}
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
                <label className={tw.furnitureLabel} htmlFor='select-size'>
                  Size:
                  <select
                    ref={sizeRef}
                    defaultValue='regular'
                    className={`${tw.labelSelect} sm:w-24 sw840:w-20`}
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
            <button onClick={addItemToBasket} className={tw.furnitureButtonAdd}>
              Add to card
            </button>
          </div>
          <div className={`${tw.furnitureInfo} flexBetweenX`}>
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
