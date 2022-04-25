// ** React Imports
import { Fragment, React, useRef, useState } from 'react'
//import html2canvas from 'html2canvas'
import html2canvas from 'html2canvas'

import axios from 'axios'

// ** Reactstrap Imports
import { Card, CardImg, CardTitle, CardBody, CardImgOverlay, CardText, Row, Col, Button } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/banner/birthdaybaloon.jpeg'
import img2 from '@src/assets/images/banner/happybirthday.jpeg'
import img3 from '@src/assets/images/banner/gift.jpeg'
import img4 from '@src/assets/images/avatars/avatar-blank.png'


const CardImages = () => {
  
  const user = JSON.parse(localStorage.getItem('user'))
  const token = user.token
  

  const printRef = useRef([])

  const handleDownloadImage = async (o) => {
    
    const element = printRef.current[o]
    
    const canvas = await html2canvas(element)

    const data = canvas.toDataURL('image/jpg')
    const link = document.createElement('a')
    // console.log(element)
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
  const [conts, setConts] = useState([])
  const today = [], thisWeek = [], thisMonth = [], sorts = ['Today', 'This Week', 'This Month']
  axios.get('https://api.peckpoint.com/api/v1/contacts', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then(res => {
    const data = res.data.data
    
    data.forEach((v, i) => {
      // console.log(Date.parse(v.dob))
      if (!isNaN(Date.parse(v.dob))) {
      
        const date = new Date(), mdate = new Date(Date.parse(v.dob))

            const currDate = Math.floor(Date.parse(`${date.getFullYear()}-${date.getMonth() - 1}-${date.getDate()}`) / 1000)

          const tDate = Math.floor(Date.parse(`${mdate.getFullYear()}-${mdate.getMonth() - 1}-${mdate.getDate()}`) / 1000)
    
            if (tDate < currDate + 86400) {
                today[i] = data[i]
            } else if (tDate < currDate + (604800 - (86400 * date.getDay()))) {
                thisWeek[i] = data[i]
            } else if (mdate.getMonth === date.getDate()) {
                thisMonth[i] = data[i]
            }
        }
    })

    // console.log(today)

    setConts([today, thisWeek, thisMonth])

  })
  
  return (
    <Fragment>
      <Row>
        <div className="sortTab"> 
            <span>Show Card for - </span>
            <select onChange={(e) => {
            if (document.querySelectorAll(`.${e.target.value}`).length) {
                document.querySelector(`.${e.target.value}`).scrollIntoView()
              }
            }}>
              <option value="today">Today</option>
              <option value="thisweek">This Week</option>
              <option value="thismonth">This Month</option>
            </select>
        </div>

        {
          conts.map((e, i) => ( 
            
            [
            e.length ? <div key={i} style={{
                padding : '8px 0px',
                margin:'auto',
                width:'calc(100% - 40px)'
            }} className={((sorts[i]).replace(' ', '')).toLowerCase()}>{sorts[i]}</div> : '', 

            e.map((ee, ii) => {
              if (ee !== undefined) {
              return (
              <Col xl='6' key={ii} md='6'>
                <Card className='birthdaycardf' responsive="true">
                  <div className='birthdaycardf' ref={e => {
                    const ez = printRef.current[ii] = e
                    return ez
                  }}>
                    <CardBody className='birthdaycard'>
                      <CardTitle className='birthdaycard'>
                        <img src={img1} className='baloon' />
                        <div className='section-2'>
                          <img src={img2} className='happy-birthday' />
                          <div>
                            <img src={img4} className='profile-picture' />
                            <h2>{(`${ee.firstname} ${ee.lastname}`).toUpperCase()}</h2>
                            <p>- With Love from {user.user.name}</p>
                          </div>
                        </div>
                        <img src={img3} className='gift' />
                      </CardTitle>
                    </CardBody>
                  </div>
                </Card>
                <Button color='primary' outline className='button' onClick={() => handleDownloadImage(ii)}>
                  Download
                </Button>
              </Col>
            )
          }
        }
            )
          ]
            
          ))
        }

       {/* <Col xl='6' md='6'>
          <Card className='birthdaycardf' responsive="true">
            <div className='birthdaycardf' key={printRef.current.length} ref={e => {
              const ez = printRef.current[printRef.current.length] = e
                return ez
              }}>
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
          <Button color='primary' key={1} outline className='button' onClick={() => handleDownloadImage(printRef.current.length)}>
              Download
            </Button>
        </Col>
        <Col xl='6' md='6'>
          <Card className='birthdaycardf' responsive="true">
            <div className="birthdaycardf" key={printRef.current.length} ref={e => {
              const ez = printRef.current[printRef.current.length] = e
              return ez
            }}>
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
            </div>
          </Card>
          <Button color='primary' key={2} onClick={() => handleDownloadImage(printRef.current.length)} outline className='button'>
              Download
            </Button>
        </Col>
        <Col xl='6' md='6'>
          <Card className='birthdaycardf' responsive="true">
            <div className="birthdaycardf" key={printRef.current.length} ref={e => {
              const ez = printRef.current[printRef.current.length] = e
              return ez
            }}>
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
            </div>
          </Card>
          <Button color='primary' key={3} onClick={() => handleDownloadImage(printRef.current.length)} outline className='button'>
              Download
            </Button>
        </Col>
        <Col xl='6' md='6'>
          <Card className='birthdaycardf' responsive="true">
            <div className="birthdaycardf" ref={printRef[4]}>
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
            </div>
          </Card>
          <Button color='primary' key={4} onClick={() => handleDownloadImage(printRef.current.length)} outline className='button'>
              Download
            </Button>
        </Col>*/}
      </Row> 
    </Fragment>
  )
}

export default CardImages