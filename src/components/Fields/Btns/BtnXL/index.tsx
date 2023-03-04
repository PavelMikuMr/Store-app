import { Link } from 'react-router-dom'

interface BtnXLProps extends React.HTMLProps<HTMLButtonElement> {
  bg?: string
  text: string
  width?: string
  center?: string
  link?: string
}

export const BtnXL = ({
  text,
  bg = '',
  width = '',
  center = '',
  link = ''
}: BtnXLProps) => {
  return (
    <div className={`btnField ${center}`}>
      <Link to={link}>
        <button className={`btnXl ${bg} ${width}`}>{text}</button>
      </Link>
    </div>
  )
}
