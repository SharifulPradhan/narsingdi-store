import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './ProductDetail.css'
import { selectedProducts } from './redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product)
  const {productId} = useParams();
  const dispatch = useDispatch();
  const {id, image, title, description, category, price} = product;

  const fetchProductDetail = async () => {
    const response = await axios
    .get (`https://fakestoreapi.com/products/${productId}`)
    .catch((err) => {
      console.log('Err ', err);
    });

    dispatch(selectedProducts(response.data));
  };
  React.useEffect(() => {
    if (productId && productId !== '') fetchProductDetail();
  }, [productId])
  return (
      <div className="container py-4 my-4 mx-auto d-flex flex-column border shadow rounded" key={id}>
        <div className="header">
          <div className="row r1">
            <div className="col-md-9 abc">
              <h1>{title}</h1>
            </div>
            <div className="col-md-3 text-right pqr"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
            <p className="text-right para">{category}</p>
          </div>
        </div>
        <div className="container-body mt-4">
          <div className="row r3">
            <div className="col-md-5 p-0 klo">
              <p className='card-text'>{description}</p>
            </div>
            <div className="col-md-7"> <img src={image} width="50%" height="75%" alt=""/> </div>
            </div>
          </div>
          <div className="footer d-flex flex-column mt-5">
            <div className="row r4">
              <div className="col-md-2 mio offset-md-4"><a href="a" >ADD TO CART</a></div>
              <div className="col-md-2 myt "><button type="button" className="btn btn-outline-warning"><a href="a">BUY NOW</a></button></div>
            </div>
          </div>
        </div>
  );
};

export default ProductDetail;
