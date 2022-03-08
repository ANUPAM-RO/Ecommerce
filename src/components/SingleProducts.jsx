import React from "react";
import { Button, Card } from "react-bootstrap";
import Reating from "./Reating";
import { CartState } from "../context/Context";
const SingleProducts = ({ pod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img varient="top" src={pod.image} alt={pod.name} />
        <Card.Body>
          <Card.Title>{pod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBotton: 10 }}>
            <span>$ {pod.price.split(".")[0]}</span>
            {pod.fastDelivery ? (
              <div>Fast delivery</div>
            ) : (
              <div>5 days delivery</div>
            )}
            <Reating rating={pod.rating} />
          </Card.Subtitle>

          {cart.some((p) => p.id === pod.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: pod,
                });
              }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: pod,
                });
              }}
              disabled={!pod.inStock}
            >
              {!pod.inStock ? "out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProducts;
