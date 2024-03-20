import React from "react";

function Breadcrumbs({ data }) {
  return (
    <div className="breadcrumbs">
      <p className="title">PROFILE</p> |
      <div className="navigation">Home &gt; {data?.one}</div>
    </div>
  );
}

export default Breadcrumbs;
