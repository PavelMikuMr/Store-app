/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { Input } from 'components/Fields'
import module from '@/App.module.scss'

const {
  header,
  form,
  formGroup,
  login,
  loginBox,
  formButton,
  wrapperLogin,
  checkbox,
  checkboxLabel,
  checkboxInput
} = module
const LoginPage = () => {
  const [formValues, setFormValues] = useState({ username: '', password: '' })
  console.log(formValues)
  return (
    <div className={`${wrapperLogin} login`}>
      <div className={login}>
        <div className={header}>
          <h2 className='uppercase'>Store</h2>
        </div>
        <div className={loginBox}>
          <form className={form}>
            <h1 className='mb-3 text-3xl font-bold'>Log in</h1>
            <div className={`${formGroup} formGroupActive`}>
              <Input
                // isError
                // helperText='error'
                type='text'
                id='username'
                placeholder=' '
                name='username'
                defaultValue={formValues.username}
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, username: target.value })
                }}
                htmlFor='username'
                labelText='Username'
              />
            </div>
            <div className={`${formGroup} formGroupActive`}>
              <Input
                // isError
                // helperText='validate'
                type='password'
                id='password'
                placeholder=' '
                defaultValue={formValues.password}
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, password: target.value })
                }}
                htmlFor='password'
                labelText='Password'
              />
            </div>
            <div className={checkbox}>
              <input
                className={`${checkboxInput} inputDevice`}
                type='checkbox'
                id='myDevice'
              />
              <label className={`${checkboxLabel} labelDevice`} htmlFor='myDevice'>
                This is my device
              </label>
            </div>
            <button type='submit' className={formButton}>
              Sign in
            </button>
          </form>
        </div>
        <div className='flexCenterX'>
          <button className=' text-yellow-600'>Create new account</button>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
