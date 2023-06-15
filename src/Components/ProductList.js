import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../store/products'
import { addItem, removeItem } from '../store/cart';
import Product from './Product';

const ProductList = () => {
  const { products } = useSelector(state => state);
  const { term } = useParams();
  const dispatch = useDispatch();

  console.log(products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  const productsList = products
    .filter(product => !term || product.name.includes(term))
    .map((product) => {
      return (
        <Product key={product.id} obj={product} />
      )
    })
    

  return (
    <div>
      <h1>Products</h1>
      {productsList}
    </div>
  );
};

export default ProductList;
