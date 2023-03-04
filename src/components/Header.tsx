import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { shallowEqual } from 'shallow-equal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { IBasket } from '@type/Filter'
import { bit } from '@assets/icons'
import tw from '@common/Header.module.scss'
import Search from '@components/Search'

interface Filter {
  items: IBasket[]
  totalPrice: number
}

const Header = React.memo(
  function Header({ items, totalPrice }: Filter) {
    const isMounted = React.useRef(false)

    enum Path {
      basket = '/basket',
      empty = '/emptyBasket'
    }
    const { pathname } = useLocation()

    React.useEffect(() => {
      if (isMounted.current) {
        const json = JSON.stringify({ totalPrice, items })
        localStorage.setItem('basket', json)
      }
      isMounted.current = true
    }, [items])
    return (
      <header className={tw.header}>
        <div className={tw.gridBox}>
          <div className={tw.info}>
            <div>
              <Link to='/'>
                <img src={bit} alt='logo' className='max-w-[3rem]' />
              </Link>
            </div>
            <div className={tw.infoTextBox}>
              <h2 className={tw.infoTitle}>React Store</h2>
              <p className={tw.infoSubTitle}> The best store in the universe </p>
            </div>
          </div>
          <Search />
          {pathname !== Path.basket && pathname !== Path.empty && (
            <div className={tw.infoPayment}>
              <Link
                to={items.length > 0 ? '/basket' : '/emptyBasket'}
                className={`${tw.button}`}
              >
                <span className={tw.buttonCost}>$ {totalPrice}</span>
                <div className={tw.buttonDelimiter}> </div>
                <FontAwesomeIcon
                  color='white'
                  className='bottom-[11px] right-[50%] mr-2'
                  icon={faBasketShopping}
                  size='lg'
                />
                <span className={tw.infoBin}>{items.length}</span>
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
