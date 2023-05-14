import {Container, Nav, Navbar} from "react-bootstrap";

function CustomNavbar() {
    return (
    <Navbar bg="dark" variant="dark" className="myNav">
        <Container>
            <Navbar.Brand href="#home">스펀지 샵</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">홈</Nav.Link>
                <Nav.Link href="#cart">장바구니</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default CustomNavbar