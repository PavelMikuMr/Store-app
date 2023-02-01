import { useState } from 'react'
import './App.scss'

import reactLogo from './assets/react.svg'

import Home from './components/Home'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div>Hello</div>
      <Home />
    </div>
  )
}

export default App
