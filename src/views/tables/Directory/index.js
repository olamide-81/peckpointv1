// ** Reactstrap Imports
import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/banner/birthdaytemplate.png'
import { useEffect, useState } from 'react'


const CardTitles = () => {

    const saved = JSON.parse(localStorage.getItem('user'))
    const token = saved.token

    const [data, setData] = useState([])
    useEffect(async() => {
        const resultsender = await fetch("https://api.peckpoint.com/api/v1/contacts", {
            headers: {
             Authorization: `Bearer ${token}`
            }
         }).then(res => res.json())
    
        if (resultsender.success) {
         setData(resultsender.data)
         }
    
      }, [])

  return (
    <Row >
        <Button color='primary' className='directory-btn'>Share Directory</Button>
      {
           data.map((data, index) => ([
            <Col lg='3' sm='6'>
     <Card className='directory-card' key={index}>
         <CardImg className='directory-img' src={img1}></CardImg>
         <CardText className='directory-name'>{data.firstname} {data.lastname}</CardText>
     </Card>
     </Col>
      ])
      )
   }
    </Row>
  )
}

export default CardTitles
