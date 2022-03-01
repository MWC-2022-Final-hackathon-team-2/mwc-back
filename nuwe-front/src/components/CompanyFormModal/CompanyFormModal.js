import React from "react";
// import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function CompanyFormModal(props) {
  const { fields, isValid, errors, handleChange, handleSubmit } = props;

  const navigate = useNavigate();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            value={moment(new Date(fields.date)).format("YYYY-MM-DD")}
            onChange={handleChange}
          />
          {errors.date && <p>{errors.date}</p>}
        </div> */}
        <div>
          <label htmlFor="companyName">Company: </label>
          <input
            type="text"
            name="companyName"
            value={fields.companyName}
            onChange={handleChange}
          />
          {errors.companyName && <p>{errors.companyName}</p>}
        </div>
        <div>
          <label htmlFor="website">Website: </label>
          <input
            type="text"
            name="website"
            value={fields.website}
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
