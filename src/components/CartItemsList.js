import React from 'react';

const CartItemsList = (props) => {
  return (
    props.orderList.map( (cart, idx) => 
        <div className="modal-body row" key={idx}>
            <p className="col-7">{cart.bookTitle}</p>
            <p className="col-3">{cart.quantity}</p>
            <p className="col-2">${cart.subTotal}</p>
        </div>    
    )        
  )
}

export default CartItemsList