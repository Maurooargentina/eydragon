import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget() {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="badge badge-primary">5</span>
    </div>
  );
}

export default CartWidget;
