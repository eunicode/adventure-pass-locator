import React, { useContext } from "react";
import { Context } from "../Context";

const Table = () => {
  const { data } = useContext(Context);
  console.log({ data });
  return (
    <>
      {data.map((vendor, i) => (
        <div key={i}>{vendor.vendorname} </div>
      ))}
    </>
  );
};

export default Table;
