import { useState } from 'react'
import { Input, Checkbox } from '@fields'
import module from '@/App.module.scss'

const { header, form, formGroup, login, loginBox, formButton, wrapperLogin } = module
const LoginPage = () => {
  const [formValues, setFormValues] = useState({ username: '', password: '' })
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
                isError
                helperText='validation'
                type='text'
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
                placeholder=' '
                defaultValue={formValues.password}
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, password: target.value })
                }}
                htmlFor='password'
                labelText='Password'
              />
            </div>
            <Checkbox htmlFor='myDevice' text='This is my devise' />
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
