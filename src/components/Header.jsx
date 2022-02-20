import React from 'react'
import {Badge, Container, FormControl, Navbar, Dropdown, Nav, Button } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import "./styles.css";

export const Header = () => {
    const {state : {cart}, dispatch, productDispatch} = CartState()
  return (
    <Navbar fixed="top" bg="dark" variant="dark" style={{height:70}}>
        <Container id="container">
            <Navbar.Brand>
                <Link style={{marginRight: "30px"}} to="/" >My Shop</Link>
                <Link to="cart">Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl onChange={(e)=>{
                    productDispatch({
                        type : "FILTER_BY_SEARCH",
                        payload : e.target.value
                    })
                }} style={{width:200}} placeholder="Search a Product" className='m-auto' />
            </Navbar.Text>
            <Nav>
                <Dropdown className='cartDropDown' alignRight>
                    <Dropdown.Toggle variant='success'>
                        <FiShoppingCart color="white" fontSize="25px" />
                        <Badge bg="none">{cart.length}</Badge>
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu  style={{minWidth:300,  left: "-200px"}}>
                    {cart.length > 0 ? (
                        <>
                        {cart.map(prod=>(
                            <span className='cartitem' key={prod.id}>
                                <img src={prod.image} className="cartItemImg" alt={prod.name} />
                                <div className='cartItemDetail'>
                                    <span>{prod.name}</span>
                                    <span>₹ {prod.price.split('.')[0]}</span>
                                </div>
                                <AiFillDelete fontSize="20px" style={{cursor :"pointer" }} onClick={() => dispatch({
                                    type:"REMOVE_FROM_CART",
                                    payload : prod
                                })
                                } />
                            </span>
                        ))}
                        <Link to="/cart">
                            <Button style={{width:"95%",margin:"0 10px"}}>Open cart</Button>
                        </Link>
                        </>
                    ):(
                        <span style={{padding:10}}>Cart is Empty</span>
                    )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        
        </Container>
    </Navbar>
  )
}
