import React, { useState } from "react";
// import moment from "moment";
import { useNavigate } from "react-router-dom";
import FlightService from "../../services/flight.service";
import { flightValidators } from "../../components/Validators/Validators";
import moment from "moment";


export default function FlightFormModal() {

  const [flight, setFlight] = useState({
    company: "",
    date: "",
    originCountry: "",
    originContinent: "",
    destinationCountry: "",
    destinationContinent: "",
    seats: "",
  });

  const [errors, setErrors] = useState({
    company: null,
    date: null,
    originCountry: null,
    originContinent: null,
    destinationCountry: null,
    destinationContinent: null,
    seats: null,
  });

  const flightService = new FlightService();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      flightService
        .create(flight)
        .then(() => console.log(flight.company, "created"))
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlight({
      ...flight,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: flightValidators[name](value),
    });
  };

  const isValid = () => {
    return !Object.keys(errors).some((key) => errors[key]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            name="company"
            value={flight.company}
            onChange={handleChange}
          />
          {errors.flightName && <p>{errors.flight}</p>}
        </div>
        <div>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            value={moment(new Date(flight.date)).format("YYYY-MM-DD")}
            onChange={handleChange}
          />
          {errors.date && <p>{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="originCountry">OriginCountry: </label>
          <input
            type="text"
            name="originCountry"
            value={flight.originCountry}
            onChange={handleChange}
          />
          {errors.originCountry && (
            <p className="errorInputs sm:text-md">{errors.originCountry}</p>
          )}
        </div>
        <div>
          <label htmlFor="originContinent">OriginContinent: </label>
          <input
            type="text"
            name="originContinent"
            value={flight.originContinent}
            onChange={handleChange}
          />
          {errors.originContinent && (
            <p className="errorInputs sm:text-md">{errors.originContinent}</p>
          )}
        </div>
        <div>
          <label htmlFor="destinationCountry">destinationCountry: </label>
          <input
            type="text"
            name="destinationCountry"
            value={flight.destinationCountry}
            onChange={handleChange}
          />
          {errors.destinationCountry && (
            <p className="errorInputs sm:text-md">{errors.destinationCountry}</p>
          )}
        </div>
        <div>
          <label htmlFor="destinationContinent">destinationContinent: </label>
          <input
            type="text"
            name="destinationContinent"
            value={flight.destinationContinent}
            onChange={handleChange}
          />
          {errors.destinationContinent && (
            <p className="errorInputs sm:text-md">{errors.destinationContinent}</p>
          )}
        </div>
        <div>
          <label htmlFor="seats">Seats: </label>
          <input
            type="number"
            name="seats"
            value={flight.seats}
            onChange={handleChange}
          />
          {errors.seats && (
            <p className="errorInputs sm:text-md">{errors.seats}</p>
          )}
        </div>

        <div>
          <button disabled={!isValid()} type="submit">
            Create
          </button>
          <button onClick={() => navigate.push("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
