import React from 'react'
import './MainScreen.css'

const MainScreen = () => {
  return (
    <div className='main-screen'>
      <div className='buttons-container'>
        <button className='button' >Consulta de saldo</button>
        <button className='button' >Retiro de efectivo</button>
        <button className='button' >Depósito de efectivo</button>
        <button className='button' >Salir</button>
      </div>
      <div className='logs'>
        
      </div>
    </div>
  )
}           

export default MainScreen