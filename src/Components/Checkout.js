import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";
import { Link } from "react-router-dom";
import { fetchCart } from "../store";

const Checkout = () => {
  const { auth, user, cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const total = [];

  return !user ? (
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
  ) : (
    <div className="checkoutCart">
      <h1>Checkout</h1>
      <div>
        {cart.lineItems.map((lineItem) => {
          return (
            <div>
              <img
                src={lineItem.product.image}
                alt={lineItem.product.name}
                style={{ width: "20%", height: "auto" }}
              />

              {`(${lineItem.quantity})`}
              <Link to={`/product/${lineItem.product.id}`}>
                {" "}
                {lineItem.product.name}{" "}
              </Link>
              {lineItem.product.price}
              {total.push(lineItem.quantity * lineItem.product.price)}
            </div>
          );
        })}
      </div>
      <hr />
      <p> Total USD </p>
      ${total.reduce((acc, curr) => acc + curr, 0)}
    </div>
  );
};
export default Checkout;
