import React from "react";

const Mask = ({ h1, h5 }) => {
  return (
    <div className="mask">
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-black text-center">
          <br />
          <br />
          <br />
          <h1 className="mb-3" style={{ fontSize: "60px" }}>
            {h1}
          </h1>
          <h5 className="mb-3 fw-light" style={{ fontSize: "20px" }}>
            {h5}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Mask;
