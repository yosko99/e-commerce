import React from 'react';

import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi';

import LogoImg from '../../assets/logo.webp';
import CategoryDropdown from '../dropdowns/CategoryDropdown';

const Navigation = () => {
  return (
    <Navbar sticky="top" expand="md" className="bg-body-tertiary mb-3 bg-white">
      <Container>
        <Navbar.Brand href="#">
          <Image src={LogoImg} height={30} width={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-md'}>
          <GiHamburgerMenu size={30} />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={'offcanvasNavbar-expand-md'}
          aria-labelledby={'offcanvasNavbarLabel-expand-md'}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={'offcanvasNavbarLabel-expand-md'}>
              Brand name
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <CategoryDropdown gender="Men" />
              <CategoryDropdown gender="Women" />
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
