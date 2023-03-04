import $ from '@styles/views/LoginPage.module.scss'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean
  helperText?: string
  htmlFor: string
  labelText: string
}

export const Input = ({
  labelText,
  htmlFor,
  isError = false,
  helperText,
  ...props
}: InputProps) => {
  const className = isError ? $.error : ''
  return (
    <>
      <input
        id={htmlFor}
        className={`${$.formInput} ${$.formInputActive} ${className}`}
        {...props}
      />
      <label className={$.formLabelActive} htmlFor={htmlFor}>
        {labelText}
      </label>
      {isError && helperText && <div className={$.helperErrorText}>{helperText}</div>}
    </>
  )
}
