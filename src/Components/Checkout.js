import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";
import { Link } from "react-router-dom";

const Checkout = () => {
  const {} = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
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
      <div className="checkoutCart">
        <p>import cart here</p>
      </div>
    </div>
  );
};

export default Checkout;
