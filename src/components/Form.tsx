import React, { useState, useContext } from "react";
import { Context } from "../Context";

const Form = () => {
  const [zipcodeLoc, setZipcodeLoc] = useState("");
  const { setJsonData } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting zipcode: ${zipcodeLoc}`);
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
