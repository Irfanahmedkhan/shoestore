import React from "react";
import './Men.css'

import Womenshoes from "./Womenshoes.json";

import { Button } from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";



function Women() {
    return (
        <div className='men'>
            {Object.keys(Womenshoes).map((key) => {
                const Women = Womenshoes[key];
                return (
                    <div className='menshoes' key={key}>
                        <h3>{Women.name}</h3>
                        <div className='img'><img src={Women.img} alt={key} /></div>

                        <div className='text'>

                            <h4> Price : ${Women.price}</h4>
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

export default Women;
