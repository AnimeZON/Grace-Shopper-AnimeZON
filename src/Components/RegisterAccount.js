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
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Account Info</h2>
                <label>Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} />

                <h2>Payment Info</h2>
                <label>Payment</label>
                <input value={payment} onChange={(e) => setPayment(e.target.value)} />

                <h2>Address</h2>
                <label>Country/Region</label>
                <input value={country} onChange={(e) => setCountry(e.target.value)} />
                <label>Full name (First and Last name)</label>
                <input value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <label>Phone Number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label>Address</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} />
                <label>City</label>
                <input value={city} onChange={(e) => setCity(e.target.value)} />
                <label>State</label>
                <input value={contState} onChange={(e) => setContState(e.target.value)} />
                <label>ZIP Code</label>
                <input value={zip} onChange={(e) => setZip(e.target.value)} />
                <button disabled={username == '' || email == '' || password == '' || payment == '' || country == '' || fullName == '' || phone == '' || address == '' || city == '' || contState == '' || zip == ''}>Submit</button>
            </form>
        </div>
    )
}

export default RegisterAccount;