import React from "react";

function SingleService({ data }) {
  return (
    <div>
      <img width="100%" height="auto" src={data?.img} alt="" />

      <h5 className="my-4">{data?.title}</h5>

      <div className="d-flex align-items-center justify-content-between ms-2">
        <div>
          {data?.content?.map((x) => {
            return <p key={x}>{x}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleService;
