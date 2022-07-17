import React  from "react";
import {Navbar, Container} from 'react-bootstrap';

function Header() {
    return (
            <Navbar bg="light" expand="md" >
                <Container>
                    <Navbar.Brand>Сборник рецептов</Navbar.Brand>
                </Container>
            </Navbar>
    );
}

export default Header;