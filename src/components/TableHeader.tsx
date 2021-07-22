import React, { useContext } from "react";
import { Context } from "../Context";

const TableHeader = () => {
  const { colNames } = useContext(Context);

  return (
    <thead>
      <tr>
        {colNames.map((name, i) => (
          <th key={i}>{name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
