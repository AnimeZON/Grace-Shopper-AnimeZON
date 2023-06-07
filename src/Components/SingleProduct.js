import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { updateProduct } from '../src/store';
import { useParams , Link} from 'react-router-dom';

const SingleProduct = ()=> {
  const { product } = useSelector(state => state);
  const { id } = useParams();
  const { auth } = useSelector(state => state);

  const singleProduct = product.find( singleProduct => singleProduct.id === id);
  //be defensive!!
  if(!singleProduct){
    return null;
  }

  let qty = 1;

  const [image, setImage] = useState(singleProduct.image);
  const [name, setName] = useState(singleProduct.name);
  const [description, setDescription] = useState(singleProduct.description);
  const [price, setPrice] = useState(singleProduct.price);
  const [quantity, setQuantity] = useState(qty);

  return (
    auth.isadmin ?   
    <form>
      <div>
        <input value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div>
        <button>Save Changes</button>
      </div>
      <div>
        <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
        </div>

    </form> 
    : // NON ADMIN VIEW
      <div>
        <div>
          <img src={singleProduct.image}/>
        </div>
        <div>
          <div>
              { singleProduct.name }
          </div>
          <div>
              { singleProduct.description }
          </div>
        </div>
        <div>
          <div>
              { singleProduct.price }
          </div>
          <div>
              Free shipping on US orders. Estimated delivery 10 business days.
          </div>
          <div>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
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
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
  );
};

export default SingleProduct;