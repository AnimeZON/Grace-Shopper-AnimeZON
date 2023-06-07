import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ProductList = ()=> {
  const { products } = useSelector(state => state);
  // const dispatch = useDispatch();
  return (
    <div className="products">
      <h1>Products</h1>
      <div>
      {products.map((product) => {
        return (
        <div>
        <img 
        src={product.image}
        alt={product.name}
        style={{ width: "50%", height: "auto" }}
        />
        <p>Item Name: {product.name} </p>
        <p>Item Price {product.price} </p>
        <p>{product?.quantity}</p>
        <button>Add to Cart</button>
        </div>
)})}
    </div>
    </div>
  );
};

export default ProductList;