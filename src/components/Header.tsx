import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

import module from '../App.module.scss'
import { logo } from '../assets'

const {
  header,
  infoIcon,
  infoTextBox,
  container,
  infoPayment,
  buttonDelimiter,
  infoBin,
  buttonCost,
  button,
  logoSvg,
  InfoTitle,
  InfoSubTitle
} = module

const Header = () => {
  return (
    <header className={header}>
      <div className={`${container} flexBetweenX`}>
        <div className='info flexCenter text-white'>
          <div className={`${infoIcon}`}>
            <a href='home'>
              <img className={`${logoSvg}`} src={logo} alt='logo' />
            </a>
          </div>
          <div className={infoTextBox}>
            <h2 className={InfoTitle}>React Store</h2>
            <p className={InfoSubTitle}> The best store in the universe </p>
          </div>
        </div>
        <div className={`${infoPayment}  text-white`}>
          <a href='home' className={`${button} flexCenter`}>
            <span className={buttonCost}>$ 320</span>
            <div className={buttonDelimiter}> </div>
            <FontAwesomeIcon
              color='white'
              className='mr-2'
              icon={faBasketShopping}
              size='lg'
            />
            <span className={infoBin}>3</span>
          </a>
        </div>
      </div>
    </header>
  )
}
export default Header
