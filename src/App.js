import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/flight-search-by-iata/:index" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
