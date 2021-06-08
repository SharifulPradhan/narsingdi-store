import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from './redux/actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('err', err);
      });
    dispatch(setProducts(response.data));
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);
  console.log("[products:}", products);
  return (
    <div className='container '>
      <div className='row d-flex justify-content-center align-items-center mt-5'>
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;