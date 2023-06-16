import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../store/user';
import { useNavigate } from 'react-router-dom';

const RegisterAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [payment, setPayment] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [contState, setContState] = useState('');
    const [zip, setZip] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const data = {
            username,
            password,
            address,
            payment,
            email,
            country,
            fullName,
            phone,
            city,
            contState,
            zip
        };

        dispatch(addUser({ data }));
        navigate('/')
    }

    return (
        <div className='register__container'>
            <form onSubmit={handleSubmit}>
                <h2 className='register__title'>
                    Account Info
                </h2> <br />
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

                <br />
                
                <div className='register__address'>
                    <h2 className='register__title'>Address</h2> <br /><br />
                    <label>Country/Region</label>
                    <input className='register__input' value={country} onChange={(e) => setCountry(e.target.value)} />
                    <label>Full name (First and Last name)</label>
                    <input className='register__input' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <label>Phone Number</label>
                    <input className='register__input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label>Address</label>
                    <input className='register__input' value={address} onChange={(e) => setAddress(e.target.value)} />
                    <label>City</label>
                    <input className='register__input' value={city} onChange={(e) => setCity(e.target.value)} />
                    <label>State</label>
                    <input className='register__input' value={contState} onChange={(e) => setContState(e.target.value)} />
                    <label>ZIP Code</label>
                    <input className='register__input' value={zip} onChange={(e) => setZip(e.target.value)} />
                </div>
                
                
                <button disabled={username == '' || email == '' || password == '' || payment == '' || country == '' || fullName == '' || phone == '' || address == '' || city == '' || contState == '' || zip == ''}>Submit</button>
            </form>
        </div>
    )
}

export default RegisterAccount;