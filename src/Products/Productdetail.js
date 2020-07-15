import React from 'react'
import {useParams} from 'react-router-dom'
import Shoes from './Shoes.json'
import { Button } from "@material-ui/core";
import './Productdetail.css'

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Productdetail() {
    const {id} = useParams ()
    const shoe = Shoes[id]

    if (!shoe)
    return <h2> Product Not Found</h2>

    return (
        <div className = 'detail'>
            <div className="menshoes">
                <h3>{shoe.name}</h3>
                <div className="img">
                    <img src={shoe.img} alt='shoe' />
                </div>

                <div className="text">
                    <h4> Price : ${shoe.price}</h4>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<AddShoppingCartIcon />}
                        fullWidth
                    >
                        Add to cart
                </Button>
                <h2>Details.........</h2>
                </div>
            </div>
        </div>
    )
}

export default Productdetail
