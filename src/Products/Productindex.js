import React from "react";
import "./Men.css";
import { Link } from "react-router-dom";


import Shoes from "./Shoes.json";

import { Button } from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Productindex() {
  return (
    <div className="men">
      {Object.keys(Shoes).map((key) => {
        const shoes = Shoes[key];
        return (
            <Link to={`/Products/Productdetail/${key}`}className="menshoes" key={key}>
            <div className="name">{shoes.name}</div>
            <div className="image">
              <img src={shoes.img} alt={key} />
            </div>

            <div className="price">Price : ${shoes.price}</div>
            <div className="cart">
              {" "}
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

export default Productindex;
