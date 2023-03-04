import React from 'react'
import $ from '@styles/common/Modal.module.scss'
import { Link } from 'react-router-dom'
import { bit } from '@/assets/icons'

enum LabelController {
  CARD = 'card',
  EXPIRE = 'expire',
  CCV = 'ccv',
  INSTANT = 'instant',
  AGREEMENT = 'agreement'
}
const Modal = () => {
  return (
    <>
      <div className={$.modal}>
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
                <label htmlFor='expire'>EXPIRE:</label>
                <input type='text' required placeholder='mm/yy' id='expire' />
              </div>
              <div className={$.formGroup}>
                <label htmlFor='ccv'>ccv:</label>
                <input type='password' required placeholder='***' id='ccv' />
              </div>
              <div className={`${$.formGroup} ${$.full}`}>
                <label htmlFor='instant'>INSTANT</label>
                <input type='text' required placeholder='David Koperfield' id='instant' />
              </div>
              <div className={$.formCheckbox}>
                <input type='checkbox' name='agreement' id='agreement' required />
                <span className={$.check} />
                <label className={$.agreement} htmlFor='agreement'>
                  I agree with the <span>rules</span> of the Store
                </label>
              </div>
              <div className={$.modalTotal}>
                <div className={$.modalTotalText}>your total sum</div>
                <div className={$.modalTotalPrice}>34 $</div>
              </div>
              <button className={`${$.modalSubmit} ${$.buyButton}`} type='submit'>
                {' '}
                buy now
              </button>
              <div className={$.closeMarker}>x</div>
            </form>
          </div>
        </div>
      </div>
      <div className={$.overlay} />
    </>
  )
}
export default Modal

// className={$.$1}
// className='(\w+)'
