import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import {
  Container,
  FormControl,
  Navbar,
  Dropdown,
  Nav,
  Badge,
  Button
} from "react-bootstrap";
import {Link} from "react-router-dom"
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
const Header = () => {

  const {
    state: { cart },
    dispatch,
    productDispatch
} = CartState()

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Card</Link>
        </Navbar.Brand>
        <Navbar.Text classname="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>

              {cart.length > 0 ? (
                <>
                  {
                    cart.map((pod) => (
                      <span className='cartItem' key={pod.id}>
                        <img src={pod.image} alt={pod.name} className="cartImg" />
                        <div className="cartItemDetail">
                          <span>
                            {pod.name}
                          </span>
                          <span>$ {pod.price.split(".")[0]} </span>
                        </div>
                        <AiFillDelete fontSize="20px" style={{ cursor: "pointer" }}
                          onClick={() => 
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: pod,
                            })
                          }
                        />
                      </span>
                    ))}
                  <Link to="/cart">
                  <Button style={{ width: "95%" , margin: "0 10px"}}>Go to Cart</Button>
                  </Link>

                    </>
                    ) : (<span style={{ padding: 10 }}>Cart is Empty!</span>)
                }

            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
