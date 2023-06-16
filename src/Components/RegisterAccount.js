import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../store/user';
import { useNavigate } from 'react-router-dom';

const RegisterAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        password: '',
        address: '',
        email: '',
        country: '',
        fullName: '',
        phone: '',
        city: '',
        contState: '',
        zip: ''
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (checkData()) {
            console.log('Fill Form')
        } else {
            dispatch(addUser({ data }));
            navigate('/')
        }
    }

    const checkData = () => {
        let isEmpty = Object.values(data).includes('');
        return isEmpty;
    }

    return (
        <div className='register__container'>
            <form onSubmit={handleSubmit}>
                <h2 className='register__title'>
                    Account Info
                </h2> <br />
                <div className='register__userCred'>
                  <label for='username'>Username</label>
                  <input
                  className='register__input'
                  value={username}
                  type='text'
                  onChange={(e) => setUsername(e.target.value)}
                  />

                  <label for='email'>Email</label>
                  <input
                  className='register__input'
                  value={email}
                  type='text'
                  onChange={(e) => setEmail(e.target.value)}
                  />

                  <label for='password'>Password</label>
                  <input
                  className='register__input'
                  value={password}
                  type='text'
                  onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <br />
                
                <h2 className='register__title'>Address</h2> <br /><br />
                <div className='register__address'>
                    
                    <div className='register__input__container'>
                      <label>Full name (First and Last name)</label>
                      <input className='register__input' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className='register__input__container'>
                      <label>Phone Number</label>
                      <input className='register__input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='register__input__container'>
                      <label>Address</label>
                      <input className='register__input' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className='register__input__container'>
                      <label>City</label>
                      <input className='register__input' value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className='register__input__container'>
                      <label>State</label>
                      <input className='register__input' value={contState} onChange={(e) => setContState(e.target.value)} />
                    </div>
                    <div className='register__input__container'>
                      <label>ZIP Code</label>
                      <input className='register__input' value={zip} onChange={(e) => setZip(e.target.value)} />
                    </div>
                </div>
                
                <div className='button__container'>
                  <button disabled={username == '' || email == '' || password == '' || payment == '' || country == '' || fullName == '' || phone == '' || address == '' || city == '' || contState == '' || zip == ''}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterAccount;