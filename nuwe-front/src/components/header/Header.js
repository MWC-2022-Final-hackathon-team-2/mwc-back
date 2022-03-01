import React from "react";
import barcelona from "../../assets/barcelona.png";
import { useNavigate } from "react-router-dom";
import MainBtns from "../mainBtns/MainBtns";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MainBtns />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            onClick={() => navigate("/")}
            className="nav-link  btn  tabBtn"
            aria-current="page"
          >
            Companies
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => navigate("/flights")}
            className="nav-link btn  tabBtn"
            href="#"
          >
            Flight
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => navigate("/statistics")}
            className="nav-link btn  tabBtn"
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
