import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { auth, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [firstName, setFirstName] = useState(auth.firstName);
  // const [lastName, setLastName] = useState(auth.lastName);
  // const [address, setAddress] = useState(auth.address);
  // const [payment, setPayment] = useState(auth.payment);
  // const [email, setEmail] = useState(auth.email);
  // const [country, setCountry] = useState(auth.country);
  // const [fullName, setFullName] = useState(auth.fullName);
  // const [phone, setPhone] = useState(auth.phone);
  // const [city, setCity] = useState(auth.city);
  // const [contState, setContState] = useState(auth.contState);
  // const [zip, setZip] = useState(auth.zip);

  // const handleSubmit = (evt) => {
  //     evt.preventDefault();
  //     const data = {
  //       firstName,
  //       lastName,
  //         username,
  //         address,
  //         payment,
  //         email,
  //         country,
  //         fullName,
  //         phone,
  //         city,
  //         contState,
  //         zip
  //     };
  //     const id = auth.id
  //     dispatch(updateUser({data, id}));
  // }


  return (
    !user ? (
    <div>
      <p>Payment</p>
      <form>
        <p>Express checkout</p>
        <hr />
        <p>Already have account?</p>
        <Link className="login">Log in</Link>
        Contact Information
        <input name="email" defaultValue="Email" />
        <select name="country" defaultvalue="country">
          {" "}
          <option>Country</option>
        </select>
        <input name="firstName" defaultValue="First Name" />
        <input name="lastName" defaultValue="Last Name" />
        <input name="address" defaultValue="Address" />
        <input
          name="apartment"
          defaultValue="Apartment, suite, etc (optional)"
        />
        <input name="city" defaultValue="City" />
        <select name="state" defaultvalue="state">
          {" "}
          <option>State</option>
        </select>
        <input name="phone" defaultValue="Phone" />
        <Link className="returnToCart">Return to cart</Link>
        <button>Continue to shipping</button>
      </form>
      </div>
      ) :
      <div className="checkoutCart">
        <p>import cart here</p>
    </div>
  );
};

export default Checkout;
