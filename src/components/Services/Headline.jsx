import React from "react";

function Headline({ data }) {
  return (
    <div className="d-flex my-2">
      <img src="/images/icon.png" alt="" height="50px" />
      <div>
        <h2>1. OUR SERVICES</h2>
        <h5>{data?.subTitle}</h5>
      </div>
    </div>
  );
}

export default Headline;
