import React from 'react'
import module from '../App.module.scss'

const { sort, sortByCategory, categoryItem, sortPopup } = module

const Sort = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const categories: string[] = ['Collection', 'Lamp', 'Chair', 'Sofa', 'Poof']

  return (
    <div className={`${sort} flexBetweenX `}>
      <div className={sortByCategory}>
        <ul className='categoryList flexBetweenX'>
          {categories.map((category, index) => {
            return (
              <li
                onClick={() => setActiveIndex(index)}
                className={`${categoryItem} ${activeIndex === index ? 'active' : ''}`}
                role='presentation'
                key={category}
              >
                {category}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='sortByFilter flexCenter relative'>
        <div className='sortLabel flexBetweenX  mr-2 gap-2'>
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
          <span>popular</span>
        </div>
        <div className={sortPopup}>
          <ul>
            <li>popular</li>
            <li>price</li>
            <li>word</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Sort
