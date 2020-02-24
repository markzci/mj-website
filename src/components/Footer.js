import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Social from '../components/Social';

function Footer() {
    return(
      <footer className="site-footer mt-5">
          <Container fluid={true}>
              <Row className="border-top justify-content-between p-3" id="bottom-bar">
                  {/* <Col className="p-0" md={3} sm={12}> */}
                      {/* <p style={{color:'#9a9b9c'}}>© Mark Jurkiewicz 2020</p> */}
                  {/* </Col> */}
                  <Col className="p-0 d-flex justify-content-center">
                    <Social />
                  </Col>
              </Row>
          </Container>
      </footer>   
    );
}

export default Footer;