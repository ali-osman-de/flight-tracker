import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "./Landing.css"
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/footer/Footer';
import InputFlight from '../../components/InputFlight/InputFlight';

function Landing() {
    return (
        <>
            <Navigation />
            <div className='body'>
                <Container >
                    <Row >
                        <Col xs="12" >
                            <InputFlight />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>

        </>
    )
}

export default Landing