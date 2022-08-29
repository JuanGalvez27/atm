import React, { useState } from 'react'
// eslint-disable-next-line
const Deposito = ({ cajero, setResponse, setMostrarDeposito }) => {
  const [valorDeposito, setValorDeposito] = useState(0)

  const handleValorDeposito = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    setValorDeposito(e.target.value)
    setResponse()
  }

  const handleDeposito = (e) => {
    e.preventDefault();
      // eslint-disable-next-line
    cajero.deposito(parseInt(valorDeposito));
    setResponse('Bienvenido a Banco Bárbaros, ¿qué desea hacer, su majestad?')
    setMostrarDeposito(false)
  }

  return (
    <div>
      <form onSubmit={handleDeposito}>
        <label>¿Cuando desea depositar?
          <input onChange={handleValorDeposito}></input>
        </label>
      </form>
    </div>
  )
}

export default Deposito