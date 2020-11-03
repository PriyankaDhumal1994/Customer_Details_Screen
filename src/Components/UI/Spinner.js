import React from "react";

const Spinner = () => {
  console.log("I am inside spinner");
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        {/* <span className="sr-only">Loading...</span> */}
      </div>
    </div>
  );
};

export default Spinner;
