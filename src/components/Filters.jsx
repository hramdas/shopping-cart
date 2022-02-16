import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import { Rating } from './Rating';
import { CartState } from '../context/Context';
import { type } from '@testing-library/user-event/dist/type';

export const Filters = () => {
    const [rate, setRate] = useState(3);
     const {productState : {byStock, byFastDelivery, sort, byRating}, productDispatch} = CartState()

  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check inline 
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={()=>productDispatch({
                type : "SORT_BY_PRICE",
                payload : "lowToHigh",
            })}
            checked={sort=== "lowToHIgh" ? true : false}
            />
        </span>
        <span>
            <Form.Check inline 
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={()=>productDispatch({
                type : "SORT_BY_PRICE",
                payload : "highToLow",
            })}
            checked={sort=== "highToLow" ? true : false}
            />
        </span>
        <span>
            <Form.Check inline 
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            onChange={()=>productDispatch({
                type : "FILTER_BY_STOCK",
            })}
            checked={byStock}
            id={`inline-3`}
            />
        </span>
        <span>
            <Form.Check inline 
            label="Fast Delivery"
            name="group1"
            type="checkbox"
            id={`inline-4`}
             onChange={()=>productDispatch({
                type : "FILTER_BY_DELIVERY",
            })}
            checked={byFastDelivery}
            />
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating: </label>
            <Rating rating={byRating}
            onClick={(i)=>productDispatch({
                type : "FILTER_BY_RATING",
                payload : i+1,
            })} style={{cursor :"pointer" }} />
        </span>
       
        <Button variant="light">Clear Filters</Button> 
    </div>
  )
}

