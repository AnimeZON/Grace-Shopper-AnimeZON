import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ProductList = ()=> {
  const {  } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="products">
      <h1>Products</h1>
      {products.map((product) => {
        product
})}
<img 
src={product.image}
alt={product.name}
style={{ width: "50%", height: "auto" }}
/>
<p>Item Name: {product.name} </p>
<p>Item Price {product.price} </p>
<button>Add to Cart</button>
    </div>
  );
};

export default ProductList;