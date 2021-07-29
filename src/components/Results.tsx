import React, { useContext } from "react";
import { Context } from "../Context";

const Results = () => {
  const { closest } = useContext(Context);

  return <div>{closest}</div>;
};

export default Results;
