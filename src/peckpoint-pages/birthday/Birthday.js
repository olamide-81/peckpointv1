// ** React Imports
import { Fragment, React, useRef, useState, useEffect } from 'react'
//import html2canvas from 'html2canvas'
import html2canvas from 'html2canvas'
import Idle from '../IdleTimerContainer'

import axios from 'axios'
import { useSkin } from '@hooks/useSkin'
// ** Reactstrap Imports
import { Card, CardImg, CardTitle, CardBody, CardImgOverlay, CardText, Row, Col, Button } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/banner/birthdaybaloon.jpeg'
import img2 from '@src/assets/images/banner/happybirthday.jpeg'
import img3 from '@src/assets/images/banner/gift.jpeg'
import img4 from '@src/assets/images/avatars/avatar-blank.png'


const CardImages = () => {
  const { skin } = useSkin()
  const illustration = skin === 'dark' ? 'error-dark.svg' : 'error.svg',
   empty = require(`@src/assets/images/pages/${illustration}`).default
  const user = JSON.parse(localStorage.getItem('user'))
  const token = user.token
  const plan = user.user.plan
  

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
  const [cdata, setCdata] = useState([])
  
  useEffect(async () => {
    try {
      axios.get('https://api.peckpoint.com/api/v1/contacts', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.data.data !== undefined) {
        const data = res.data.data
        const cummulate = []
          data.forEach((v, i) => {

          if (!isNaN(Date.parse(v.dob))) {

            const date = new Date(), mdate = new Date(Date.parse(v.dob))

              if ((date.getMonth() === mdate.getMonth()) && (mdate.getDate() === date.getDate())) {
                cummulate.push(cdata[i])
              }
          }
        })
          setConts(cummulate)
          setCdata(data)
      }
        // setConts([today, thisWeek, thisMonth])
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Fragment>
      <Row>
        <div className="sortTab"> 
            <span>Show Card for - </span>
            <select onChange={(e) => {
              const arr = ["today", "thisweek", "thismonth"]
              const cummulate = []
                  cdata.forEach((v, i) => {

                    if (!isNaN(Date.parse(v.dob))) {

                        const date = new Date(), mdate = new Date(Date.parse(v.dob))

                        const currDate = Math.floor(Date.parse(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - date.getDay()}`) / 1000) // today's date

                        const UDate = Math.floor(Date.parse(`${mdate.getFullYear()}-${mdate.getMonth() + 1}-${mdate.getDate()}`) / 1000) // user date

                      if (arr[0] === e.target.value) {
                        if ((date.getMonth() === mdate.getMonth()) && (mdate.getDate() === date.getDate())) {
                          cummulate.push(cdata[i])
                        }
                      }
                      if (arr[1] === e.target.value) {
                        if ((UDate >= currDate) && (UDate <= (currDate + 604800))) {
                          cummulate.push(cdata[i])
                        }
                      }

                      if (arr[2] === e.target.value) {
                        if (mdate.getMonth() === date.getMonth()) {
                          cummulate.push(cdata[i])
                        }
                      }
                      }
                }) 

                setConts(cummulate)

            }}>
              <option value="today">Today</option>
              <option value="thisweek">This Week</option>
              <option value="thismonth">This Month</option>
            </select>
        </div>

            <div className="cardss">
          {!Boolean(conts.length) && (
            <div className="empty" style={{
              display: 'flex',
              width: '100%',
              height: 'fit-content',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img src={empty} className="mb-3" style={{
                width: '300px'
              }} alt="no birthdays around this month" />

              <h2 className="mt-2">No Birthdays are close by at the moment</h2>
            </div>
          )}

        {Boolean(conts.length) && (conts.map((ee, ii) => (
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
                              <p>{ee.dob} - With Love from {user.user.name} <br/>
                              {(plan === null) ? "Powered by Peckpoint" : ""}
                              </p>
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
          ))}
  </div>
  <Idle></Idle>
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