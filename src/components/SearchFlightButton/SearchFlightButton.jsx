import React, { useState } from "react";
import { Button } from "reactstrap";
import api from "../../api/api";
import { useNavigate } from 'react-router-dom';

function SearchFlightButton(props) {
  const flightData = api.data
  const { flightIcaoCode, flightNumber } = props
  const navigate = useNavigate();

  const alreadyFlightNumber = flightIcaoCode + flightNumber;

  const foundIndex = flightData.findIndex(flight => flight.flight.iata === alreadyFlightNumber);

  const [showAlert, setShowAlert] = useState(false);

  const goToPageWithParams = () => {
    if (foundIndex !== -1) {
      const params = { foundIndex: foundIndex };
      navigate(`/flight-search-by-iata/${params.foundIndex}`);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <>
      <Button onClick={goToPageWithParams} block size="md" color="warning">
        Find
      </Button>
      {showAlert && (
        <div className="text-center mt-3">
          <p>Flight Not Found</p>
        </div>
      )}
    </>
  );
}

export default SearchFlightButton;
