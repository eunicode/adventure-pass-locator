import React, { useState, useContext } from "react";
import logo from "./logo.svg";
import "normalize.css";
import "./App.css";
import { Context } from "./Context";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Form from "./components/Form";
import Table from "./components/Table";
import Results from "./components/Results";

const App = () => {
  const appContext = useContext(Context);
  const { loading, submitted } = appContext;
  return (
    <div className="App">
      <section>
        <Header />
        <Introduction />
      </section>
      <section>
        <Form />
      </section>
      <section>{submitted ? <Results /> : <div></div>}</section>
      <section>
        {loading ? (
          <h2 className="table-loading">...Fetching table</h2>
        ) : (
          <Table />
        )}
        {/* <Table /> */}
      </section>
    </div>
  );
};

export default App;

/* 
ERRORS

can't perform a react state update on an unmounted component

WAITING FOR FETCH() FALLBACK COMPONENT

If loading is complete, instantiate Table. Else return a loading message.

EXPORT
Allowed
export const = ...
export default <expression>
export default function () {...}

Not allowed
export default const = ...

Why Is `Export Default Const` invalid?
https://stackoverflow.com/questions/36261225/why-is-export-default-const-invalid

Correct
const Tab = connect()();
export default Tab;

Incorrect
export default const Tab = connect()()

default keyword expects a HoistableDeclaration, ClassDeclaration or AssignmentExpression to follow it.
*/
