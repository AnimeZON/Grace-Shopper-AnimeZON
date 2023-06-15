import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateSingleProduct } from '../store/products';
import { addItem } from '../store/cart';
import Product from './Product';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  const { auth, products, reviews } = useSelector(state => state);

  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1)

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

  const addToCart = () => {
    const product = item;
    dispatch(addItem({product, quantity}));
  }

  return (
    auth.isAdmin ? (
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
      </form>)
      : ( // NON ADMIN VIEW
        <div>
            <Product key={item.id} obj={item} rev={reviews}/>
        </div>
      )
  );
};

export default SingleProduct;
