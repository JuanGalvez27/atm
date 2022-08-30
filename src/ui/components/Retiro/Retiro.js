import React from 'react'
import { useState } from 'react';

// eslint-disable-next-line
const Retiro = ({ cajero, setMostrarRetiro, setResponse }) => {
  const[valorRetiro, setValorRetiro] = useState(0);
  // eslint-disable-next-line
  console.log(cajero.saldo)

  const handleValorRetiro = (e) => {
    e.preventDefault()
    setValorRetiro(e.target.value)
  }

  const handleRetiro = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    if(valorRetiro > cajero.saldo){
      setResponse('Saldo insuficiente')
    } else {
      // eslint-disable-next-line
      cajero.retiro(parseInt(valorRetiro));
      setResponse('Bienvenido a Banco Bárbaros, ¿qué desea hacer, su majestad?')
      setMostrarRetiro(false)
    }
    

  }

  return (
    <form onSubmit={handleRetiro}>
      <label>¿Cuánto desea retirar?</label>
      <input type='number' onChange={handleValorRetiro}></input>
    </form>
  )
}


export default Retiro