import React, { useState } from 'react'
import { Card, CardBody, CardTitle, CardText, Input, Col, FormGroup, Label } from 'reactstrap'
import api from '../../api/api'
import SearchFlightButton from '../SearchFlightButton/SearchFlightButton';

function InputFlight() {

    const [flightNumber, setFlightNumber] = useState('');
    const [flightIcaoCode, setFlightIcaoCode] = useState();

    const FlightData = api.data

    function eachFlightIataCode() {
        const uniqueOptions = new Set();

        for (let index = 0; index < FlightData.length; index++) {
            const element = FlightData[index].airline.iata;
            uniqueOptions.add(element);
        }

        const uniqueOptionsArray = Array.from(uniqueOptions).sort()
        const renderOptions = uniqueOptionsArray.map((code, index) => (
            <option key={index} value={code}>
                {code}
            </option>
        ));
        return renderOptions;
    }

    const handleFlightNumber = (event) => {
        setFlightNumber(event.target.value);
    };

    const handleFlightIcaoCode = (event) => {
        setFlightIcaoCode(event.target.value);
    };



    return (
        <>
            <Card
                body
                color="light"
                className='mt-4'
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <CardBody>
                    <CardTitle tag="h2">
                        Search Flight
                    </CardTitle>
                    <CardText>
                        <FormGroup row>
                            <Label
                                for="exampleEmail"
                                sm={2}
                            >
                                Airline
                            </Label>
                            <Col sm={2}>

                                <Input

                                    className='text-center'
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                    value={flightIcaoCode}
                                    onChange={handleFlightIcaoCode}
                                >
                                    {eachFlightIataCode()}
                                </Input>
                            </Col>
                            <Label
                                for="exampleEmail"
                                sm={2}
                            >
                                Flight Number
                            </Label>
                            <Col sm={2}>
                                <Input
                                    id="flightNumber"
                                    name="flightNumber"
                                    placeholder="Flight Number"
                                    type="flightNumber"
                                    value={flightNumber}
                                    onChange={handleFlightNumber}
                                />
                            </Col>
                            <Col sm={3}>
                                <SearchFlightButton flightNumber={flightNumber} flightIcaoCode={flightIcaoCode} />
                            </Col>
                        </FormGroup>
                    </CardText>
                </CardBody>
            </Card>

        </>
    )
}

export default InputFlight