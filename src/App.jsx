
import './App.css';
import DigitalClock from './components/DigitalClock/DigitalClock';
import CuentaAtras from './components/CuentaAtras/CuentaAtras'; 
import Crono from './components/Crono/Crono';

function App() {

  return (

    <div className="App">
      <h1 style={{color: 'white'}}> Welcome ⏱️ </h1>
      <DigitalClock /> 

      <h2 style={{color: 'white', marginTop: '60px'}}> Queda ...  🔋⌛ </h2>
      <CuentaAtras /> 

      <h2 style={{color: 'white', marginTop: '60px', width: '100%', justifyContent: 'center'}}> 🏊‍♀️ ¿¿¿ Spring de 100 m ??? 🏊‍♂️</h2>
      <Crono />
      
    </div>
    
  );

}

export default App;
