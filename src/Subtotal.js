import React from 'react';
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';


function Subtotal() {
  return <div className='subtotal'>
    <CurrencyFormat
        renderText={(value) => (
        <>
        <p>
            { /* Part Of the Homework */ }
            Subtotal (0 items): <strong> 0 </strong>
        </p>
        <small className="subtotal--gift">
            <input type="checkbox"/> Cupom de desconto

        </small>
        </>
        )}
        decimalScale={2}
        value={3} /* Part Of the Homework */
        displayType={"text"} 
        thousandSeparator={true}
        prefix={"R$"}
        />

        <button> Proceed to Checkout </button>
    </div>;
  
}

export default Subtotal