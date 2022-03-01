import React from "react";
import barcelona from "../../assets/barcelona.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <img class="navbar-brand" src={barcelona} width="400" alt="" />
          <div class="d-flex button-group w-auto btnGroup">
            <button class="btn btn-outline-info "> Add Company +</button>
            <button class="btn btn-outline-warning ">Add Flight</button>
          </div>
        </div>
      </nav>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <button
            onClick={() => navigate("/")}
            class="nav-link active btn btn-outline-info tabBtn"
            aria-current="page"
          >
            Companies
          </button>
        </li>
        <li class="nav-item">
          <button
            onClick={() => navigate("/flights")}
            class="nav-link btn btn-outline-info tabBtn"
            href="#"
          >
            Flight
          </button>
        </li>
        <li class="nav-item">
          <button
            onClick={() => navigate("/statistics")}
            class="nav-link btn btn-outline-info tabBtn"
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
