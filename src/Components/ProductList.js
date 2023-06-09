import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/products'
import { addItem } from '../store/cart';

const ProductList = () => {
  const { products } = useSelector(state => state);
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();

  const addToCart = async (product) => {
    try {
      dispatch(addItem({ product, quantity}))
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    console.log("working")
    dispatch(fetchProducts())
  }, []);

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
          )
        })}
      </div>
    </div>
  );
};

export default ProductList;