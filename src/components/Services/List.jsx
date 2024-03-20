import React from "react";
import styles from "./services.module.css";

function List({ data }) {
  return (
    <div>
      {data?.map((d) => {
        return (
          <div className="d-flex align-items-center my-1">
            <div className={styles.circle_bullet}></div>
            <p> {d} </p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
