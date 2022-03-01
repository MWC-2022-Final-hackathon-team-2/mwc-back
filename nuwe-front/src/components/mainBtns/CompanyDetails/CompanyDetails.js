import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyService from "../../../services/company.service";
import { companyValidators } from "../../Validators/Validators";

const CompanyDetails = () => {
  const [company, setCompany] = useState({
    company: "",
    website: "",
  });

  const [errors, setErrors] = useState({
    company: null,
    website: null,
  });

  const companyService = new CompanyService();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      companyService
        .create(company)
        .then(() => console.log(company.company, "created"))
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({
      ...company,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: companyValidators[name](value),
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
              <form onSubmit={handleSubmit}>
                <div className="form-outline ">
                  <label className="name">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={company.company}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.companyName && <p>{errors.company}</p>}
                </div>

                <div className="form-outline ">
                  <label className="form-label">Website</label>
                  <input
                    type="text"
                    name="website"
                    value={company.website}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.website && <p>{errors.website}</p>}
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

export default CompanyDetails;
