import React, { useState, useContext } from "react";
import { Context } from "../Context";
import { findVendors } from "../utils/data-processing";

const Form = () => {
  const [zipcodeLoc, setZipcodeLoc] = useState("");
  const {
    zipcode,
    setZipcode,
    jsonData,
    setJsonData,
    setClosest,
    zipHashT,
    setSubmitted,
  } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting zipcode: ${zipcodeLoc}`);
    setZipcode(zipcodeLoc);
    let nearestVendor = findVendors(zipcodeLoc, zipHashT, jsonData);
    console.log({ nearestVendor });
    setClosest(nearestVendor);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Zipcode:
        <input
          type="text"
          name=""
          value={zipcodeLoc}
          onChange={(e) => setZipcodeLoc(e.target.value)}
        />
      </label>
      {/* <button type="submit">Submit</button> */}
      <input type="submit" />
    </form>
  );
};

export default Form;

/*
https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd

React Form
Tania Rascia react tutorial 

 */
