import React from "react";
import './Men.css'

import Shoes from "./Shoes.json";

import { Button } from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";



function Productindex() {
    return (
        <div className='men'>
            {Object.keys(Shoes).map((key) => {
                const shoes = Shoes[key];
                return (
                    <div className='menshoes' key={key}>
                        <h3>{shoes.name}</h3>
                        <div className='img'><img src={shoes.img} alt={key} /></div>

                        <div className='text'>

                            <h4> Price : ${shoes.price}</h4>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<AddShoppingCartIcon />}

                                fullWidth
                            >
                                Add to cart
            </Button>
                        </div>


                    </div>
                );
            })}
        </div>
    );
}

export default Productindex
