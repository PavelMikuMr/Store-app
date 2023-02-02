import Furniture from './Furniture'

import styles from '../App.style'

import module from '../App.module.scss'

const { handleLayout } = module

const HandleLayout = () => {
  return (
    <>
      <h1 className='heading'>Get, Buy & Sell</h1>
      <div className={handleLayout}>
        <Furniture />
        <Furniture />
        <Furniture />
        <Furniture />
        <Furniture />
        <Furniture />
      </div>
    </>
  )
}
export default HandleLayout
