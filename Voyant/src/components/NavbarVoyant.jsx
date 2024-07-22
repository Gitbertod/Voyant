"use client";

import { Button, Navbar } from "flowbite-react";



const NavbarVoyant = () => {
  return (
    <Navbar fluid rounded>
    <Navbar.Brand href="https://flowbite-react.com">
      <img src="logoVoyant.svg" className="mr-3 h-6 sm:h-9" alt="Voyant Logo" />
      
    </Navbar.Brand>
    <div className="flex md:order-2">
      
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      
      <Navbar.Link href="#">NOSOTROS</Navbar.Link>
      <Navbar.Link href="#">SOLUCIONES</Navbar.Link>
      <Navbar.Link href="#">VOYANT 365</Navbar.Link>
      <Navbar.Link href="#">CONTACTO</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavbarVoyant