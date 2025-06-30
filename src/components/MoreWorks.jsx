import ListWorks from "./works/ListWorks";

const MoreWorks = () => {
   return (
      <div id="works">
         <div className="grid grid-cols-12 md:grid-cols-6 gap-16 md:gap-20 pt-6 overflow-hidden">

            <h1 className="col-span-2 text-wrap text-justify">
               More experience I've worked on
            </h1>
            <div className="col-span-12 md:col-span-4">
               <h1 className="font-bold text-3xl">
                  MORE <span className="font-noto-serif">WORKS</span>
               </h1>
            </div>
         </div>

         <div className="w-full h-[1.2px] bg-gray-700 my-4" />
         <div className="col-span-12">
            <ListWorks />
         </div>
      </div>
   );
};

export default MoreWorks;
