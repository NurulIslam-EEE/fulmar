import React from "react";

import style from "./services.module.css";

function SingleService({ data }) {
  return (
    <div>
      <div className={style.service_img}>
        <img width="100%" height="auto" src={data?.img} alt="" />
      </div>

      <h5 className="my-4">{data?.title}</h5>

      <div className="d-flex justify-content-between ms-2">
        <div>
          {data?.content?.map((x) => {
            return <p key={x}>{x}</p>;
          })}
        </div>
        <div>
          {data?.content2?.map((x) => {
            return <p key={x}>{x}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleService;
