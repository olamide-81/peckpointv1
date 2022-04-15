// ** Reactstrap Imports
import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/banner/birthdaytemplate.png'


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
            <CardTitle tag='h4'>Arates Birthday Card</CardTitle>
            <CardSubtitle className='text-muted'>Coming soon!</CardSubtitle>
          </CardBody>
          <img className='img-fluid' src={img1} alt='Card cap' />
          <CardBody>
            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Preview
            </CardLink>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Make Default
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Arates Birthday Card</CardTitle>
            <CardSubtitle className='text-muted'>Coming soon!</CardSubtitle>
          </CardBody>
          <img className='img-fluid' src={img1} alt='Card cap' />
          <CardBody>
            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Preview
            </CardLink>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Make Default
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Arates Birthday Card</CardTitle>
            <CardSubtitle className='text-muted'>Coming soon!</CardSubtitle>
          </CardBody>
          <img className='img-fluid' src={img1} alt='Card cap' />
          <CardBody>
            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Preview
            </CardLink>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Make Default
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Arates Birthday Card</CardTitle>
            <CardSubtitle className='text-muted'>Coming soon!</CardSubtitle>
          </CardBody>
          <img className='img-fluid' src={img1} alt='Card cap' />
          <CardBody>
            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Preview
            </CardLink>
            <CardLink href='/' onClick={e => e.preventDefault()}>
              Make Default
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Arates Birthday Card</CardTitle>
            <CardSubtitle className='text-muted'>Coming soon!</CardSubtitle>
          </CardBody>
          <img className='img-fluid' src={img1} alt='Card cap' />
          <CardBody>
            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
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
