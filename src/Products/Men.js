import React from "react";
import "./Men.css";
import { Link } from "react-router-dom";

import Menshoes from "./Menshoes.json";

import { Button } from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Men() {
  return (
    <div className="men">
      {Object.keys(Menshoes).map((key) => {
        const menshoes = Menshoes[key];
        return (
          <Link
            to={`/Products/Productdetail/${key}`}
            className="menshoes"
            key={key}
          >
            <div className="name">{menshoes.name}</div>
            <div className="image">
              <img src={menshoes.img} alt={key} />
            </div>

            <div className="price">Price : ${menshoes.price}</div>
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

export default Men;
