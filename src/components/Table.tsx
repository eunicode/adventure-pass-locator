import React from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const Table = () => {
  return (
    <table style={{ marginTop: 20 }}>
      <TableHeader />
      <TableRow />
    </table>
  );
};

export default Table;
