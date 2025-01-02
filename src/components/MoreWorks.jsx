import ListWorks from "./LIstWorks";

const MoreWorks = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-8 md:gap-20 pt-6">
        <h1 className="col-span-2 text-wrap ">
          More experience I've worked on
        </h1>
        <div className="col-span-10">
          <h1 className="font-bold text-3xl">
            MORE <span className="font-noto-serif">WORKS</span>
          </h1>
        </div>
        <div className="container col-span-12 bg-gray-700 h-[1.2px]"></div>
      </div>
      <div className="col-span-12">
        <ListWorks />
      </div>
    </div>
  );
};
export default MoreWorks;
