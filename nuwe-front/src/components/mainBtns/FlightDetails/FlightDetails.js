import React from "react";

const FlightDetails = () => {
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
              <form>
                <div className="row">
                  <div className="form-outline col ">
                    <label className="name">Company Name</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="form-outline col ">
                    <label className="form-label">Date</label>
                    <input type="date" id="date" className="form-control" />
                  </div>
                </div>
                <div className="form-outline ">
                  <label className="form-label">Country Origin</label>
                  <input type="text" id="CountryO" className="form-control" />
                </div>
                <div className="form-outline ">
                  <label className="form-label">Continent Origin</label>
                  <input type="text" id="ContinentO" className="form-control" />
                </div>
                <div className="form-outline ">
                  <label className="form-label">Country Destination</label>
                  <input type="text" id="CountryD" className="form-control" />
                </div>
                <div className="form-outline ">
                  <label className="form-label">Continent Destination</label>
                  <input type="text" id="ContinentD" className="form-control" />
                </div>
                <div className="form-outline ">
                  <label className="form-label">Seats</label>
                  <input
                    type="number"
                    min="0"
                    id="ContinentD"
                    className="form-control"
                  />
                </div>
                <div className="modal-footer mt-4">
                  <button
                    type="button"
                    className="btn btn-secondary "
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn createBtn">
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
