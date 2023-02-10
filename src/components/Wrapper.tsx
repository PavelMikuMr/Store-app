import $ from '@common/Wrapper.module.scss'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className='App'>
      <div className={$.wrapper}>{children}</div>
    </div>
  )
}
export default Wrapper
