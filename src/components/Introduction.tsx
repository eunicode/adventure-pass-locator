import React from "react";

const Introduction = () => {
  return (
    <>
      <p style={{ textAlign: "left" }}>
        This site works with California zip codes to find Southern California
        forest recreation pass vendors within a 50 mile radius ordered by
        closest distance. Zip code distances are great-circle distances
        calculated using the Haversine formula.
      </p>
      <p style={{ textAlign: "left" }}>
        All vendor information is from the{" "}
        <a href="https://www.fs.usda.gov/detailfull/r5/passes-permits/recreation/?cid=STELPRDB5181410&width=full">
          USDA Forest Service website
        </a>
        . The distance data is from the{" "}
        <a
          href="https://www.nber.org/research/data/zip-code-distance-database
"
        >
          National Bureau of Economic Research
        </a>
        .
      </p>
      <p style={{ textAlign: "left" }}>
        Enter your zip code to locate the nearest adventure pass vendor!
      </p>
    </>
  );
};

export default Introduction;
