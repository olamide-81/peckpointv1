// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const VerifyEmailBasic = () => {
  return (
    <div className='auth-wrapper auth-basic px-2'>
      <div className='auth-inner my-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
              <h2 className='brand-text text-primary ms-1'>PeckPoint</h2>
            </Link>
            <CardTitle tag='h2' className='fw-bolder mb-1'>
              Success ✉️
            </CardTitle>
            <CardText className='mb-2'>
             Email was verified successfully !
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
