// ** Reactstrap Imports
import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/banner/birthdaytemplate.png'
import img2 from '../../assets/images/birthday/temptwo.png'


const CardTitles = () => {
  return (
    <Row className='match-height'>
      <Col lg='4' md='6'>
        <Card>
        <CardImg top src={img1} alt='Card cap' />
          <CardBody>
            <CardTitle tag='h4'>PeckPoint Default</CardTitle>
            <CardText>
              This is the default Peckpoint Birthday Card used Globally on the app
            </CardText>
            <Button color='primary' outline>
              Download
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>New Template</CardTitle>
            <CardSubtitle className='text-muted'>Coming soon!</CardSubtitle>
          </CardBody>
          <img className='img-fluid' src={img2} alt='Card cap' />
          <CardBody>
            <CardText>White celebration confettis.</CardText>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Preview
            </CardLink>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Make Default
            </CardLink>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default CardTitles
