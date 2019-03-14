import React from 'react'
import { Container, Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';


const Header = () => {
  return (
    <Navbar bg="dark" className='p-1'>
      <Container>
        <NavbarBrand id='header'>
          <FaUtensils className='mr-3' />
            Recepie Finder
          </NavbarBrand>
        <Nav className="d-flex flex-row-reverse">
          <span
            className='nav-star'
            style={{ color: '#fcd35a', fontSize: '2.25rem' }}>&#9733;
            </span>
          <li className='links border-animation p-3'>
            <NavLink to='/favorites'> Favorite</NavLink>
          </li>
          <li className='links border-animation p-3'>
            <NavLink exact to='/'>Home</NavLink>
          </li>
        </Nav>
      </Container>
    </Navbar>
  )
}


export default Header;
