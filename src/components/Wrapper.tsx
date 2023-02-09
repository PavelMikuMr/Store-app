import module from '@/App.module.scss'

const { wrapper } = module
interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className='App'>
      <div className={wrapper}>{children}</div>
    </div>
  )
}
export default Wrapper
