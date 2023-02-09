import module from '@/App.module.scss'

const { checkbox, checkboxInput, checkboxLabel } = module

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  text: string
  htmlFor: string
}

export const Checkbox = ({ text, htmlFor }: CheckboxProps) => {
  return (
    <div className={checkbox}>
      <input className={`${checkboxInput} inputDevice`} type='checkbox' id={htmlFor} />
      <label className={`${checkboxLabel} labelDevice`} htmlFor={htmlFor}>
        {text}
      </label>
    </div>
  )
}
