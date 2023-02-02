import styles from '../../App.style'

import module from '../../App.module.scss'

const LoginPage = () => {
  return (
    <div className='grid h-screen'>
      <div className='m-auto shadow-black'>
        <div className='flex h-[100px] w-[300px] items-end justify-center  rounded-t-xl bg-yellow-200 pb-5 font-poppins text-2xl font-bold text-black'>
          <h2 className=' uppercase'>doggee</h2>
        </div>
        <div className=' grid h-[300px] w-[300px] items-center  rounded-b-xl bg-white px-10 pb-3 '>
          <div className='form self-end justify-self-center'>
            <form action='submit'>
              <input
                className='rounded-md bg-stone-200 p-1'
                type='text'
                placeholder='username'
              />
              <input
                className='mt-2 rounded-md bg-stone-200 p-1'
                type='password'
                placeholder='password'
              />
            </form>
          </div>
          <div className='self-end'>
            <p className='  text-center text-yellow-600'>Create new account</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
