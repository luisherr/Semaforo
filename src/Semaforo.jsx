import React from 'react'

const [active, setActive ] = useState('green')


useEffect(() => {
  const intervalo = setInterval((prevFoco) => {
    setActive(() => {
      switch(prevFoco) {
        case 'green': 
          return 'green';
        case 'yellow':
          return 'yellow';
        default:
          return 'red'; 
      }
    },)
  }, 2000)
}, [])

const Semaforo = () => {
  return (
    <div> Semaforo </div>
  )
}

export default Semaforo