import React from 'react'
import { useState, useEffect } from 'react'
import './semaforo.css'

const Semaforo = () => {
  const [active, setActive ] = useState('green')

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
            return 'green';
        }
      })
    }, 2000)
    return () => clearInterval(intervalo);
  }, [])

  return (
    <div className='semaforo'> 
      <div className={`light green ${active === 'green' ? 'active' : 'inactive'}`}>Verde</div>
      <div className={`light yellow ${active === 'yellow' ? 'active' : 'inactive'}`}>Amarillo</div>
      <div className={`light red ${active === 'red' ? 'active' : 'inactive'}`}>Rojo</div>
    </div>
  )
}

export default Semaforo