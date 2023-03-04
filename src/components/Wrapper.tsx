import tw from '@common/Wrapper.module.scss'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className='App'>
      <div className={tw.wrapper}>{children}</div>
    </div>
  )
}
export default Wrapper
