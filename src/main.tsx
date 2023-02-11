import ReactDOM from 'react-dom/client'
import GlobalStyles from '@styles/GlobalStyles'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyles />
    <App />
  </>
)
