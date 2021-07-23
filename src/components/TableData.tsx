import React from "react";

const TableData = ({ row }) => {
  // console.log("hi");

  const iterateObject = (vendor) => {
    const dataArr = [];

    for (const [key, value] of Object.entries(vendor)) {
      dataArr.push(<td key={key}>{value}</td>);
    }

    return dataArr;
  };

  return <>{iterateObject(row)}</>;
};

export default TableData;
