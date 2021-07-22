import React, { useState, useContext } from "react";
import logo from "./logo.svg";
import "normalize.css";
import "./App.css";
import { Context } from "./Context";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";

const App = () => {
  const appContext = useContext(Context);
  const { loading } = appContext;
  return (
    <div className="App">
      <Header />
      <section>
        <p>Enter your zipcode to locate the nearest adventure pass vendor!</p>
        <p>
          All vendor information is from the{" "}
          <a href="https://www.fs.usda.gov/detailfull/r5/passes-permits/recreation/?cid=STELPRDB5181410&width=full">
            USDA Forest Service website
          </a>
          .
        </p>
      </section>
      <section>
        <Form />
      </section>
      <section>
        {loading ? (
          <h1 className="text-center">...fetching table</h1>
        ) : (
          <Table />
        )}
        {/* <Table /> */}
      </section>
    </div>
  );
};

export default App;
