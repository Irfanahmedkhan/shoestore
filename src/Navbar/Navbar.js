import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";


function Navbar() {
    return (
        <div className='navbar'>
            <Link className='link' to="/" ><h3>Home</h3></Link>
            <Link className='link' to="/Products" ><h3>Products</h3></Link>
            <Link className='link' to="/About" ><h3>About</h3></Link>

            <AddShoppingCartIcon style={{ marginTop: 10}} />

            
        </div>
    )
}

export default Navbar
