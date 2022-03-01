import React from "react";

const MainBtns = () => {
  return (
    <div className="main">
      <div className="row">
        <div className="col-sm-6 ">
          <button
            className="btn  btn-lg homeBtn"
            data-bs-toggle="modal"
            data-bs-target="#companyModal"
          >
            CREATE COMPANY
          </button>
          <div
            class="modal fade "
            id="companyModal"
            tabindex="-1"
            aria-labelledby="companyModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered myModal">
              <div class="modal-content bodyModal">
                <div class="modal-header">
                  <h5 class="modal-title" id="companyModalLabel">
                    Company Details
                  </h5>
                  <button
                    type="button"
                    class="btn-close close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body ">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn createBtn">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-sm-6">
          <button
            className="btn  btn-lg homeBtn"
            data-bs-toggle="modal"
            data-bs-target="#flightModal"
          >
            CREATE FLIGHT
          </button>
          <div
            class="modal fade "
            id="flightModal"
            tabindex="-1"
            aria-labelledby="flightModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered myModal">
              <div class="modal-content bodyModal ">
                <div class="modal-header">
                  <h5 class="modal-title" id="companyModalLabel">
                    Flight Details
                  </h5>
                  <button
                    type="button"
                    class="btn-close close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body ">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn createBtn">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBtns;
