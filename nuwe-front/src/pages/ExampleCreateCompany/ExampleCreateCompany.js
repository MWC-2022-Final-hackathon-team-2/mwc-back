import React, { useState } from "react";
import CompanyService from "../../services/company.service";
import { companyValidators } from "../../components/Validators/Validators";
import CompanyFormModal from "../../components/CompanyFormModal/CompanyFormModal";

const ExampleCreateCompany = () => {
  const [company, setCompany] = useState({
    companyName: "",
    website: "",
  });

  const [errors, setErrors] = useState({
    companyName: null,
    website: null,
  });

  const companyService = new CompanyService();

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
    <div className="flex justify-center">
      <CompanyFormModal
        isValid={() => isValid()}
        handleSubmit={(e) => handleSubmit(e)}
        handleChange={(e) => handleChange(e)}
        fields={{ ...company }}
        errors={{ ...errors }}
      />
    </div>
  );
};

export default ExampleCreateCompany;
