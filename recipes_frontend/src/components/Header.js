import React  from "react";
import {Navbar, Container} from 'react-bootstrap';

function Header() {
    return (
            <Navbar bg="primary" expand="md" bg="light">
                <Container>
                    <Navbar.Brand>Сборник рецептов</Navbar.Brand>
                </Container>
            </Navbar>
    );
}

export default Header;