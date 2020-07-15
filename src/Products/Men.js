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
            <Link to={`/Products/Productdetail/${key}`} className="menshoes" key={key}>
              <h3>{menshoes.name}</h3>
              <div className="img">
                <img src={menshoes.img} alt={key} />
              </div>

              <div className="text">
                <h4> Price : ${menshoes.price}</h4>
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
