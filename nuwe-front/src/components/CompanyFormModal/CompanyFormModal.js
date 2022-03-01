import React, { useState } from "react";
// import moment from "moment";
import { useNavigate } from "react-router-dom";
import CompanyService from "../../services/company.service";
import { companyValidators } from "../../components/Validators/Validators";


export default function CompanyFormModal() {

  const [company, setCompany] = useState({
    companyName: "",
    website: "",
  });

  const [errors, setErrors] = useState({
    companyName: null,
    website: null,
  });

  const companyService = new CompanyService();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      companyService
        .create(company)
        .then(() => console.log(company.name, "created"))
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
        {/* <div>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            value={moment(new Date(company.date)).format("YYYY-MM-DD")}
            onChange={handleChange}
          />
          {errors.date && <p>{errors.date}</p>}
        </div> */}
        <div>
          <label htmlFor="companyName">Company: </label>
          <input
            type="text"
            name="companyName"
            value={company.companyName}
            onChange={handleChange}
          />
          {errors.companyName && <p>{errors.companyName}</p>}
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
