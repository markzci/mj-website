import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';

function Layout(props) {

    return (
        <div >
            <Header />
            <Container className="content" fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <motion.div exit={{opacity:0}} animate={{
                            x: 0,
                            backgroundColor: "#2193b0",
                            boxShadow: "30px 30px 0 rgba(0, 0, 0, 0.5)",
                            position: "fixed",

                        }}>
                            {props.children}
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Layout;