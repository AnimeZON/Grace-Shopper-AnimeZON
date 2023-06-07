import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../store/user';

const EditAccount = () => {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();

    const [username, setUsername] = useState(auth.username);
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState(auth.address);
    const [payment, setPayment] = useState(auth.payment);
    const [email, setEmail] = useState(auth.email);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(updateUser({username,password,address,payment,email}))
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Account Info</h2>
                <label>Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />

                <h2>Edit Payment</h2>
                <label>Payment</label>
                <input value={payment} onChange={(e) => setPayment(e.target.value)} />

                <h2>Edit Address</h2>
                <label>Country/Region</label>
                <input></input>
                <label>Full name (First and Last name)</label>
                <input></input>
                <label>Phone Number</label>
                <input></input>
                <label>Address</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} />
                <label>City</label>
                <input></input>
                <label>State</label>
                <input></input>
                <label>ZIP Code</label>
                <input></input>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default EditAccount;