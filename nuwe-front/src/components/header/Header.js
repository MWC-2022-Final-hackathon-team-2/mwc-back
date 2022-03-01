import React from "react";
import barcelona from "../../assets/barcelona.png";
import { useNavigate } from "react-router-dom";
import MainBtns from "../mainBtns/MainBtns";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
          <MainBtns />
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <img className="navbar-brand" src={barcelona} width="400" alt="" />
          <div className="d-flex button-group w-auto btnGroup">
            <button className="btn btn-outline-info "> Add Company +</button>
            <button className="btn btn-outline-warning ">Add Flight</button>
          </div> */}
        </div>
      </nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            onClick={() => navigate("/")}
            className="nav-link active btn btn-outline-info tabBtn"
            aria-current="page"
          >
            Companies
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => navigate("/flights")}
            className="nav-link btn btn-outline-info tabBtn"
            href="#"
          >
            Flight
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => navigate("/statistics")}
            className="nav-link btn btn-outline-info tabBtn"
            href="#"
          >
            Statistic
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
