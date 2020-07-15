import React from "react";
import {Link, Outlet } from "react-router-dom";
import './Product.css'

function Products() {
  return (

    <div >
       <div className='offer'></div>

      <nav style={{ display: "Flex", color: 'white', justifyContent: "space-evenly", backgroundColor: "rgb(0, 104, 202)" }} >
        <Link style={{color: 'white'}} to="/Products/Men"><h3>Men</h3></Link>
        <Link style={{ color: 'white' }} to="/Products/Women"><h3>Women</h3></Link>


        </nav>
<Outlet />
    </div>
  );
}

export default Products;
