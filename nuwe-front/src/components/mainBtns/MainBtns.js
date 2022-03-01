import React from "react";
import barcelona from "../../assets/barcelona.png";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import FlightDetails from "./FlightDetails/FlightDetails";

const MainBtns = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <img className="navbar-brand" src={barcelona} width="400" alt="" />
        <div className="d-flex button-group w-auto btnGroup">
          <CompanyDetails />

          <FlightDetails />
        </div>
      </div>
    </nav>
  );
};

export default MainBtns;
