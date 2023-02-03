/* eslint-disable jsx-a11y/label-has-associated-control */
import module from '../../App.module.scss'

const { header, form, formGroup, formInput, login, formLabel, loginBox, formButton } =
  module
const LoginPage = () => {
  return (
    <div className={login}>
      <div className={header}>
        <h2 className='uppercase'>Store</h2>
      </div>
      <div className={loginBox}>
        <form className={form}>
          <h1 className='mb-3 text-3xl font-bold'>Log in</h1>
          <div className={`${formGroup} formGroupActive`}>
            <label className={`${formLabel} formLabelActive`} htmlFor='email'>
              Email
            </label>
            <input id='email' className={`${formInput} formInputActive`} type='text' />
          </div>
          <div className={`${formGroup} formGroupActive`}>
            <label className={`${formLabel} formLabelActive`} htmlFor='password'>
              Password
            </label>
            <input
              className={`${formInput} formInputActive`}
              id='password'
              type='password'
            />
          </div>
          <button type='submit' className={formButton}>
            Login
          </button>
        </form>
      </div>
      <div>
        <p className='  text-center text-yellow-600'>Create new account</p>
      </div>
    </div>
  )
}
export default LoginPage
