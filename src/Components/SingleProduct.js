import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { updateSingleProduct } from '../store/products';
import { addItem } from '../store/cart';
import { createReview } from '../store';

import Product from './Product';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  const { auth, products, reviews } = useSelector(state => state);

  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1)
  const [score, setScore] = useState(1);

  useEffect(() => {
    const singleProduct = products.find((product) => product.id == id);
    setItem(singleProduct);
  }, [id, dispatch]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = item;
    dispatch(updateSingleProduct({ data, id }));
    navigate('/')
  }

  const addToCart = async () => {
    try {
        dispatch(addItem({ product: item, quantity }));
    } catch (err) {
        console.log(err)
    }
}

const addReview = async () => {
    try {
        dispatch(createReview({ product: item, score }))
    } catch (err) {
        console.log(err);
    }
}

let count = 0;
const averageScore = (reviews.reduce((acc, curr) => {
    if (curr.productId === item.id) {
        count++;
        return acc + curr.score
    } else {
        return acc
    }
}, 0) / count)

  return (
    auth.isAdmin ? (
      <div>
      <div>
            <img src={item.image} alt={item.name} style={{ width: "700px", heigh: "700px" }} />
     </div>

      <form onSubmit={handleSubmit}>
        <div>
          {/* <input value={image} onChange={(e) => setImage(e.target.value)} /> */}
        </div>
        <div>
          <button>Save Changes</button>
        </div>
        <div>
          <div>
            <input value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} />
            <input value={item.price} onChange={(e) => setItem({ ...item, price: e.target.value })} />
            <input value={item.description} onChange={(e) => setItem({ ...item, description: e.target.value })} />
          </div>
        </div>
      </form>
      </div>)
      : ( // NON ADMIN VIEW
        <div className="productPage">

          <div>
            <img src={item.image} alt={item.name} style={{ width: "700px", heigh: "700px" }} />
            </div>

            <div className="productInfo">
            <div className="title">
                {item.name}
            </div>
            <div>
                score: {averageScore.toFixed(2)}/5
                <select value={score} onChange={(e) => setScore(e.target.value * 1)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={() => addReview()}>Submit Review</button>
            </div>
            <div>
                Price: ${item.price}
            </div>
            <div>Description: {item.description}</div>
            </div>

            <div className="checkoutDiv">
            <div>
            Free Shipping on all US orders. Express Shipping 10 business days. Doesn't apply to preorders.
            </div>
            <div>
                Qty:
                <select value={quantity} onChange={(e) => setQuantity(e.target.value * 1)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                </div>
                <div>
                <button onClick={() => addToCart()}>Add To Cart</button>
                </div>
            </div>
        </div>
      )
  );
};

export default SingleProduct;
