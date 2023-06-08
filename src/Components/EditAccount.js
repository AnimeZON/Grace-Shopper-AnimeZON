import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../store/user';

const EditAccount = () => {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();

    const [username, setUsername] = useState(auth.username);
    // const [password, setPassword] = useState(auth.id);
    const [address, setAddress] = useState(auth.address);
    const [payment, setPayment] = useState(auth.payment);
    const [email, setEmail] = useState(auth.email);
    const [country, setCountry] = useState(auth.country);
    const [fullName, setFullName] = useState(auth.fullName);
    const [phone, setPhone] = useState(auth.phone);
    const [city, setCity] = useState(auth.city);
    const [contState, setContState] = useState(auth.contState);
    const [zip, setZip] = useState(auth.zip);

    const handleSubmit = (evt) => {
        evt.preventDefault();
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
        const id = auth.id
        dispatch(updateUser({data, id}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Account Info</h2>
                <label>Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} />
                {/* <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />

                <h2>Edit Payment</h2>
                <label>Payment</label>
                <input value={payment} onChange={(e) => setPayment(e.target.value)} />

                <h2>Edit Address</h2>
                <label>Country/Region</label>
                <input value={country} onChange={(e) => setCountry(e.target.value)} />
                <label>Full name (First and Last name)</label>
                <input value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                <label>Phone Number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label>Address</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} />
                <label>City</label>
                <input value={city} onChange={(e) => setCity(e.target.value)}/>
                <label>State</label>
                <input value={contState} onChange={(e) => setContState(e.target.value)}/>
                <label>ZIP Code</label>
                <input value={zip} onChange={(e) => setZip(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditAccount;