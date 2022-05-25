import React from "react";
import { Navbar, Container } from "react-bootstrap";
import User from "../auth/User";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Expenses app</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <User />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
