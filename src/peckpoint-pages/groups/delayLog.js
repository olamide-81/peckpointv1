import { useEffect } from 'react'
// import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

  const delayLog = () => {

    const initDelay = 1000 * 60 * .1  //6 secs
    const delay = 1000 * 60 * .2 //12 secs
    let idleEvent
    let delayEvent

    // you can add other relevant events here
    const events = [
      'mousemove',
      'load',
      'click',
      'keypress'
    ]

    const logOut = () => {
      localStorage.removeItem('user')
      
      window.location = '/login'
    }

    const delayTimer = () => {
      if (!!idleEvent) clearTimeout(idleEvent)
      if (!!delayEvent) clearTimeout(delayEvent)

      idleEvent = setTimeout(() => toast.info('You may be Logged Out Due to Inactivity'), initDelay) 
      delayEvent = setTimeout(() => {
        logOut()
      }, delay)
    }

    useEffect(() => {
      for (const e in events) {
        window.addEventListener(events[e], delayTimer)
      }
    }, [])
}


export { delayLog }