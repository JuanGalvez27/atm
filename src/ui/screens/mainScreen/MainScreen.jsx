import React from 'react'
import './MainScreen.css'
import { useState } from 'react'
import { ATM } from '../../../core/model/atm.js'
import Retiro from '../../components/Retiro/Retiro'


const cajero = new ATM(parseInt(prompt('Indique su saldo:')));

const MainScreen = () => {
  const [response, setResponse] = useState ('Bienvenido a Banco Bárbaros, ¿qué desea hacer, su majestad?');
  const [retiro, setRetiro] = useState(false);

  const handleRetiroButton = () => {
    setRetiro(current => !current)
  }

  // const handleRetiro = (e) => {
  //   e.preventDefault();
  //   setRetiro(e.target.value)
  // }

  return (
    <div className='main-screen'>
      <div className='buttons-container'>
        <button className='button' onClick={() => {

          setResponse(cajero.saldo)
          }} >Consulta de saldo</button>
        <button className='button' onClick={handleRetiroButton}>Retiro de efectivo</button>
        <button className='button' onClick={() =>{
          cajero.deposito(200)
          setResponse(cajero.saldo)
        }}>Depósito de efectivo</button>
        <button className='button' onClick={() => 
          window.close()
        }>Salir</button>
      </div>
      <div className='logs'>
        {retiro ? <Retiro /> : ''}
        <p>{response}</p>
        {/* <p>{cajero.saldo}</p> */}
        
      </div>
    </div>
  )
}           

export default MainScreen