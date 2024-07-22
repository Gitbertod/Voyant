"use client";

import { Button, Navbar } from "flowbite-react";



const NavbarVoyant = () => {
  return (
    <Navbar fluid rounded>
    <Navbar.Brand href="https://flowbite-react.com">
      <img src="logoVoyant.svg" className="mr-3 h-6 sm:h-9" alt="Voyant Logo" />
      
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button>Get started</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="#">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavbarVoyant