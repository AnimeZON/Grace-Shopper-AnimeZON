import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { loginWithToken } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { use } from 'chai';
import Login from './Login';
import App from './App';
import { fetchCart, fetchProducts } from '../store'

const Navbar = () => {
  const dispatch = useDispatch();
  const {auth} = useSelector(state => state);
  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  useEffect(()=> {
    if(auth.id){
      dispatch(fetchCart());
    }
  }, [auth]);
  return (

    <div className='navbar'>
      {/* Home button clicking the image or text AnimeZon will take user to home page */}
      <nav>
      <Link to='/'>
        <div className="home_logo">
          AnimeZon
        </div>          
      </Link>

      <div className='nav_search'>
        <input type='text' />
      </div>
      
      <div className='nav_user'>

        <div className='nav_option'>
          <Link to='/login'>
            <span>
              Hello {!auth.username ? "Guest " : auth.email}
            </span><br />
            <span>
              {auth.username ? "Sign Out" : "Sign In"}
            </span>
          </Link>
                    
        </div>

        <div className='nav_option'>
          <span>Orders</span>
        </div>

        <div className='nav_basket'>
          <Link to='/cart'>
            <span>
              {/* ToDo: add basket image */}
              {/* ToDo: add cart count to basket */}
            </span>
          </Link>
        </div>

      </div>      
      </nav>
    </div>
      

    // <div>
    //   <nav>
    //     <Link to='/'>Animezon</Link>
    //     <input type='text' placeholder="Search Animezon"></input>
    //     <Link to='/login'>
    //       <button type='button'>
    //         <span>
    //           Hello {!auth.username ? "Guest" : auth.email}
    //         </span>
    //         <span>
    //           {auth.username ? "Sign Out" : "Sign In"}
    //         </span>
    //       </button>
    //     </Link>
    //   </nav>
    // </div>
  )
}

export default Navbar