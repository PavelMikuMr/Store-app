import $ from '@styles/views/LoginPage.module.scss'
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
