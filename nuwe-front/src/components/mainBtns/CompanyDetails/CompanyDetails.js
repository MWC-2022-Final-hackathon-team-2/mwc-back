import React from "react";

const CompanyDetails = () => {
  return (
    <div>
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
              <h2 className="modal-title" id="companyModalLabel">
                Company Details
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
                <div className="form-outline ">
                  <label className="name">Company Name</label>
                  <input type="text" id="name" className="form-control" />
                </div>

                <div className="form-outline ">
                  <label className="form-label">Website</label>
                  <input type="text" id="web" className="form-control" />
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

export default CompanyDetails;
