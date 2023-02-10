/// <reference types="vite/client" />
declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.scss'
declare module '*.webp'
declare module '*.json'
declare module 'fields'
declare module 'components'
declare module 'assets'
declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}
