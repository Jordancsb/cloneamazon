import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';


function Header() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
        <Link to="/">
        <img 
            className ='logo--header' 
            src = "https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
            alt ="Logo" 
        />
        </Link>
        <div
        className='search--header'>
        <input
        className='input--header'
        type='text'/>
        <SearchIcon className='icon--search'/>
        </div>
        <div className='nav--header'>
            <div className='option--header'>
                <span className='option1'> Hello </span>
                <span className='option2'> Sign </span>
            </div>
            <div className='option--header'>
                <span className='option1'> Returns </span>
                <span className='option2'> Orders </span>
            </div>
            <div className='option--header'>
                <span className='option1'> Your </span>
                <span className='option2'> Prime </span>
            </div>

            <Link to="/checkout">
            <div className='cart--header'>
                <ShoppingBasketIcon />
                <span 
                    className='option2 option--cart'> 
                    {basket?.length} 
                </span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header