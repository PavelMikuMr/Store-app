import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { shallowEqual } from 'shallow-equal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { IBasket } from '_types/Filter'
import { bit } from '@assets/icons'
import $ from '@common/Header.module.scss'
import Search from '@components/Search'

interface Filter {
  items: IBasket[]
  totalPrice: number
}

const Header = React.memo(
  function Header({ items, totalPrice }: Filter) {
    enum Path {
      basket = '/basket',
      empty = '/emptyBasket'
    }
    const { pathname } = useLocation()

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
          {pathname !== Path.basket && pathname !== Path.empty && (
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
          )}
        </div>
      </header>
    )
  },
  (prevProps: Filter, nextProps: Filter) => {
    if (shallowEqual(prevProps, nextProps)) {
      return true
    }
    return false
  }
)
export default Header
