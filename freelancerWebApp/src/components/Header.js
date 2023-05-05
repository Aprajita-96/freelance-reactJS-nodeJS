import React, { useState } from 'react';
import {Button, Navbar, Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import HeaderNav from './HeaderNav';
 
export default function App(props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Navbar expand="expand-lg" variant="dark" bg="dark">
      <Navbar.Brand className='"d-inline-block'>
      <button class="navbar-toggler" type="button" onClick={handleShow}>
        <span class="navbar-toggler-icon"></span>
      </button>{' '}
         WorkMore
        </Navbar.Brand>   
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>WorkMore</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <HeaderNav login={props.login}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );

}
