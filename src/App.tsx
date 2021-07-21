import React, { useState } from "react";
import logo from "./logo.svg";
import "normalize.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>Adventure Pass Vendor Locator</header>
      <form>
        <label htmlFor=""></label>
        <input
          type="text"
          name=""
          value={1}
          onChange={() => console.log("hi")}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
