import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { bit } from '@assets/icons'
import $ from '@common/Header.module.scss'
import Search from '@components/Search'
import { basketSelector } from '@/redux/slices/basketSlice'

type SetStateAction<S> = S | ((prevState: S) => S)
type Dispatch<A> = (value: A) => void

export interface HeaderProps {
  searchValue: string
  setSearchValue?: Dispatch<SetStateAction<string>>
}

const Header = () => {
  const { items, totalPrice } = useSelector(basketSelector)

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
        <Search />
        <div className={$.infoPayment}>
          <Link
            to={items.length > 0 ? '/basket' : '/emptyBasket'}
            className={`${$.button} flexCenter`}
          >
            <span className={$.buttonCost}>$ {totalPrice}</span>
            <div className={$.buttonDelimiter}> </div>
            <FontAwesomeIcon
              color='white'
              className='mr-2'
              icon={faBasketShopping}
              size='lg'
            />
            <span className={$.infoBin}>{items.length}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
