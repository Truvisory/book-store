import React from 'react';
import CartItemsList from './CartItemsList.js';

const CartModal = (props) => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body row font-weight-bold">
                    <p className="col-7">Book Title</p>
                    <p className="col-3">Quantity</p>
                    <p className="col-2">Price</p>
                </div>
                <CartItemsList orderList={props.orderList} />
                <p className="text-right font-weight-bold" style={{marginRight: "15px"}}>Total ${props.total}</p><br/>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartModal





