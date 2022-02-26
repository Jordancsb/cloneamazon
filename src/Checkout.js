import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='check--left'>
            <img 
            className='check--add' 
            src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'
            alt=''
            />
            <h1 className='check--title'>
            Seu carrinho de compras!  
            </h1>
        </div>

        <div>
            {/* Basket Item */}
            {/* Basket Item */}
            {/* Basket Item */}
            {/* Basket Item */}
            
          <div className='check--right'>
             <Subtotal/>
          </div>
        </div>
    </div>
  )
}

export default Checkout