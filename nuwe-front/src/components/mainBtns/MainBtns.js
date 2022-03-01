import React from "react";
import barcelona from "../../assets/barcelona.png";

const MainBtns = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <img className="navbar-brand" src={barcelona} width="400" alt="" />
        <div className="d-flex button-group w-auto btnGroup">
          <button
            className="btn  btn-lg homeBtn"
            data-bs-toggle="modal"
            data-bs-target="#companyModal"
          >
            CREATE COMPANY
          </button>
          <div
            className="modal fade "
            id="companyModal"
            tabIndex="-1"
            aria-labelledby="companyModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered myModal">
              <div className="modal-content bodyModal">
                <div className="modal-header">
                  <h5 className="modal-title" id="companyModalLabel">
                    Company Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body ">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn createBtn">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

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
                  <h5 className="modal-title" id="companyModalLabel">
                    Flight Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body ">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn createBtn">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </nav>
  );
};

export default MainBtns;
