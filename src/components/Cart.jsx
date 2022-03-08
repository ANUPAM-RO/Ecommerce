import React, { useEffect, useState } from 'react'
import { Button, ListGroup, Row, Col,Form , Image} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../context/Context';
import Reating from './Reating';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0))
  },[cart]);
  return (
    <div className='home'>
      <div className="productContainer">
        <ListGroup>
          {
            cart.map((pod) => (
              <ListGroup.Item key={pod.id}>
                <Row>
                  <Col md={2}>
                   <Image src={pod.image} alt={pod.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{ pod.name}</span>
                  </Col>
                   <Col md={2}>
                    <span>{ pod.price}</span>
                  </Col>
                   <Col md={2}>
                    <Reating rating= {pod.rating} />
                  </Col >
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={pod.qty}
                      onChange={(e) => {
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: pod.id,
                            qty: e.target.value,
                          }
                        })
                      }}
                    >
                    {[...Array(pod.inStock).keys()].map((x) => (
                      <option key = {x+1}>{x + 1}</option>
                   ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      varient="light"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: pod,
                        })
                      }}
                    >
                      <AiFillDelete fontSize= "20px " />
                    </Button>
                  </Col>
                </Row>
             </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className='title'>Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ { total }</span>
        <Button type="button" disabled={cart.length === 0}>Proced to Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;