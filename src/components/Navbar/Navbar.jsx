import React, {useContext, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false);


  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch(event.target.value){
      case "usd":
        setCurrency({name: "usd", symbol: "$"})
        break;
      case "eur":
        setCurrency({name: "eur", symbol: "€"})
        break;
      case "inr":
        setCurrency({name: "inr",symbol: "₹"})
        break;
      default:
        setCurrency({name: "usd",symbol: "$"})
    }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt="Logo" className='logo' />
      </Link>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/features'}><li>Features</li></Link>
        <Link to={'/pricing'}><li>Pricing</li></Link>
        <Link to={'/contact'}><li>Contact</li></Link>
        
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button onClick={()=>setShowLogin(true)}>Sign up </button>
      </div>
    </div>
  )
}

export default Navbar
