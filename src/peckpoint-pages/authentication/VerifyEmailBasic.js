// ** React Imports
import { Link, useParams } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import axios from 'axios'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import { useState} from 'react'


//import { toast } from 'react-toastify'

const VerifyEmailBasic = () => {

  const { dataname } = useParams()
  const token = dataname

  console.log(token)

  const [data, addData] = useState('')

  axios.post('https://api.peckpoint.com/api/v1/verify-account', {
    data: {
      token : `${token}`
    }
  }).then(res => {
    addData(res.data)
  })

{ /*  useEffect(async () => {
   const item = {
      token: `${token}`
    },
    try {
      const resultsender = await fetch('https://api.peckpoint.com/api/v1/verify-account', {
        method: 'POST',
        body:JSON.stringify(item),
     }).then(res => res.json())
       addData(resultsender)
    } catch (error) {
      console.log(error)
    }
  }, [])*/ }

  console.log(data.message)
 
  return (
    <div className='auth-wrapper auth-basic px-2'>
      <div className='auth-inner my-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
              <h2 className='brand-text text-primary ms-1'>PeckPoint</h2>
            </Link>
            <CardTitle tag='h2' className='fw-bolder mb-1'>
              {data.success === true ? 'Success ✉️' : data.message}
            </CardTitle>
            <CardText className='mb-2'>
             { data.success === true ? 'Email was verified successfully !' : 'Email not Verified'}
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
