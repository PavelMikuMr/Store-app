/* eslint-disable jsx-a11y/label-has-associated-control */
import module from '../../../../App.module.scss'

const { formInput, inputError, helperErrorText } = module
//* 1)
// type InputProps = React.HTMLProps<HTMLInputElement>

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean
  helperText?: string
  htmlFor: string
  labelText: string
}
//* 3)
// interface InputProps {
//   name: string
// }

export const Input = ({
  labelText,
  htmlFor,
  isError = false,
  helperText,
  ...props
}: InputProps) => {
  const className = isError ? inputError : ''
  return (
    <>
      <input className={`${formInput} formInputActive ${className}`} {...props} />
      <label className='formLabelActive' htmlFor={htmlFor}>
        {labelText}
      </label>
      {isError && helperText && <div className={helperErrorText}>{helperText}</div>}
    </>
  )
}
