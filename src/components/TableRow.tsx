import React, { useContext } from "react";
import { Context } from "../Context";

export const TableRow = () => {
  const { data } = useContext(Context);

  return (
    <tbody>
      {data.map((row, i) => {
        return (
          <tr>
            <td>{row.vendorname}</td>
            <td>{row.address}</td>
            <td>{row.city}</td>
            <td>{row.zip}</td>
            <td>{row.phone}</td>
            <td>{row.products}</td>
          </tr>
        );
      })}
    </tbody>
  );
};