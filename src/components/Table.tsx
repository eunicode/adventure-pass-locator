import React, { useContext } from "react";
import { Context } from "../Context";
import { TableRow } from "./TableRow";

const Table = () => {
  const { colNames } = useContext(Context);
  // console.log({ data });
  return (
    <table>
      <thead>
        <tr>
          {colNames.map((name, i) => (
            <th key={i}>{name}</th>
          ))}
        </tr>
      </thead>
      <TableRow />
      {/* {data.map((vendor, i) => (
        <div key={i}>{vendor.vendorname} </div>
      ))} */}
    </table>
  );
};

export default Table;
