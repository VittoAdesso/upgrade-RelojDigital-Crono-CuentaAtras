// impporto usestate y use efect para que me de la hora y me la vaya cambiando
import React, {useState, useEffect} from 'react'; 
import './style.css'; 

const DigitalClock = () => {

  //comienzo definiendo primero usestate y luego defino el use efect que le dire´cada cuanto cambia la hora 
    const [clockState, setClockState] = useState(); 

    useEffect(() => {

      setInterval(() => {

        const date = new Date(); 
        setClockState(date.toLocaleTimeString());
// cada segundo que actualice
    }, 1000); 
//devuelve datos en array vacío
}, []); 

  return (
  <div className='digital-clock'>
  
  {/* muestra el valor de la variable de estado */}

 
      <h2>{clockState}</h2>
  </div>
  );
};

export default DigitalClock;
