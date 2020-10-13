import React, { useState } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/"><img src="/paws.png" alt="Two paws, the logo for Adopt-a-lot" />&nbsp;Adopt-a-lot</NavbarBrand>
      <NavbarToggler onClick={ toggle } />
      <Collapse isOpen={ isOpen } navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavLink href="https://github.com/maresmartinez/animal-adoption-website" target="_blank" rel="noopener noreferrer">Github</NavLink>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;