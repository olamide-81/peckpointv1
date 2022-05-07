// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Button } from 'reactstrap'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Styles
import '@styles/base/pages/page-misc.scss'
{ /* <a aria-current="page" class="navbar-brand active" href="/"><span class="brand-logo"><img src="/static/media/logop.b6e9740e.png" alt="logo"></span><h2 class="brand-text mb-0">PeckPoint</h2></a> */ }
const Error = () => {
  // ** Hooks
  const { skin } = useSkin()
  const logo = require('@src/assets/images/logo/logop.png').default
  const illustration = skin === 'dark' ? 'error-dark.svg' : 'error.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default
  return (
    <div className='misc-wrapper'>
      <a className='brand-logo' href='/'>
        <img src={logo} width={33} alt="logo"></img>
        <h2 className='brand-text text-primary ms-1'>PeckPoint</h2>
      </a>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>Page Not Found 🕵🏻‍♀️</h2>
          <p className='mb-2'>Oops! 😖 The requested URL was not found on this server.</p>
          <Button tag={Link} to='/' color='primary' className='btn-sm-block mb-2'>
            Back to home
          </Button>
          <img className='img-fluid' src={source} alt='Not authorized page' />
        </div>
      </div>
    </div>
  )
}
export default Error
