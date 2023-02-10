import $ from '@styles/views/LoginPage.module.scss'

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  text: string
  htmlFor: string
}

export const Checkbox = ({ text, htmlFor }: CheckboxProps) => {
  return (
    <div className={$.checkbox}>
      <input className={`${$.inputDevice}`} type='checkbox' id={htmlFor} />
      <label className={`${$.checkboxLabel} ${$.labelDevice}`} htmlFor={htmlFor}>
        {text}
      </label>
    </div>
  )
}
