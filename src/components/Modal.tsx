/* eslint-disable no-param-reassign */
import { useSelector } from 'react-redux'
import { clsx } from 'clsx'
import tw from '@styles/common/Modal.module.scss'
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
      <div className={`${tw.modal} ${clsx(isTrue && tw.opened)}`}>
        <div className={tw.modalWrapper}>
          <div className={tw.content}>
            <div className={tw.titleBox}>
              <Link to='/'>
                <img src={bit} alt='logo' className='max-w-[2rem]' />
              </Link>
              <h1 className={tw.modalTitle}>Store</h1>
            </div>
            <form action='' className={tw.form}>
              <div className={`${tw.formGroup} ${tw.full}`}>
                <label htmlFor={LabelController.CARD}>Credit Card:</label>
                <input
                  type='text'
                  required
                  placeholder='0000 0000 0000 0000'
                  id={LabelController.CARD}
                />
              </div>
              <div className={tw.formGroup}>
                <label htmlFor={LabelController.EXPIRE}>EXPIRE:</label>
                <input
                  type='text'
                  required
                  placeholder='mm/yy'
                  id={LabelController.EXPIRE}
                />
              </div>
              <div className={tw.formGroup}>
                <label htmlFor={LabelController.CCV}>ccv:</label>
                <input
                  type='password'
                  required
                  placeholder='***'
                  id={LabelController.CCV}
                />
              </div>
              <div className={`${tw.formGroup} ${tw.full}`}>
                <label htmlFor={LabelController.INSTANT}>INSTANT</label>
                <input
                  type='text'
                  required
                  placeholder='David Koperfield'
                  id={LabelController.INSTANT}
                />
              </div>
              <div className={tw.formCheckbox}>
                <input type='checkbox' name='agreement' id='agreement' required />
                <span className={tw.check} />
                <label className={LabelController.AGREEMENT} htmlFor='agreement'>
                  I agree with the <span>rules</span> of the Store
                </label>
              </div>
              <div className={tw.modalTotal}>
                <div className={tw.modalTotalText}>your total sum</div>
                <div className={tw.modalTotalPrice}>{totalPrice} $</div>
              </div>
              <button className={`${tw.modalSubmit} ${tw.buyButton}`} type='submit'>
                buy now
              </button>
              <div
                onClick={() => {
                  setIsTrue()
                }}
                className={tw.closeMarker}
                role='presentation'
              >
                x
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={`${tw.overlay} ${clsx(isTrue && tw.opened)}`} />
    </>
  )
}
export default Modal
