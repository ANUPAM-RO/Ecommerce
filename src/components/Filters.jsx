import React, { useState } from 'react'
import "./style.css"
import {Form, Button} from "react-bootstrap"
import Reating from './Reating'
const Filters = () => {
    const [rating, setRating] = useState(3)
  return (
      <div className='filters'>
          <span className="title">Filter Products</span>
          <span>
              <Form.Check
                  inline
                  label="Ascending"
                  name="group1"
                  type="radio"
                  id={`inline-1`}
              />
              
          </span>
          <span>
              <Form.Check
                  inline
                  label="Decending"
                  name="group1"
                  type="radio"
                  id={`inline-2`}
              />
          </span>
          <span>
              <Form.Check
                  inline
                  label="Include Out of Stock"
                  name="group1"
                  type="checkbox"
                  id={`inline-3`}
              />
          </span>
          <span>
              <Form.Check
                  inline
                  label="Fast Delivary Only"
                  name="group1"
                  type="checkbox"
                  id={`inline-4`}
              />
          </span>
          <span>
              <label style={{ paddingRight: 10}}>Reating: </label>
              <Reating rating={rating} onClick={(i)=>setRating(i+1)} style={{ cursor: "pointer" }} />
              
          </span>
          <Button variant = "light">Clear Filters</Button>
      </div>
  )
}

export default Filters