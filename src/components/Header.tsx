import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { bit } from '@assets/icons'
import $ from '@common/Header.module.scss'
import Search from '@components/Search'

type SetStateAction<S> = S | ((prevState: S) => S)
type Dispatch<A> = (value: A) => void

export interface HeaderProps {
  searchValue: string
  setSearchValue?: Dispatch<SetStateAction<string>>
}

// const Header = ({ searchValue, setSearchValue }: HeaderProps) => {
const Header = () => {
  return (
    <header className={$.header}>
      <div className={$.gridBox}>
        <div className={$.info}>
          <div>
            <Link to='/'>
              <img src={bit} alt='logo' className='max-w-[3rem]' />
            </Link>
          </div>
          <div className={$.infoTextBox}>
            <h2 className={$.infoTitle}>React Store</h2>
            <p className={$.infoSubTitle}> The best store in the universe </p>
          </div>
        </div>
        {/* <Search searchValue={searchValue} setSearchValue={setSearchValue} /> */}
        <Search />
        <div className={$.infoPayment}>
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
