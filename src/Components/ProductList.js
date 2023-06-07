import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductList = ()=> {
  const { products } = useSelector(state => state);
  // const dispatch = useDispatch();

  const addToCart = async (product) => {
    try {
      await User.addToCart({ product, quantity: 1 });
    } catch (error) {
    }
  };

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
        <Link to={`/product/${product.id}`}> {product.name} </Link>
        <p> {product.price} </p>
        
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
)})}
    </div>
    </div>
  );
};

export default ProductList;