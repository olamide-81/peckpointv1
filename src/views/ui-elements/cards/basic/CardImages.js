// ** React Imports
import { Fragment, React, useRef } from 'react'
//import html2canvas from 'html2canvas'
import html2canvas from 'html2canvas'

// ** Reactstrap Imports
import { Card, CardImg, CardTitle, CardBody, CardImgOverlay, CardText, Row, Col, Button } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/banner/birthdaybaloon.jpeg'
import img2 from '@src/assets/images/banner/happybirthday.jpeg'
import img3 from '@src/assets/images/banner/gift.jpeg'
import img4 from '@src/assets/images/avatars/7.png'


const CardImages = () => {
  
  const user = JSON.parse(localStorage.getItem('user'))
  const printRef = useRef()

  const handleDownloadImage = async () => {
    const element = printRef.current
    const canvas = await html2canvas(element)

    const data = canvas.toDataURL('image/jpg')
    const link = document.createElement('a')

    if (typeof link.download === 'string') {
      link.href = data
      link.download = 'image.jpg'

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      window.open(data)
    }
  }

  return (
    <Fragment>
      <Row>
        <Col xl='6' md='6'>
          <Card className='birthdaycardf' responsive>
            <div className='birthdaycardf' ref={printRef}>
            <CardBody className='birthdaycard'>
              <CardTitle className='birthdaycard'> 
                <img src={img1} className='baloon'/> 
                <div className='section-2'>
                <img src={img2} className='happy-birthday'/> 
                <div>
                <img src={img4} className='profile-picture'/> 
                <h2>ADAM FIU</h2>
                <p>- With Love from {user.user.name}</p>
                </div>
                </div>
                <img src={img3} className='gift'/>
                </CardTitle>
            </CardBody>
            </div>
          </Card>
          <Button color='primary' outline className='button' onClick={handleDownloadImage}>
              Download
            </Button>
        </Col>
        <Col xl='6' md='6'>
          <Card className='birthdaycardf' responsive>
            <CardBody className='birthdaycard'>
              <CardTitle className='birthdaycard'> 
                <img src={img1} className='baloon'/> 
                <div className='section-2'>
                <img src={img2} className='happy-birthday'/> 
                <div>
                <img src={img4} className='profile-picture'/> 
                <h2>Joshua Akin</h2>
                <p>- With Love from Peter Ifeanyi</p>
                </div>
                </div>
                <img src={img3} className='gift'/>
                </CardTitle>
            </CardBody>
          </Card>
          <Button color='primary' outline className='button'>
              Download
            </Button>
        </Col>
        <Col xl='6' md='6'>
          <Card className='birthdaycardf' responsive>
            <CardBody className='birthdaycard'>
              <CardTitle className='birthdaycard'> 
                <img src={img1} className='baloon'/> 
                <div className='section-2'>
                <img src={img2} className='happy-birthday'/> 
                <div>
                <img src={img4} className='profile-picture'/> 
                <h2>Adamu Adamu</h2>
                <p>- With Love from Peter Ifeanyi</p>
                </div>
                </div>
                <img src={img3} className='gift'/>
                </CardTitle>
            </CardBody>
          </Card>
          <Button color='primary' outline className='button'>
              Download
            </Button>
        </Col>
        <Col xl='6' md='6'>
          <Card className='birthdaycardf' responsive>
            <CardBody className='birthdaycard'>
              <CardTitle className='birthdaycard'> 
                <img src={img1} className='baloon'/> 
                <div className='section-2'>
                <img src={img2} className='happy-birthday'/> 
                <div>
                <img src={img4} className='profile-picture'/> 
                <h2>Olatunde Olamide</h2>
                <p>- With Love from Peter Ifeanyi</p>
                </div>
                </div>
                <img src={img3} className='gift'/>
                </CardTitle>
            </CardBody>
          </Card>
          <Button color='primary' outline className='button'>
              Download
            </Button>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardImages
