import { 
    BrowserRouter as Router, 
    Routes, 
    Route,
    NavLink 
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "../../pages/home/Home";
import GameDetails from "../../games/GameDetails";
import { Container } from "react-bootstrap";

function Menu() {
  return (
    <Router>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink href="#home" className="nav-link">Home</NavLink>
                    <NavLink href="#link" className="nav-link">Link</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" component={GameDetails} />
                <Route path="/contact">Contact</Route>
                <Route path="/login">Login</Route>
            </Routes>
        </Container>
    </Router>
  )
}

export default Menu