import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { Container, Row, Col } from "reactstrap";
import TrackFlight from '../../components/TrackFlight/TrackFlight';
import "./MainPage.css"
import FlightInfo from '../../components/FlightInfo/FlightInfo';
import Footer from '../../components/footer/Footer';

function MainPage() {
  return (
    <>
      <Navigation />
      <div className='body'>
        <Container >
          <Row>
            <Col xs="12">
              <TrackFlight />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FlightInfo />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default MainPage;