import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import ProductList from './ProductList';
import Checkout from './Checkout';
import Cart from './Cart';
import EditAccount from './EditAccount'
import SingleProduct from './SingleProduct'
import RegisterAccount from './RegisterAccount.js';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchProducts } from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Search from './Search';

const App = () => {
  const { auth, products } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(loginWithToken());
  }, []);

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchCart());
    }
  }, [auth]);
  return (
    <div>
      <div>
        <Navbar />
      </div>

      {
        auth.id ? (
          <div>
            <Routes>
              <Route path='/editAccount' element={<EditAccount />} />
            </Routes>
          </div>
        ) : null
      }

      <div>
        <Routes>
        <Route path='/' element={<Search />} />
        </Routes>

        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/register' element={<RegisterAccount />} />

        </Routes>
      </div>
    </div>

  );
};

export default App;
