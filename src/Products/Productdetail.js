import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "./Shoes.json";
import { Button } from "@material-ui/core";
import "./Productdetail.css";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Productdetail() {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe) return <h2> Product Not Found</h2>;

  return (
    <div className="detail">
      <div className="menshoes">
        <div>{shoe.name}</div>
        <div className="image">
          <img src={shoe.img} alt="shoe" />
        </div>

        <div className="price">
          <h4> Price : ${shoe.price}</h4>{" "}
        </div>
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
      </div>
    </div>
  );
}

export default Productdetail;
