import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowRightArrowLeft,
  faTicket,
  faBolt,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleDown, faUser } from '@fortawesome/free-regular-svg-icons'

// import { navLinks } from '../constant'
import module from '../App.module.scss'

const Home = () => {
  return (
    <div>
      <p>HOME</p>
      <FontAwesomeIcon icon={faUser} size='2xl' />
      <h1 className='bg-gray-900 text-yellow-500'> world!</h1>
    </div>
  )
}
export default Home
