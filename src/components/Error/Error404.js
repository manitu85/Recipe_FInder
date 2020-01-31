import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Jumbotron } from 'react-bootstrap'

const Error404 = () => (
  <Jumbotron className='d-flex justify-content-center align-items-center'>
    <Container>
      <h1>ERORR_404!</h1>
      <h2>Ups something went wrong !!!</h2>
      <NavLink 
        to='/'
        className='btn btn-primary w-25 mt-4'>
        Back to home page
      </NavLink>
    </Container> 
  </Jumbotron>
)


export default Error404

