import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const productCard = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      
        <div class="card ms-3 " style={{ width: '18rem' }} key={id}>
          <Link to={`/product/${id}`} className="nav-link text-dark">
          <img src={image} class="card-img-top" alt={title} style={{ height: '250px' }} />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <h6 class="card-text">{category}</h6>
            <div class="d-flex justify-content-between total font-weight-bold mt-4"><b>Total</b><span>{price}</span></div>
          </div>
          </Link>
        </div>
      
    )
  })
  return <>{productCard}</>
};

export default ProductComponent;