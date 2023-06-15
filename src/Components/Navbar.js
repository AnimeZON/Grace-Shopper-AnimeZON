import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { loginWithToken } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { use } from 'chai';
import Login from './Login';
import App from './App';
import { fetchCart, fetchProducts, logout } from '../store'
import Cart from './Cart'
import Search from './Search';

const Navbar = () => {
  const dispatch = useDispatch();
  const {auth, cart} = useSelector(state => state);
  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  useEffect(()=> {
    if(auth.id){
      dispatch(fetchCart());
    }
  }, [auth, dispatch]);

  //dropdown menu logic
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const count = cart.lineItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0)

  return (
    // <div className='nav'>      
      <nav className='nav'>
        {/* logo */}
        <Link to='/'>
          <div className="nav__logo">
            <h2>AnimeZon</h2>
          </div>          
        </Link>

        {/* search */}
        <div className='nav__search'>
          <Search />
        </div>                        

        {/* toogle user account action */}
        <div className='nav__links'>
          <div >
            <span>
              Hello {!auth.username ? 'Guest ' : auth.email}
            </span>
            <br />
            <p onClick={toggleDropdown}>Account</p>

            {isOpen && (
              <>
                {/* Drop down User actions */}
                {/* Login or signout */}
                <div className="dropdown-content">
                  <Link to='/login' onClick={() => dispatch(logout())}>
                    <button onClick={() => dispatch(logout())}>
                      {auth.username ? 'Sign Out' : 'Sign In'}
                    </button>
                  </Link><br /><br />
                  {!auth.username && (
                    <Link to='/register'>
                      <sub>Click here to register</sub>
                    </Link>   
                  )}
                </div>
                {/* if user is auth, show edit account and order history */}
                {auth.username && (
                  <div>
                    <Link to='/editAccount'>Edit Account</Link><br />
                    <Link to='/orderHistory'>Order History</Link>
                  </div>
                )}
              </>
            )}        
          </div>
        </div>    

        {/* Link to cart and display count  */}
        <div className='nav_basket'>
          <Link to='/cart'>
            <span>cart ({ count })
              {/* ToDo: add basket image */}
              {/* ToDo: add cart count to basket */}
            </span>
          </Link>
        </div>        
            
                      
      </nav>
    // </div>
      

  )
}

export default Navbar