import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{greeting}</h2>
          <h4>Lentes</h4>
          <h4>Buzos</h4>
          <h4>Remeras</h4>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
