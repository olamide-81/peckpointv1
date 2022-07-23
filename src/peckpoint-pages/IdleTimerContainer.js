import {React, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import { toast } from 'react-toastify'
// ** React Imports
import { Link, useHistory } from 'react-router-dom'


function IdleTimerContainer() {
  
  const history = useHistory()

  const logout = () => {
    history.push('/login')
    localStorage.clear()
  }


    const idleTimerRef = useRef(null)
    const onIdle = () => {
        toast.warning('Session Timeout')
        logout()
    }
  return (
    <div>
        <IdleTimer ref={idleTimerRef} timeout={420 * 1000 } onIdle={onIdle}></IdleTimer>
    </div>
  )
}

export default IdleTimerContainer