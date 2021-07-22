import React, { useContext } from "react";
import { Context } from "../Context";
import TableData from "./TableData";

const TableRow = () => {
  const { jsonData } = useContext(Context);

  return (
    <tbody>
      {jsonData.map((row, i) => {
        return (
          <tr key={i}>
            <TableData row={row} />
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableRow;

/* 

  {jsonData.map((row, i) => {
        return <tr key={i}>
          <TableData row={row} />
        </tr>;
      })}

*/
