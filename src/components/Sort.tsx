import { useState } from 'react'
import $ from '@common/Sort.module.scss'
import { ISort } from '@pages/Home'

interface SortProps {
  value: number
  sortValue: ISort
  onClickCategory: (index: number) => void
  setSortValue: (sortObj: ISort) => void
}

const Sort = ({ value, onClickCategory, sortValue, setSortValue }: SortProps) => {
  const [isOpenPop, setIsOpenPop] = useState(false)

  const categories: string[] = ['Collection', 'Chair', 'Poof', 'Sofa', 'Lamp']
  const sortBy: { [key: string]: string }[] = [
    { name: 'popular(desc)', sortProperty: 'rating' },
    { name: 'popular(asc)', sortProperty: '-rating' },
    { name: 'price(desc)', sortProperty: 'price' },
    { name: 'price(asc)', sortProperty: '-price' },
    { name: 'word(desc)', sortProperty: 'title' },
    { name: 'word(asc)', sortProperty: '-title' }
  ]

  const showHidePopup = (sortObj: ISort) => {
    setSortValue(sortObj)
    setIsOpenPop(false)
  }

  console.log(value, sortValue.name)
  return (
    <div className={`${$.sort} lg:flexBetweenX`}>
      <div>
        <ul className={`${$.categoryList} ${$.categoryListActive}  flexBetweenX`}>
          {categories.map((categoryName, index) => {
            return (
              <li
                onClick={() => onClickCategory(index)}
                className={`${$.categoryItem} ${value === index ? $.active : ''}`}
                role='presentation'
                key={categoryName}
              >
                {categoryName}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='sortByFilter flexCenter relative'>
        <div className='sortLabel flexBetweenX  mr-4 gap-2'>
          <svg
            className='cursor-pointer self-center'
            width='16'
            height='10'
            viewBox='0 0 10 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
              fill='#EF6043'
            />
          </svg>
          <b className='font-poppins'>Sort by: </b>
          <span onClick={() => setIsOpenPop((prev) => !prev)} role='presentation'>
            {sortValue.name}
          </span>
        </div>
        {isOpenPop && (
          <div className={$.sortPopup}>
            <ul>
              {sortBy.map((obj) => (
                <li
                  onClick={() => showHidePopup(obj)}
                  className={
                    sortValue.sortProperty === obj.sortProperty ? $.sortActive : ''
                  }
                  key={obj.name}
                  role='presentation'
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default Sort
