import tw from '@styles/views/LoginPage.module.scss'

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  text: string
  htmlFor: string
}

export const Checkbox = ({ text, htmlFor }: CheckboxProps) => {
  return (
    <div className={tw.checkbox}>
      <input className={`${tw.inputDevice}`} type='checkbox' id={htmlFor} />
      <label className={`${tw.checkboxLabel} ${tw.labelDevice}`} htmlFor={htmlFor}>
        {text}
      </label>
    </div>
  )
}
