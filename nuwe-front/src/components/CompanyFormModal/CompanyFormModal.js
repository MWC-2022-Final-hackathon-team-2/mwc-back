import React, { useState } from "react";
// import moment from "moment";
import { useNavigate } from "react-router-dom";
import CompanyService from "../../services/company.service";
import { companyValidators } from "../../components/Validators/Validators";


export default function CompanyFormModal() {

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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            name="company"
            value={company.company}
            onChange={handleChange}
          />
          {errors.companyName && <p>{errors.company}</p>}
        </div>
        <div>
          <label htmlFor="website">Website: </label>
          <input
            type="text"
            name="website"
            value={company.website}
            onChange={handleChange}
          />
          {errors.website && (
            <p className="errorInputs sm:text-md">{errors.website}</p>
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
