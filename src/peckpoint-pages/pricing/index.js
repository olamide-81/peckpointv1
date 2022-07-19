// ** React Imports
import { useState, useEffect, Fragment } from 'react'
import img from '@src/assets/images/svg/price.svg'
import { Link } from 'react-router-dom'

//import { toast } from 'react-toastify'

// ** Third Party Components


// ** Demo Components
import PricingCards from './PricingCards'
import PricingTrial from './PricingTrial'
import PricingHeader from './PricingHeader'

// ** Styles
import '@styles/base/pages/page-pricing.scss'

import { Card, CardTitle, CardBody, CardText, Row, Col, Button, CardImg } from 'reactstrap'

const Pricing = () => {
  // ** States
  const [data, setData] = useState([]),
    [duration, setDuration] = useState('monthly')
    //const [info, setInfo] = useState('')
    const saved = JSON.parse(localStorage.getItem('user'))
    const token = saved.token

    useEffect(async() => {
     try {
      const resultsender = await fetch("https://api.peckpoint.com/api/v1/plans", {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     setData(resultsender.data)
     }

     } catch (error) {
       console.log(error)
     }
    }, [])


    async function purchase() {
      
      { /* const result = await fetch("https://api.peckpoint.com/api/v1/subscriptions", {
         method: 'POST',
         headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
         }
      })
      .then(res => res.json())
        .then(data => {
          toast.info(data.message)
        })
      return result*/ }
      
    }

  return (
    <div id='pricing-table'>
      <PricingHeader duration={duration} setDuration={setDuration} />
        <Fragment>
       <Row>
       {
           data.map((data, index) => ([
        <Col md='6' lg='4' key={index} value={data.name} >
          <Card className='text-center mb-3'>
            <CardBody>
              <CardImg src={img} className='price-img'></CardImg>
              <CardTitle tag='h4'>{data.name}</CardTitle>
              <CardText>{data.description}</CardText>
              <CardText className='price-cost'>Cost : ${data.cost}</CardText>
              <CardText>Duration : {data.duration} months</CardText>
              <Button color='primary' outline onClick={purchase} tag={Link} to={`/checkoutwizard/${data.id}`}>
                Purchase
              </Button>
            </CardBody>
          </Card>
        </Col>
         ])
         )
      }
      </Row>
        </Fragment>
    </div>
  )
}

export default Pricing
