import { useIdleTimer } from 'react-idle-timer'
import React from 'react'

function UserTimeout() {
    const IdleTimer = useIdleTimer({
        crossTab: true
      })

    const onIdle = () => {
        console.log('user is idle')
    }
  return (
      <div>
    <IdleTimer 
    crossTab 
    ref={IdleTimer} 
    timeout={5 * 1000} 
    onIdle={onIdle}></IdleTimer>
    </div>
  )
}

export default UserTimeout