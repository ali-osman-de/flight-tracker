
import { Card, CardBody, CardTitle, Badge } from 'reactstrap'
import api from '../../api/api'
import React, { useState, useEffect } from 'react';
import "./TrackFlight.css"
import { TbPlaneDeparture, TbPlaneArrival } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FaPlaneCircleCheck, FaPlaneCircleXmark, FaPlane } from "react-icons/fa6";
import { useParams } from 'react-router-dom';



function TrackFlight() {
  const params = useParams();
  const { index } = params;

  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prevState => !prevState);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeFromDateTimeString = (dateTimeString) => {
    const date = new Date(dateTimeString);

    const hour = ('0' + date.getUTCHours()).slice(-2); // Saati alırken iki basamaklı hale getiriyoruz
    const minute = ('0' + date.getUTCMinutes()).slice(-2); // Dakikayı alırken iki basamaklı hale getiriyoruz

    return hour + ':' + minute;
  };


  const getDelayInfo = (departureDelay, arrivalDelay) => {
    if (departureDelay === null && arrivalDelay === null) {
      return (<Badge className='m-2 fs-5' color="success">
        On-Time
      </Badge>)
    } else {
      return (<Badge className='m-2 fs-5' color="danger">
        Delayed
      </Badge>)
    }
  };

  const getFlightStatus = (flight_status) => {
    if (flight_status === "landed") {

      return (
        <Badge color="warning fs-3 d-inline-block d-flex justify-content-between align-items-center"
          className={isBlinking ? 'blink' : ''} pill>
          {flight_status.toUpperCase()}
          <FaPlaneCircleCheck className="m-1" />
        </Badge>
      )

    }
    else if (flight_status === "scheduled") {

      return (
        <Badge color="success fs-3 d-inline-block d-flex justify-content-between align-items-center"
          pill>
          {flight_status.toUpperCase()}
          <FaPlaneCircleCheck className="m-1" />
        </Badge>

      )
    }
    else if (flight_status === "active") {
      return (<Badge color="primary fs-3 d-inline-block d-flex justify-content-between align-items-center"
        pill>ON-FLIGHT
        <FaPlane className="m-1" />
      </Badge>)
    }
    else if (flight_status === "cancelled") {
      return (<Badge color="danger fs-3 d-inline-block d-flex justify-content-between align-items-center"
        pill>
        {flight_status.toUpperCase()}
        <FaPlaneCircleXmark className="m-1" />
      </Badge>)
    }
  }



  return (
    <>
      <Card className="my-3">
        <CardBody>
          <CardTitle>
            <div className="d-flex justify-content-between align-items-center">
              <h2>{api.data[index].flight.iata} Flight Status
                {getDelayInfo(api.data[index].departure.delay, api.data[index].arrival.delay)}
              </h2>

              {getFlightStatus(api.data[index].flight_status)}

            </div>
            <div className='d-flex justify-content-between align-items-center fs-5'>
              {api.data[index].airline.name} ({api.data[index].flight.iata})
            </div>
          </CardTitle>
          <div className="d-flex align-items-start fs-3 p-5">
            <h4 className="m-2">{getTimeFromDateTimeString(api.data[index].departure.estimated)}</h4>
            <TbPlaneDeparture className="me-auto fs-1" /> {api.data[index].departure.airport} Airport
          </div>
          <MdOutlineKeyboardDoubleArrowDown className="d-flex justify-content-center align-item-center mx-auto fs-1" />
          <div className="d-flex align-items-start fs-3 p-5">
            <h4 className="m-2">{getTimeFromDateTimeString(api.data[index].arrival.estimated)}</h4>
            <TbPlaneArrival className="me-auto fs-1" />
            {api.data[index].arrival.airport} Airport
          </div>
          <small className="text-muted float-right">
            {api.data[index].flight_date}
          </small>
        </CardBody>
      </Card>
    </>
  )
}

export default TrackFlight