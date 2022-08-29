import React from 'react'
import './MainScreen.css'
import { useState } from 'react'
import { ATM } from '../../../core/model/atm.js'
import Retiro from '../../components/Retiro/Retiro'
import Deposito from '../../components/Deposito/Deposito'


const cajero = new ATM(parseInt(prompt('Indique su saldo:')));

const MainScreen = () => {
  const [response, setResponse] = useState ('Bienvenido a Banco Bárbaros, ¿qué desea hacer, su majestad?');
  const [monstrarRetiro, setMostrarRetiro] = useState(false);
  const [mostrarDeposito, setMostrarDeposito] = useState(false);

  const handleBotonRetiro = () => {
    setMostrarRetiro(current => !current);
  }
  const handleBotonDeposito = () => {
    setMostrarDeposito(current => !current);
  }

  

  return (
    <div className='main-screen'>
      <div className='buttons-container'>
        <button className='button' onClick={() => {
          setResponse(cajero.saldo)
          }} >Consulta de saldo
        </button>

        <button className='button' onClick={handleBotonRetiro}> Retiro </button>
      
        <button className='button' onClick={handleBotonDeposito}>
          Depósito de efectivo
        </button>
        <button className='button'>Salir</button>
      </div>

      <div className='logs'>
        <p>{response}</p> <br />
        {monstrarRetiro ? <Retiro cajero={cajero} setMostrarRetiro={setMostrarRetiro} setResponse={setResponse} /> : '' }
        {mostrarDeposito ? <Deposito cajero={cajero} setMostrarDeposito={setMostrarDeposito} setResponse={setResponse} /> : '' }
      </div>
    </div>
  )
}           

export default MainScreen