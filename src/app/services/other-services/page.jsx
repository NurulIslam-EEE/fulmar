import Navigation from "@/components/Navigation/Navigation";
import dynamic from "next/dynamic";
// import SingleService from "@/components/Services/SingleService";
const SingleService = dynamic(
  () => import("@/components/Services/SingleService"),
  {
    ssr: false,
  }
);

function page() {
  const data = ["Sludge & Slop Removal", " Garbage Disposal", "Tank Cleaning"];
  const data2 = ["Hatch Cleaning", " Chipping", "Painting"];
  return (
    <div className="container">
      <Navigation />
      <SingleService
        data={{
          title: "OTHER ITEMS",
          content: data,
          content2: data2,
          img: "/images/OTHER SERVICES SHIP CHANDLER.jpg",
        }}
      />
    </div>
  );
}

export default page;
