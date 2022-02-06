import React, { useState, useEffect } from 'react';
import './styles.css'; 

const Crono = () => {

    // definimos los useStates, uno a 0 que comience el cronómtetro y el otro en false, para que cuando accione botón, sea true y comience 
    const [ time, setTime] = useState(0); 
    const [ timerOn, setTimerOn] = useState(false); 

    // damos vida a los botones con useEffect 
    useEffect(() => {

        let interval = null; 

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10); 
            }, 10);
        } else if (setTimerOn) {
            clearInterval(interval); 
        }

        return () => clearInterval(interval); 
    }, [timerOn]); 

                // configurado nuestro useEffect con una variable interval inicializada en null .
                // Gracias a un condicional vamos a hacer que, si el timerOn está corriendo ( true ), nos
                // almacene el valor del tiempo cada 10 milisegundos . Con el método de JavaScript
                // setInterval() nos va a ejecutar este proceso cada 10 milisegundos y va a almacenar el
                // tiempo obtenido en la variable time + 10 milisegundos de diferencia.
                // Esta operación nos permitirá igualar el resultado obtenido con el "delay" del intervalo.
                // Por otra parte, en el condicional tenemos el else para que si timerOn no está corriendo
                // nos iguale de nuevo interval a null . También es conveniente despejar esta operación
                // a través del método clearInterval() dentro del return , así nos aseguraremos de que
                // esta operación se detiene por completo una vez dejemos de utilizar la aplicación.

  return (
  <div className='stopwatch'>
        {/* <h2 style={{color: "black"}}>{time}</h2> */}
        {/* usaramos la misma variable time, pero con 3 span, par aorganizar y quitar los extas, que se parezca a un crono real */}

        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>

{/* creo div de botones, para crear lógica de funcionamiento */}
        <div id="buttons">

        { !timerOn && time === 0 && (
            <button onClick={() => setTimerOn(true)}>Start ⏱️</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop ⛔</button>}
        {!timerOn && time > 0 && (
            <button onClick={() => setTimerOn(true)}>Resume 👀</button>
        )}
        {!timerOn && time > 0 && (
            <button onClick={() => setTime(0)}>Reset ❌</button>
        )}
        </div>

  </div>
  );
};

export default Crono;
