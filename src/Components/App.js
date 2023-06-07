import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import ProductList from './ProductList';
import Cart from './Cart';
import EditAccount from './EditAccount'
import SingleProduct from './SingleProduct'
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchProducts } from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

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
            <Home />
            <Routes>
              <Route path='/editAccount' element={<EditAccount />} />
            </Routes>
          </div>
        ) : null
      }

      <div>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>

  );
};

export default App;
