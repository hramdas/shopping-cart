import React from 'react'
import {Badge, Container, FormControl, Navbar, Dropdown, Nav } from 'react-bootstrap'
import {FiShoppingCart} from 'react-icons/fi'

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height:50}}>
        <Container>
            <Navbar.Brand>
                <a href="/" >My Shop</a>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width:200}} placeholder="Search a Product" className='m-auto' />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>
                        <FiShoppingCart color="white" fontSize="25px" />
                        <Badge bg="none">{10}</Badge>
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu style={{minWidth:350}}>
                        <span style={{padding:10}}>Cart is Empty</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
            
        </Container>
    </Navbar>
  )
}
