import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../store/products'
import { addItem, removeItem } from '../store/cart';
import Product from './Product';

const ProductList = () => {
  const { products, cart } = useSelector(state => state);
  const { term } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("working")
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div className="products">
      <h1>Products</h1>
      <div>
        {products
          .filter(product => !term || product.name.includes(term))
          .map((product) => {
            return (
              <div>
                <Product key={product.id} obj={product} />
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default ProductList;
