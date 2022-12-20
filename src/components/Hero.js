import React from "react";

const Hero = () => {
  const style = {
    backgroundImage:
      'url("https://i.pcmag.com/imagery/roundups/04IO6TOCwneP1XfWCkj1DSQ-5.fit_lim.size_1600x900.v1666203883.jpg")',
    height: "600px",
    marginTop: "58px",
  };
  return (
    <div className="p-5 text-center bg-image" style={style}>
      <div className="mask text-center">
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-black">
            <br />
            <br />
            <br />
            <h1 className="mb-3" style={{ fontSize: "80px" }}>
              Galaxy gifts
            </h1>
            <h1 className="mb-3" style={{ fontSize: "80px" }}>
              for your whole world
            </h1>
            <h4 className="mb-3">
              Get your gifting all wrapped up with the wide range of Galaxy
              devices.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
