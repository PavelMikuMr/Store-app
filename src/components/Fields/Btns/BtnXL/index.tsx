import { Link } from 'react-router-dom'

export const BtnXL = ({
  text,
  bg = '',
  width = '',
  center = '',
  link = ''
}: {
  bg?: string
  text: string
  width?: string
  center?: string
  link?: string
}) => {
  return (
    <div className={`btnField ${center}`}>
      <Link to={link}>
        <button className={`btnXl ${bg} ${width}`}>{text}</button>
      </Link>
    </div>
  )
}
// export default BtnXL
