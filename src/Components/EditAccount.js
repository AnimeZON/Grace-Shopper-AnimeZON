import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../store/user';
import { logout } from '../store';
import { useNavigate } from 'react-router-dom';

const EditAccount = () => {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState(auth.username);
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState(auth.address);
    const [payment, setPayment] = useState(auth.payment);
    const [email, setEmail] = useState(auth.email);
    const [country, setCountry] = useState(auth.country);
    const [fullName, setFullName] = useState(auth.fullName);
    const [phone, setPhone] = useState(auth.phone);
    const [city, setCity] = useState(auth.city);
    const [contState, setContState] = useState(auth.contState);
    const [zip, setZip] = useState(auth.zip);
    const [passwordChange, setPasswordChange] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const id = auth.id
        if (passwordChange) {
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
            dispatch(updateUser({ data, id }));
        } else {
            const data = {
                username,
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
            dispatch(updateUser({ data, id }));
        }
        dispatch(logout())
        navigate('/')
    }

    return (
        <div className="editAccount">
            <form onSubmit={handleSubmit}>
                <h3>Edit Account Info</h3>
                <label>Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                {
                    passwordChange ? (
                        <div>
                            <label>Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={() => {
                                setPasswordChange(false)
                                setPassword('')
                            }}>Cancel</button>
                        </div>
                    ) : (
                        <button onClick={() => setPasswordChange(true)}>Change Password</button>
                    )
                }

                <h3>Edit Payment</h3>
                <label>Payment</label>
                <input value={payment} onChange={(e) => setPayment(e.target.value)} />

                <h3>Edit Address</h3>
                {/* <label>Country/Region</label> */}
                <div className="editAddress">
                {/* <input value={country} onChange={(e) => setCountry(e.target.value)} /> */}
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
                <button disabled={passwordChange && password == ''}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditAccount;