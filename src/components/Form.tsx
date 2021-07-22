import React, { useState, useContext } from "react";
import { Context } from "../Context";

const Form = () => {
  const [zipcode, setZipcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting zipcode: ${zipcode}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Zipcode:
        <input
          type="text"
          name=""
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
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
 */
