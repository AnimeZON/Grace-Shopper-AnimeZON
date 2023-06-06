import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { updateProduct } from '../src/store';
import { useParams , Link} from 'react-router-dom';

const SingleProduct = ()=> {
  const { product } = useSelector(state => state);
  const { id } = useParams();

  const singleProduct = product.find( singleProduct => singleProduct.id === id*1);
  //be defensive!!
  if(!singleProduct){
    return null;
  }

  return (
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
            Qty
        </div>
        <div>
            Free shipping on US orders. Estimated delivery 10 business days.
        </div>
            <Link to='/'> Back </Link>
      </div>
    </div>
  );
};

export default SingleProduct;