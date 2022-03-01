const companyValidators = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Company name is required";
    }
    return message;
  },

  website: (value) => {
    let message;
    if (!value) {
      message = "Website is required";
    }
    return message;
  },
};

const flightValidators = {
  date: (value) => {
    let message;
    if (!value) {
      message = "Date is required";
    }
    return message;
  },
  originCountry: (value) => {
    let message;
    if (!value) {
      message = "Origin country is required";
    }
    return message;
  },
  originContinent: (value) => {
    let message;
    if (!value) {
      message = "Origin Continent is required";
    }
    return message;
  },
  destinationCountry: (value) => {
    let message;
    if (!value) {
      message = "Destination country is required";
    }
    return message;
  },
  destinationContinent: (value) => {
    let message;
    if (!value) {
      message = "Destination continent is required";
    }
    return message;
  },
  seats: (value) => {
    let message;
    if (!value) {
      message = "Seats are required";
    }
    return message;
  },
};

export { companyValidators, flightValidators };
