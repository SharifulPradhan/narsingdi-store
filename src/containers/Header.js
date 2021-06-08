import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container-fluid'>
      <div >
        <Link to='/' className="nav nav-link text-white bg-dark"><h1>NARSINGDI STORE</h1></Link>
      </div>
    </div>
  );
};

export default Header;