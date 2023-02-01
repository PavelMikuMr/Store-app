import { useState } from 'react'
import './App.scss'

import reactLogo from './assets/react.svg'

import Grid from './components/Grid'

import Furniture from './components/Furniture'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Furniture />
    </div>
  )
}

export default App
