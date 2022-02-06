import React, {useState, useEffect} from 'react';
import './styles.css'; 

const CuentaAtras = () => {

    const [time, setTime] = useState(""); 

    useEffect(() => {

        //definimos fecha, pero ojo, la fecha debe ser mayor a la que estás ahora mismo
        let cuentaAtrasDia = new Date ( 'Mar 31, 2022 00:00:00').getTime(); 

        //definimos intervalo que será una función la cual tendrá como valor ahora para que tenga su referencia
        let x = setInterval(() => {
            let now = new Date().getTime(); 

            //vamos a defir la variable distancia, la cual definirá que queda de la fecha en petición - el ahora 
            let distance = cuentaAtrasDia - now; 

            //ahora se harán los cálculos entre la fecha y hora fijada con la real de hoy
            // trasnformamos en unidades iguales 
            let days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 

            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
            let seconds = Math.floor((distance % (1000 * 60 )) / (1000)); 

            // concatenamos los resultados, pasándolos de parámetros en la función  setTime
            setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

            // queremos que si la distancia en menor a 0, se resetee, sino que me muestre el conteo hacia atrás 
            if (distance < 0) {
                clearInterval(x); 
                setTime("Finalizada la cuenta atrás"); 
            }

        }, 1000 ); 
    }, []);

  return (
    <div className='countdown'>
        <h2>{time}</h2>
    </div>);
};

export default CuentaAtras;

