import style from "./services.module.css";
import Image from "next/image";

function SingleService({ data }) {
  return (
    <div>
      <div className={style.service_img}>
        <Image
          src={data?.img}
          width={960}
          height={369}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          // priority={true}
          // loader="eager"
          alt="Service Image"
        />
        {/* <img width="100%" height="auto" src={data?.img} alt="" /> */}
      </div>

      <h5 className="my-4 text-center">{data?.title}</h5>

      <div className="d-flex justify-content-between ms-2">
        <div className="d-flex justify-content-center w-50">
          {" "}
          <div>
            {data?.content?.map((x) => {
              return (
                <p key={x} className="d-flex align-items-center">
                  <div className="bullet-point"></div>
                  {x}
                </p>
              );
            })}
          </div>
        </div>

        <div className="d-flex justify-content-center w-50">
          <div>
            {data?.content2?.map((x) => {
              return (
                <p key={x} className="d-flex align-items-center">
                  {" "}
                  <div className="bullet-point"></div>
                  {x}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleService;
