import React, { useState } from "react";
import logo from "./logo.svg";
import "normalize.css";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <section>
        <p>Enter your zipcode to locate the nearest adventure pass vendor!</p>
        <p>
          All vendor information is from the
          <a href="https://www.fs.usda.gov/detailfull/r5/passes-permits/recreation/?cid=STELPRDB5181410&width=full">
            USDA Forest Service website
          </a>
          .
        </p>
      </section>
      <section>
        <Form />
      </section>
    </div>
  );
};

export default App;
