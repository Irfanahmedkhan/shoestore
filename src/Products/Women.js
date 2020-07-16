import React from "react";
import './Men.css'
import { Link } from "react-router-dom";


import Womenshoes from "./Womenshoes.json";

import { Button } from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";



function Women() {
    return (
        <div className='men'>
            {Object.keys(Womenshoes).map((key) => {
                const Women = Womenshoes[key];
                return (
                    <Link to={`/Products/Productdetail/${key}`}className='menshoes' key={key}>
                        <div className="name">{Women.name}</div>
                        <div className="image">
                            <img src={Women.img} alt={key} />
                        </div>

                        <div className="price">Price : ${Women.price}</div>
                        <div className="cart">
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<AddShoppingCartIcon />}

                                fullWidth
                            >
                                Add to cart
            </Button>
                        </div>


                    </Link>
                );
            })}
        </div>
    );
}

export default Women;
