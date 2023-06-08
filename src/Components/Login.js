import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = ()=> {
  const {auth} = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const onChange = ev => {
    setCredentials({...credentials, [ ev.target.name ]: ev.target.value });
  };

  const login = async(ev)=> {
    ev.preventDefault();
    try {
      dispatch(attemptLogin(credentials));
      navigate('/')
    
    } catch(err) {
      console.log(err)
    }
   
    
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={ login }>
        <input
          placeholder='username'
          value = { credentials.username }
          name = 'username'
          onChange = { onChange }
          />
        <input
          placeholder='password'
          type='password'
          name = 'password'
          value={ credentials.password }
          onChange = { onChange }
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
