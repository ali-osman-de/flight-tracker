import React from 'react'
import "./FlightInfo.css"
import api from "../../api/api"
import { useParams } from 'react-router-dom';


function FlightInfo() {

    const params = useParams();
    const { index } = params;

    const getTimeFromDateTimeString = (dateTimeString) => {
        const date = new Date(dateTimeString);

        const hour = ('0' + date.getUTCHours()).slice(-2); 
        const minute = ('0' + date.getUTCMinutes()).slice(-2);

        return hour + ':' + minute;
    };

    const flight = api.data[index]

    const getFlightInformation = (flight) => {
        return (

            <tr className='text-center'>
                <td>{flight.flight_date}</td>
                <td>{flight.departure.icao}</td>
                <td>{flight.arrival.icao}
                </td>
                <td>{getTimeFromDateTimeString(flight.departure.actual)}</td>
                <td>{getTimeFromDateTimeString(flight.arrival.actual)}</td>
            </tr>
        )
    }

    return (
        <>
            <div className='text-center text-dark p-2'>
                <h2>Flight Information</h2>
            </div>
            <div className="d-flex justify-content-center">
                <table className='my-3 center'>
                    <thead>
                        <tr>
                            <th>Flight Date</th>
                            <th>Departure Airport</th>
                            <th>Arrival Airport</th>
                            <th>Actual Departure</th>
                            <th>Actual Arrival</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getFlightInformation(flight)}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default FlightInfo