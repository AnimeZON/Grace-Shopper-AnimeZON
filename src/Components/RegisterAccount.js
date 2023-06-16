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
                  value={data.username}
                  type='text'
                  onChange={(e) => setData({ ...data, username: e.target.value })}
                  />

                  <label for='email'>Email</label>
                  <input
                  className='register__input'
                  value={data.email}
                  type='text'
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  />

                  <label for='password'>Password</label>
                  <input
                  className='register__input'
                  value={data.password}
                  type='text'
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  />
                </div>

                <br />
                
                <h2 className='register__title'>Address</h2> <br /><br />
                <div className='register__address'>
                    
                    <div className='register__input__container'>
                      <label>Full name (First and Last name)</label>
                      <input className='register__input' value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })} />
                    </div>
                    <div className='register__input__container'>
                      <label>Phone Number</label>
                      <input className='register__input' value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
                    </div>
                    <div className='register__input__container'>
                      <label>Address</label>
                      <input className='register__input' value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />
                    </div>
                    <div className='register__input__container'>
                      <label>City</label>
                      <input className='register__input' value={data.city} onChange={(e) => setData({ ...data, city: e.target.value })} />
                    </div>
                    <div className='register__input__container'>
                      <label>State</label>
                      <input className='register__input' value={data.contState} onChange={(e) => setData({ ...data, contState: e.target.value })} />
                    </div>
                    <div className='register__input__container'>
                      <label>ZIP Code</label>
                      <input className='register__input' value={data.zip} onChange={(e) => setData({ ...data, zip: e.target.value })} />
                    </div>
                </div>
                
                <div className='button__container'>
                  <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterAccount;