import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout(props) {
    return (
        <div>
            <Header />
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Layout;