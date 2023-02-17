import { useState } from 'react'
import $ from '@common/Sort.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { ISort } from '_types/Filter'
import { RootState } from '@/redux/store'
import { setSortValue } from '@/redux/slices/filterSlice'

interface SortProps {
  onChangeCategory: (index: number) => void
  setOrder: (term: string) => void
}

const categories: string[] = ['Collection', 'Chair', 'Poof', 'Sofa', 'Lamp']

const sortBy: ISort[] = [
  { name: 'popular', sortProperty: 'rating' },

  { name: 'price', sortProperty: 'price' },

  { name: 'word', sortProperty: 'title' }
]

const Sort = ({ onChangeCategory, setOrder }: SortProps) => {
  const { categoryId, sort: sortType } = useSelector((state: RootState) => state.filter)

  const dispatch = useDispatch()

  const [isOpenPop, setIsOpenPop] = useState(false)

  const selectSortValue = (sortValue: ISort) => {
    dispatch(setSortValue(sortValue))
    setIsOpenPop(false)
  }

  return (
    <div className={`${$.sort} lg:flexBetweenX`}>
      <div>
        <ul className={`${$.categoryList} ${$.categoryListActive}  flexBetweenX`}>
          {categories.map((categoryName, index) => {
            return (
              <li
                onClick={() => onChangeCategory(index)}
                className={`${$.categoryItem} ${categoryId === index ? $.active : ''}`}
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
          <div className='flex flex-col justify-center gap-y-1'>
            <svg
              className='cursor-pointer self-center'
              width='16'
              height='10'
              viewBox='0 0 10 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={() => setOrder('asc')}
            >
              <path
                d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
                fill='#EF6043'
              />
            </svg>
            <svg
              className='rotate-180 cursor-pointer self-center'
              width='16'
              height='10'
              viewBox='0 0 10 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={() => setOrder('desc')}
            >
              <path
                d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
                fill='#EF6043'
              />
            </svg>
          </div>
          <b className='font-poppins'>Sort by: </b>
          <span onClick={() => setIsOpenPop((prev) => !prev)} role='presentation'>
            {sortType.name}
          </span>
        </div>
        {isOpenPop && (
          <div className={$.sortPopup}>
            <ul>
              {sortBy.map((obj) => (
                <li
                  onClick={() => selectSortValue(obj)}
                  className={
                    sortType.sortProperty === obj.sortProperty ? $.sortActive : ''
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
