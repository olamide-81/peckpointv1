// ** React Imports
import { Link } from 'react-router-dom'

import axios from 'axios'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import axios from 'axios'
//import { toast } from 'react-toastify'


const getGet = (val) => {
  const str = (window.location.search).substring(1)

  const ee = str.split('&')

  for (const e in ee) {
    const c = ee[e].split('=')
    if (c[0] === val) {
      return c[1]
    }
  }
  return null
}
  const tok = getGet('token')
  let status = {
    status : false,
    message : 'Loading...'
  }
  if (tok === null) {
      window.location = '/login'
}
axios.post('https://api.peckpoint.com/api/v2/verify-account', {
  data: {
    token : tok
  }
}).then(res => {
  status = res.data
})

const VerifyEmailBasic = () => {

  const getGet = (val) => {
    const str = (window.location.search).substring(1)
  
    const ee = str.split('&')
  
    for (const e in ee) {
      const c = ee[e].split('=')
      if (c[0] === val) {
        return c[1]
      }
    }
  }
  const token = getGet('token')


  axios.post("https://api.peckpoint.com/api/v1/verify-account", {
    token: {token},
    headers: {
      'Content-Type': 'application/json'
    }
  })
    //toast.info(err.messsage)
    //console.log(data.message)
 
  return (
    <div className='auth-wrapper auth-basic px-2'>
      <div className='auth-inner my-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
              <h2 className='brand-text text-primary ms-1'>PeckPoint</h2>
            </Link>
            <CardTitle tag='h2' className='fw-bolder mb-1'>
              {status.status ? 'Success ✉️' : (status.message === 'Loading...' ? 'Waiting' : 'Failed')}
            </CardTitle>
            <CardText className='mb-2'>
             { status.status ? 'Email was verified successfully !' : status.message}
            </CardText>
            <Button block tag={Link} to='/' color='primary'>
              Go back to Login
            </Button>
          </CardBody>
        </Card>
      </div>
      
    </div>
    
  )
}

export default VerifyEmailBasic
