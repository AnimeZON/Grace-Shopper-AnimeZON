import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct, updateSingleProduct} from '../store/product';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productId = id;
  const quantity = 1;
  let singleProduct = useSelector(state => state.singleProduct)
  const {name, image, price, description } = singleProduct
  console.log("Single Product:", singleProduct)


  useEffect(() => {
    console.log("working")
    dispatch(fetchSingleProduct(productId))
  }, []);
  
  return (
    // auth.isadmin ?   
    // <form>
    //   <div>
    //     <input value={image} onChange={(e) => setImage(e.target.value)} />
    //   </div>
    //   <div>
    //     <button>Save Changes</button>
    //   </div>
    //   <div>
    //     <div>
    //     <input value={name} onChange={(e) => setName(e.target.value)} />
    //     <input value={price} onChange={(e) => setPrice(e.target.value)} />
    //     <input value={description} onChange={(e) => setDescription(e.target.value)} />
    //   </div>
    //     </div>

    // </form> 
    // : // NON ADMIN VIEW
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