import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { logo } from '@assets/icons'
import $ from '@common/Header.module.scss'

const Header = () => {
  return (
    <header className={$.header}>
      <div className={`${$.container} flexBetweenX`}>
        <div className='info flexCenter text-white'>
          <div>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className={$.infoTextBox}>
            <h2 className={$.infoTitle}>React Store</h2>
            <p className={$.infoSubTitle}> The best store in the universe </p>
          </div>
        </div>
        <div className={`${$.infoPayment}  text-white`}>
          <Link to='/basket' className={`${$.button} flexCenter`}>
            <span className={$.buttonCost}>$ 320</span>
            <div className={$.buttonDelimiter}> </div>
            <FontAwesomeIcon
              color='white'
              className='mr-2'
              icon={faBasketShopping}
              size='lg'
            />
            <span className={$.infoBin}>3</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
