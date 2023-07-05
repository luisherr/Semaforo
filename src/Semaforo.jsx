import React from 'react'
import { useState, useEffect } from 'react'
import './semaforo.css'

const Semaforo = () => {
  const [active, setActive ] = useState('red')

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActive((prevFoco) => {
        switch (prevFoco) {
          case 'red':
            return 'green';
          case 'yellow':
            return 'red';
          case 'green':
            return 'yellow';
          default:
            return 'red';
        }
      })
    }, 2000)
    return () => clearInterval(intervalo);
  }, [])

  return (
    <div className='semaforo'> 
      <div className={`light green ${active === 'green' ? 'active' : ''}`}>1</div>
      <div className={`light yellow ${active === 'yellow' ? 'active' : ''}`}>2</div>
      <div className={`light red ${active === 'red' ? 'active' : ''}`}>3</div>
    </div>
  )
}

export default Semaforo