import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import PostList from "../posts/PostDetails";
import PostDetails from "../posts/PostDetails"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";


function Layout() {
  return (
      <Router>
          <Navbar bg="light" expand="lg">
                <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </Nav>
                </Navbar.Collapse>

                <Container>
                    <Routes>
                        <Route path='/' exact component={PostList} />
                        <Route path="/details/:id" component={PostDetails} />

                    </Routes>
                </Container>
            </Navbar>
      </Router>
  )
}

export default Layout