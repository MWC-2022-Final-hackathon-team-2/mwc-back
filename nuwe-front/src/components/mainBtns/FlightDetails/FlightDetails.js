import React, { useState } from "react";
import FlightService from "../../../services/flight.service";
import { flightValidators } from "../../Validators/Validators";
import moment from "moment";

const FlightDetails = () => {
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
      <button
        className="btn  btn-lg homeBtn"
        data-bs-toggle="modal"
        data-bs-target="#flightModal"
      >
        CREATE FLIGHT
      </button>
      <div
        className="modal fade "
        id="flightModal"
        tabIndex="-1"
        aria-labelledby="flightModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered myModal">
          <div className="modal-content bodyModal ">
            <div className="modal-header">
              <h2 className="modal-title" id="companyModalLabel">
                Flight Details
              </h2>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-outline col ">
                    <label className="name">Company Name</label>
                    <select
                      type="text"
                      name="company"
                      value={flight.company}
                      onChange={handleChange}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {errors.flightName && <p>{errors.flight}</p>}
                  </div>

                  <div className="form-outline col ">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={moment(new Date(flight.date)).format("YYYY-MM-DD")}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.date && <p>{errors.date}</p>}
                  </div>
                </div>
<<<<<<< HEAD
                <div className="form-outline ">
                  <label className="form-label">Country Origin</label>
                  <input
                    type="text"
                    name="originCountry"
                    value={flight.originCountry}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.originCountry && <p>{errors.originCountry}</p>}
                </div>
                <div className="form-outline ">
                  <label className="form-label">Continent Origin</label>
                  <input
                    type="text"
                    name="originContinent"
                    value={flight.originContinent}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.originContinent && <p>{errors.originContinent}</p>}
                </div>
                <div className="form-outline ">
                  <label className="form-label">Country Destination</label>
                  <input
                    type="text"
                    name="destinationCountry"
                    value={flight.destinationCountry}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.destinationCountry && (
                    <p className="errorInputs sm:text-md">
                      {errors.destinationCountry}
                    </p>
                  )}
                </div>
                <div className="form-outline ">
                  <label className="form-label">Continent Destination</label>
                  <input
                    type="text"
                    name="destinationContinent"
                    value={flight.destinationContinent}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.destinationContinent && (
                    <p>{errors.destinationContinent}</p>
                  )}
=======
                <div className="row">
                  <div className="form-outline col">
                    <label className="form-label">Country Origin</label>
                    <input type="text" id="CountryO" className="form-control" />
                  </div>
                  <div className="form-outline col ">
                    <label className="form-label">Continent Origin</label>
                    <input
                      type="text"
                      id="ContinentO"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-outline col ">
                    <label className="form-label">Country Destination</label>
                    <input type="text" id="CountryD" className="form-control" />
                  </div>
                  <div className="form-outline col">
                    <label className="form-label">Continent Destination</label>
                    <input
                      type="text"
                      id="ContinentD"
                      className="form-control"
                    />
                  </div>
>>>>>>> 227fbd494c25e25f09fc5d137f42ce622f64e9d2
                </div>
                <div className="form-outline ">
                  <label className="form-label">Seats</label>
                  <input
                    type="number"
                    name="seats"
                    value={flight.seats}
                    onChange={handleChange}
                    min="0"
                    className="form-control"
                  />
                  {errors.seats && <p>{errors.seats}</p>}
                </div>
                <div className="modal-footer mt-4">
                  <button
                    type="button"
                    className="btn btn-secondary "
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    disabled={!isValid()}
                    type="submit"
                    className="btn createBtn"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
