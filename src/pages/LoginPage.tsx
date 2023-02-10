import { useState } from 'react'
import { Input, Checkbox } from '@fields'
import $ from '@styles/views/LoginPage.module.scss'

const validateIsEmpty = (value: string) => {
  if (!value) return 'field required'
  return null
}

const validateUsername = (value: string) => {
  return validateIsEmpty(value)
}
const validatePassword = (value: string) => {
  return validateIsEmpty(value)
}

const loginFormValidateSchema = {
  username: validateUsername,
  password: validatePassword
}
const validateLoginForm = (name: keyof typeof loginFormValidateSchema, value: string) => {
  return loginFormValidateSchema[name](value)
}

interface FormErrors {
  username: string | null
  password: string | null
}
const LoginPage = () => {
  const [formValues, setFormValues] = useState({ username: '', password: '' })
  const [formErrors, setFormErrors] = useState<FormErrors>({
    username: null,
    password: null
  })
  return (
    <div className={$.wrapperLogin}>
      <div className={$.login}>
        <div className={$.header}>
          <h2 className='uppercase'>Store</h2>
        </div>
        <div className={$.loginBox}>
          <form className={$.form}>
            <h1 className={$.loginTitle}>Log in</h1>
            <div className={`${$.formGroup} ${$.formGroupActive}`}>
              <Input
                type='text'
                placeholder=' '
                name='username'
                defaultValue={formValues.username}
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
                  const username = target.value
                  setFormValues({ ...formValues, username })
                  const errors = validateLoginForm('username', username)
                  setFormErrors({ ...formErrors, username: errors })
                }}
                htmlFor='username'
                labelText='Username'
                {...(!!formErrors.username && {
                  isError: !!formErrors.username,
                  helperText: formErrors.username
                })}
              />
            </div>
            <div className={`${$.formGroup} ${$.formGroupActive}`}>
              <Input
                type='password'
                placeholder=' '
                defaultValue={formValues.password}
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
                  const password = target.value
                  setFormValues({ ...formValues, password })
                  const errors = validateLoginForm('password', password)
                  setFormErrors({ ...formErrors, password: errors })
                }}
                htmlFor='password'
                labelText='Password'
                {...(!!formErrors.password && {
                  isError: !!formErrors.password,
                  helperText: formErrors.password
                })}
              />
            </div>
            <Checkbox htmlFor='myDevice' text='This is my devise' />
            <button type='submit' className={$.formButton}>
              Sign in
            </button>
          </form>
        </div>
        <div className={$.flexCenter}>
          <button className='text-yellow-600'>Create new account</button>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
