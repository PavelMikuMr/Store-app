import tw from '@styles/views/LoginPage.module.scss'

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
  const className = isError ? tw.error : ''
  return (
    <>
      <input
        id={htmlFor}
        className={`${tw.formInput} ${tw.formInputActive} ${className}`}
        {...props}
      />
      <label className={tw.formLabelActive} htmlFor={htmlFor}>
        {labelText}
      </label>
      {isError && helperText && <div className={tw.helperErrorText}>{helperText}</div>}
    </>
  )
}
