const Vendor = (vendorJson) => {
  const combineString = () => {
    return `${vendorJson.address} ${vendorJson.city}, CA ${vendorJson.zip}`;
  };

  return {
    ...vendorJson,
    fullAddress: combineString(),
  };
};

/* 
Factory function
Class
*/
