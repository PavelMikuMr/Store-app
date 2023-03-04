/* eslint-disable no-param-reassign */
import React from 'react'
import { useSelector } from 'react-redux'
import { clsx } from 'clsx'
import $ from '@styles/common/Modal.module.scss'
import { Link } from 'react-router-dom'
import { bit } from '@/assets/icons'
import { RootState } from '@/redux/store'

enum LabelController {
  CARD = 'card',
  EXPIRE = 'expire',
  CCV = 'ccv',
  INSTANT = 'instant',
  AGREEMENT = 'agreement'
}
const Modal = ({ isTrue, setIsTrue }: { isTrue: boolean; setIsTrue: () => void }) => {
  const totalPrice = useSelector((state: RootState) => state.basket.totalPrice)
  return (
    <>
      <div className={`${$.modal} ${clsx(isTrue && $.opened)}`}>
        <div className={$.modalWrapper}>
          <div className={$.content}>
            <div className={$.titleBox}>
              <Link to='/'>
                <img src={bit} alt='logo' className='max-w-[2rem]' />
              </Link>
              <h1 className={$.modalTitle}>Store</h1>
            </div>
            <form action='' className={$.form}>
              <div className={`${$.formGroup} ${$.full}`}>
                <label htmlFor={LabelController.CARD}>Credit Card:</label>
                <input
                  type='text'
                  required
                  placeholder='0000 0000 0000 0000'
                  id={LabelController.CARD}
                />
              </div>
              <div className={$.formGroup}>
                <label htmlFor={LabelController.EXPIRE}>EXPIRE:</label>
                <input
                  type='text'
                  required
                  placeholder='mm/yy'
                  id={LabelController.EXPIRE}
                />
              </div>
              <div className={$.formGroup}>
                <label htmlFor={LabelController.CCV}>ccv:</label>
                <input
                  type='password'
                  required
                  placeholder='***'
                  id={LabelController.CCV}
                />
              </div>
              <div className={`${$.formGroup} ${$.full}`}>
                <label htmlFor={LabelController.INSTANT}>INSTANT</label>
                <input
                  type='text'
                  required
                  placeholder='David Koperfield'
                  id={LabelController.INSTANT}
                />
              </div>
              <div className={$.formCheckbox}>
                <input type='checkbox' name='agreement' id='agreement' required />
                <span className={$.check} />
                <label className={LabelController.AGREEMENT} htmlFor='agreement'>
                  I agree with the <span>rules</span> of the Store
                </label>
              </div>
              <div className={$.modalTotal}>
                <div className={$.modalTotalText}>your total sum</div>
                <div className={$.modalTotalPrice}>{totalPrice} $</div>
              </div>
              <button className={`${$.modalSubmit} ${$.buyButton}`} type='submit'>
                buy now
              </button>
              <div
                onClick={() => {
                  setIsTrue()
                }}
                className={$.closeMarker}
                role='presentation'
              >
                x
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={`${$.overlay} ${clsx(isTrue && $.opened)}`} />
    </>
  )
}
export default Modal
