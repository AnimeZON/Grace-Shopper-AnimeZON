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
import Orders from './Orders'
import CheckoutButton from './CheckoutButton';
import OrderHistory from './OrderHistory';

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
        <Navbar />
    

      {
        auth.id ? (
          <div className="class1">
            <Routes>
              <Route path='/editAccount' element={<EditAccount />} />
            </Routes>
          </div>
        ) : null
      }

      <div className="class1">
        <Routes>
        <Route path='/search/:term' element={<ProductList />} />
        </Routes>

        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/register' element={<RegisterAccount />} />
          <Route path='/orders/:id' element={<Orders />} />
          <Route path='/checkoutbutton' element={<CheckoutButton />} />
          <Route path='/orderHistory' element={<OrderHistory />} />
        </Routes>
      </div>
    </div>

  );
};

export default App;
