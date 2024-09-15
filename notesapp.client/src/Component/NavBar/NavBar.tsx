import { FC, useEffect } from 'react';
import Navbar from 'react-bootstrap/esm/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import "./NavBar.css"
interface NavBarProps {
    reload: boolean
}

const NavBar: FC<NavBarProps> = ({ reload }) => {
    let tokenExist = localStorage.getItem("token") !== null;

    useEffect(() => {
        function handleT() {
            tokenExist = localStorage.getItem("token") !== null;
        }

        handleT();
        
    }, [reload]);
    
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container >
                <Navbar.Brand href="home" className="link"><strong>My Notes</strong></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="login" className="link">Login</Nav.Link>
                        <Nav.Link href="registr" className="link">Registration</Nav.Link>
                        {tokenExist && <Nav.Link href="notes" className="link">Notes</Nav.Link>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    ) };

export default NavBar;
