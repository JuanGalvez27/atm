import './Header.css'
import logo from '../media/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='bank-name'>
        Banco Bárbaros
        <div className='bank-logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
      <div className='info'>
        <div>Mi cuenta</div>
        <div>Acerca de mí</div>
        <div>Donaciones</div>
      </div>
    </header>
  )
}

export default Header