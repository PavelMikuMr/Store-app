import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😥</span>
      <h1 className='font-poppins text-lg'>Nothing found</h1>
      <h1 className={styles.description}>Такая страница отсутствует в нашем магазине</h1>
    </div>
  )
}
export default NotFoundBlock
